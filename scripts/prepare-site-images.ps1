# Generates the site's optimised image derivatives from the originals in public/images (and images/drive).
# Safe to re-run; every output is rebuilt from its source.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\prepare-site-images.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$script = Join-Path $PSScriptRoot "optimize-image.ps1"

function Optimize([string]$src, [string]$out, [int]$w, [int]$q, [string]$bg = "", [int]$h = 0) {
  $params = @{
    Source  = (Join-Path $root $src)
    Output  = (Join-Path $root $out)
    Width   = $w
    Quality = $q
  }
  if ($h -gt 0) { $params.Height = $h }
  if ($bg -ne "") { $params.Background = $bg }
  & $script @params
}

# Heritage / home theatre photo (originally 10 MB, 5912x3934)
Optimize "public\images\drive\photo_167.jpg" "public\images\photo-167-900.jpg" 900 80
Optimize "public\images\drive\photo_167.jpg" "public\images\photo-167-1600.jpg" 1600 80

# OUATIP logo - 32-bit PNG with a transparent surround, flattened onto the section colours it sits on
Optimize "public\images\ouatip-logo.png" "public\images\ouatip-logo-card.jpg" 800 85 "#1a1410"
Optimize "public\images\ouatip-official-logo.png" "public\images\ouatip-official-logo.jpg" 900 85 "#2c241c"
Optimize "public\images\ouatip-logo.png" "public\images\ouatip-og.jpg" 1200 88 "#1a1410" 630

# Low-opacity section backgrounds (rendered at 5-12% opacity, so detail is irrelevant)
Optimize "public\images\membership-hero.jpg" "public\images\membership-hero-1200.jpg" 1200 72
Optimize "public\images\SHB_8024.jpg" "public\images\shb-8024-1200.jpg" 1200 74

# Hero video poster and home feature image
Optimize "public\images\photo_168.jpg" "public\images\photo-168-1280.jpg" 1280 78
Optimize "public\images\home-feature.jpg" "public\images\home-feature-800.jpg" 800 80
Optimize "public\images\home-feature.jpg" "public\images\home-feature-1200.jpg" 1200 80
