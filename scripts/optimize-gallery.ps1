param(
  [string]$SourceDir = "public/images/drive",
  [string]$OutputDir = "public/images/gallery",
  [int[]]$Widths = @(640, 1280),
  [int]$Quality = 82
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$galleryFile = Join-Path $PSScriptRoot "..\src\pages\Gallery.tsx"
$names = Select-String -Path $galleryFile -Pattern "GC_\d+\.jpg" -AllMatches |
  ForEach-Object { $_.Matches } |
  ForEach-Object { $_.Value } |
  Sort-Object -Unique

if (-not $names) { throw "No GC_*.jpg references found in $galleryFile" }
if (-not (Test-Path -LiteralPath $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir | Out-Null }

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

$before = 0L
$after = 0L

foreach ($name in $names) {
  $src = Join-Path $SourceDir $name
  if (-not (Test-Path -LiteralPath $src)) { Write-Warning "missing $src"; continue }
  $before += (Get-Item -LiteralPath $src).Length

  $img = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $src))
  try {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($name).ToLower().Replace("_", "-")
    foreach ($w in $Widths) {
      $h = [int][math]::Round($img.Height * ($w / $img.Width))
      if ($w -gt $img.Width) { $w = $img.Width; $h = $img.Height }
      $bmp = New-Object System.Drawing.Bitmap($w, $h)
      try {
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        try {
          $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
          $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
          $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
          $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
          $g.DrawImage($img, 0, 0, $w, $h)
        } finally { $g.Dispose() }

        $out = Join-Path $OutputDir "$base-$w.jpg"
        $tmp = "$out.tmp"
        $bmp.Save($tmp, $codec, $encParams)
        Move-Item -LiteralPath $tmp -Destination $out -Force
        $after += (Get-Item -LiteralPath $out).Length
      } finally { $bmp.Dispose() }
    }
  } finally { $img.Dispose() }
}

"gallery: {0} sources, {1:N1} MB -> {2:N1} MB ({3:N0} variants)" -f $names.Count, ($before / 1MB), ($after / 1MB), ($names.Count * $Widths.Count)
