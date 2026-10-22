# Resize a single image (optionally flattening transparency onto a solid colour) and save as JPEG/PNG.
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\optimize-image.ps1 -Source "public\images\x.jpg" -Output "public\images\x-800.jpg" -Width 800 -Quality 80
#   powershell -ExecutionPolicy Bypass -File scripts\optimize-image.ps1 -Source "public\images\logo.png" -Output "public\images\logo-card.jpg" -Width 800 -Quality 85 -Background "#1a1410"

param(
  [Parameter(Mandatory = $true)][string]$Source,
  [Parameter(Mandatory = $true)][string]$Output,
  [int]$Width = 0,
  [int]$Height = 0,
  [int]$Quality = 80,
  [string]$Background = ""
)

Add-Type -AssemblyName System.Drawing

$srcPath = (Resolve-Path $Source).Path
$outPath = if ([System.IO.Path]::IsPathRooted($Output)) { $Output } else { Join-Path (Get-Location).Path $Output }

$img = [System.Drawing.Image]::FromFile($srcPath)
try {
  if ($Width -le 0 -and $Height -le 0) { throw "Specify -Width and/or -Height." }

  $scale = 1.0
  if ($Width -gt 0 -and $Height -gt 0) {
    $scale = [Math]::Min($Width / $img.Width, $Height / $img.Height)
  } elseif ($Width -gt 0) {
    $scale = $Width / $img.Width
  } else {
    $scale = $Height / $img.Height
  }
  if ($scale -gt 1) { $scale = 1 }

  $drawW = [Math]::Max(1, [int][Math]::Round($img.Width * $scale))
  $drawH = [Math]::Max(1, [int][Math]::Round($img.Height * $scale))

  $canvasW = if ($Width -gt 0 -and $Height -gt 0) { $Width } else { $drawW }
  $canvasH = if ($Width -gt 0 -and $Height -gt 0) { $Height } else { $drawH }

  $flat = $Background -ne ""
  $bmp = New-Object System.Drawing.Bitmap($canvasW, $canvasH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  try {
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    if ($flat) {
      $g.Clear([System.Drawing.ColorTranslator]::FromHtml($Background))
    } else {
      $g.Clear([System.Drawing.Color]::White)
    }
    $x = [int](($canvasW - $drawW) / 2)
    $y = [int](($canvasH - $drawH) / 2)
    $g.DrawImage($img, $x, $y, $drawW, $drawH)
  } finally {
    $g.Dispose()
  }

  $dir = Split-Path -Parent $outPath
  if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

  $ext = [System.IO.Path]::GetExtension($outPath).ToLower()
  $tmp = "$outPath.tmp"
  if ($ext -eq ".png") {
    $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
  } else {
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
    $bmp.Save($tmp, $codec, $params)
  }
  $bmp.Dispose()
  if (Test-Path -LiteralPath $outPath) { Remove-Item -LiteralPath $outPath -Force }
  Move-Item -LiteralPath $tmp -Destination $outPath

  $kb = [Math]::Round((Get-Item -LiteralPath $outPath).Length / 1KB)
  "$Output -> ${canvasW}x${canvasH} ${kb}KB"
} finally {
  $img.Dispose()
}
