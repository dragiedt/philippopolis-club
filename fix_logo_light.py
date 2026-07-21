import shutil

# Create white version for dark backgrounds
shutil.copy('public/images/logo.svg', 'public/images/logo-light.svg')

with open('public/images/logo-light.svg', 'r', encoding='utf-8') as f:
    content = f.read()

# White artwork version: change dark fills to white
content = content.replace('fill:#1a1410', 'fill:#ffffff')

with open('public/images/logo-light.svg', 'w', encoding='utf-8') as f:
    f.write(content)

print('Created logo-light.svg')
