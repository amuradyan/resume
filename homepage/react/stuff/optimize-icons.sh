#!/usr/bin/env bash

for f in *.png; do
  base="${f%.png}"
  inkscape "$f" --export-type=svg --export-filename="$base.svg"
  svgo "$base.svg" -o "$base.min.svg"
done
