# Builds 800px-wide variants of every event banner referenced in src/data/events.ts.
# Run after adding a new event banner: powershell -ExecutionPolicy Bypass -File scripts\optimize-event-banners.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$opt = Join-Path $PSScriptRoot "optimize-image.ps1"
$data = Get-Content (Join-Path $root "src\data\events.ts") -Raw

$matches = [regex]::Matches($data, "image:\s*'([^']+\.jpg)'")
$images = $matches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

foreach ($image in $images) {
  $src = Join-Path $root ("public" + $image.Replace("/", "\"))
  if (-not (Test-Path -LiteralPath $src)) { Write-Warning "Missing source: $src"; continue }
  $out = $src -replace "\.jpg$", "-800.jpg"
  & $opt -Source $src -Output $out -Width 800 -Quality 78
}

$heroes = Get-ChildItem (Join-Path $root "public\images") -Filter "*-hero.jpg" -File
foreach ($hero in $heroes) {
  $out = $hero.FullName -replace "\.jpg$", "-800.jpg"
  & $opt -Source $hero.FullName -Output $out -Width 800 -Quality 78
}
