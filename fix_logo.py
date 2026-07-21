import re

with open('public/images/logo.svg', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the entire layer-MC0 group (dark background rectangle)
content = re.sub(r'<g\s+id="layer-MC0"[^>]*>.*?</g>', '', content, flags=re.DOTALL)

# Change white fills to brand-900 dark color for light backgrounds
content = content.replace('fill:#ffffff', 'fill:#1a1410')

# Change dark detail fills to transparent (they were cutouts on dark bg)
content = content.replace('fill:#100f0d', 'fill:none')

# Clean up Inkscape namespaces
content = re.sub(r'\s*xmlns:inkscape="[^"]*"', '', content)
content = re.sub(r'\s*xmlns:sodipodi="[^"]*"', '', content)
content = re.sub(r'\s*sodipodi:docname="[^"]*"', '', content)

# Remove Inkscape namedview metadata
content = re.sub(r'<sodipodi:namedview[^>]*>.*?</sodipodi:namedview>', '', content, flags=re.DOTALL)

# Remove empty defs
content = re.sub(r'<defs\s+id="defs1"\s*/>', '', content)

# Remove inkscape attributes from remaining elements
content = re.sub(r'\s+inkscape:[a-z]+="[^"]*"', '', content)

# Clean up empty lines
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
content = content.strip()

with open('public/images/logo.svg', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done. Size: {len(content)} bytes')
