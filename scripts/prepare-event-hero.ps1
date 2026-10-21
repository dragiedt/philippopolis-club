<#
Prepares a homepage event card "hero banner" image.

Homepage event cards use 4:3 (1600x1200) JPEGs named "<event>-hero.jpg"
(e.g. alto-salento-hero.jpg, davidoff-hero.jpg). The source photo is
center-cropped to 4:3 and scaled to 1600x1200 so every card crops the same way.

Usage:
  powershell -ExecutionPolicy Bypass -File scripts\prepare-event-hero.ps1 `
    -SourcePath "C:\path\to\photo.jpg" -OutputName "oliva-hero"
#>
param(
  [Parameter(Mandatory = $true)][string]$SourcePath,
  [Parameter(Mandatory = $true)][string]$OutputName,
  [int]$Width = 1600,
  [int]$Height = 1200,
  [int]$Quality = 82
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$imagesDir = Join-Path (Split-Path -Parent $PSScriptRoot) 'public\images'
if (-not (Test-Path -LiteralPath $imagesDir)) {
  New-Item -ItemType Directory -Path $imagesDir | Out-Null
}
$outPath = Join-Path $imagesDir "$OutputName.jpg"

$src = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $SourcePath).Path)
try {
  $targetRatio = $Width / $Height
  $srcRatio = $src.Width / $src.Height

  if ($srcRatio -gt $targetRatio) {
    $cropW = [int][Math]::Round($src.Height * $targetRatio)
    $cropH = $src.Height
  } else {
    $cropW = $src.Width
    $cropH = [int][Math]::Round($src.Width / $targetRatio)
  }
  $cropX = [int](($src.Width - $cropW) / 2)
  $cropY = [int](($src.Height - $cropH) / 2)

  $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
  try {
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $g.DrawImage(
        $src,
        (New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)),
        $cropX, $cropY, $cropW, $cropH,
        [System.Drawing.GraphicsUnit]::Pixel
      )
    } finally {
      $g.Dispose()
    }

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
    $bmp.Save($outPath, $codec, $encoderParams)
  } finally {
    $bmp.Dispose()
  }
} finally {
  $src.Dispose()
}

$out = Get-Item -LiteralPath $outPath
Write-Output ("wrote {0} ({1}x{2}, {3:N0} KB)" -f $out.FullName, $Width, $Height, ($out.Length / 1KB))
