# /// script
# requires-python = ">=3.12,<3.14"
# dependencies = [
#   "kokoro-onnx==0.6.1",
#   "soundfile==0.13.1",
# ]
# ///

"""Generate static reading MP3s with a locally cached Kokoro model."""

from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
from urllib.request import Request, urlopen

import soundfile as sf
from kokoro_onnx import Kokoro


MODEL_FILES = {
    "kokoro-v1.0.int8.onnx": {
        "url": "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/kokoro-v1.0.int8.onnx",
        "sha256": "ae315a79b623f244700e4afb9246c46a26066782e049ba174bf3ba433970ee9c",
    },
    "voices-v1.0.bin": {
        "url": "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/voices-v1.0.bin",
        "sha256": "bca610b8308e8d99f32e6fe4197e7ec01679264efed0cac9140fe9c29f1fbf7d",
    },
}
VOICE = "af_heart"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def cache_directory() -> Path:
    configured = os.environ.get("KOKORO_CACHE_DIR")
    if configured:
        return Path(configured).expanduser()
    root = Path(os.environ.get("XDG_CACHE_HOME", Path.home() / ".cache"))
    return root / "jjw-fyi" / "kokoro"


def download_model_file(cache: Path, filename: str, details: dict[str, str]) -> Path:
    destination = cache / filename
    if destination.is_file() and sha256(destination) == details["sha256"]:
        return destination

    cache.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_suffix(f"{destination.suffix}.download")
    temporary.unlink(missing_ok=True)
    print(f"Downloading {filename} to {cache}…", file=sys.stderr)
    request = Request(details["url"], headers={"User-Agent": "jjw-fyi-reading-publisher"})
    try:
        with urlopen(request) as response, temporary.open("wb") as output:
            shutil.copyfileobj(response, output)
        actual = sha256(temporary)
        if actual != details["sha256"]:
            raise RuntimeError(
                f"Checksum mismatch for {filename}: expected {details['sha256']}, received {actual}."
            )
        temporary.replace(destination)
    finally:
        temporary.unlink(missing_ok=True)
    return destination


def validated_jobs(payload: object) -> tuple[Path, list[dict[str, str]]]:
    if not isinstance(payload, dict):
        raise ValueError("The synthesis plan must be a JSON object.")
    destination = payload.get("destination")
    jobs = payload.get("jobs")
    if not isinstance(destination, str) or not isinstance(jobs, list):
        raise ValueError("The synthesis plan needs string destination and array jobs fields.")

    validated = []
    for job in jobs:
        if not isinstance(job, dict) or set(job) != {"filename", "input"}:
            raise ValueError("Each synthesis job needs exactly filename and input fields.")
        filename = job["filename"]
        spoken_text = job["input"]
        if (
            not isinstance(filename, str)
            or Path(filename).name != filename
            or not filename.endswith(".mp3")
            or not isinstance(spoken_text, str)
            or not spoken_text.strip()
        ):
            raise ValueError("Each synthesis job needs a safe MP3 filename and non-empty input.")
        validated.append({"filename": filename, "input": spoken_text})
    return Path(destination), validated


def synthesize(destination: Path, jobs: list[dict[str, str]]) -> None:
    ffmpeg = shutil.which("ffmpeg")
    if ffmpeg is None:
        raise RuntimeError("Install ffmpeg before generating reading audio.")

    cache = cache_directory()
    model_paths = {
        filename: download_model_file(cache, filename, details)
        for filename, details in MODEL_FILES.items()
    }
    kokoro = Kokoro(
        str(model_paths["kokoro-v1.0.int8.onnx"]),
        str(model_paths["voices-v1.0.bin"]),
    )
    destination.mkdir(parents=True, exist_ok=True)

    for job in jobs:
        output = destination / job["filename"]
        temporary_output = output.with_suffix(".tmp.mp3")
        temporary_output.unlink(missing_ok=True)
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as handle:
            wav_path = Path(handle.name)
        try:
            print(f"Generating {output.name} with Kokoro voice {VOICE}…", file=sys.stderr)
            samples, sample_rate = kokoro.create(
                job["input"], voice=VOICE, speed=0.98, lang="en-us"
            )
            sf.write(wav_path, samples, sample_rate)
            subprocess.run(
                [
                    ffmpeg,
                    "-hide_banner",
                    "-loglevel",
                    "error",
                    "-y",
                    "-i",
                    str(wav_path),
                    "-codec:a",
                    "libmp3lame",
                    "-b:a",
                    "80k",
                    str(temporary_output),
                ],
                check=True,
            )
            temporary_output.replace(output)
        finally:
            wav_path.unlink(missing_ok=True)
            temporary_output.unlink(missing_ok=True)


def main() -> None:
    destination, jobs = validated_jobs(json.load(sys.stdin))
    synthesize(destination, jobs)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(error, file=sys.stderr)
        raise SystemExit(1) from error
