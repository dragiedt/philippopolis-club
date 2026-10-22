const variantName = (src: string) => src.split('/').pop()!.replace('.jpg', '').toLowerCase().replace('_', '-')

export const galleryVariant = (src: string, width: 640 | 1280) => `/images/gallery/${variantName(src)}-${width}.jpg`

export const gallerySrcSet = (src: string) => `${galleryVariant(src, 640)} 640w, ${galleryVariant(src, 1280)} 1280w`
