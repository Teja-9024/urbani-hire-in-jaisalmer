# Vehicle Images Structure

This folder contains all vehicle images organized by vehicle type.

## Folder Structure

```
public/vehicles/
├── 7-seater/
│   ├── main.webp          # Main display image
│   ├── interior-1.webp    # Interior view 1
│   └── interior-2.webp    # Interior view 2
├── 9-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 12-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 15-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 16-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 17-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 18-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 20-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── 26-seater/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
├── maharaja/
│   ├── main.webp
│   ├── interior-1.webp
│   └── interior-2.webp
└── default/
    └── main.webp          # Fallback image
```

## How to Add/Update Images

1. **Add images** to the respective vehicle folder
2. **Naming convention**: 
   - `main.webp` - Primary display image (used in cards and hero)
   - `interior-1.webp` - First interior/gallery image
   - `interior-2.webp` - Second interior/gallery image
   - You can add more images as needed

3. **Update paths** in `lib/vehicleImages.ts` if you add more images or change names

## Image Requirements

- **Format**: WebP recommended for best performance (PNG/JPG also work)
- **Size**: 
  - Main images: 800x600px or larger
  - Gallery images: 600x400px or larger
- **Aspect Ratio**: 4:3 or 16:9 recommended

## Configuration File

All image paths are managed in `lib/vehicleImages.ts`. 

To add more images or change names, edit that file:

```typescript
// Example: Adding a new gallery image
"9-seater": {
  main: `/vehicles/9-seater/main.webp`,
  gallery: [
    `/vehicles/9-seater/main.webp`,
    `/vehicles/9-seater/interior-1.webp`,
    `/vehicles/9-seater/interior-2.webp`,
    `/vehicles/9-seater/exterior.webp`, // New image
  ],
},
```
