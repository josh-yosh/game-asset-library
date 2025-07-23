# Game Assets Repository

A repository for organizing and displaying video game assets including 3D models and concept art.\
To view the deployed website visit: [www.gameassetlibrary.org](www.gameassetlibrary.org)

## Quick Start

1. Create your project folder in `public/assets/`
2. Add your asset files following the directory structure
3. Update `assets.ts` with your asset entries
4. Test that thumbnails and assets load correctly

## Asset Types

This repository supports two types of assets:

- **3D Models** - GLB format models with thumbnails
- **Concept Art** - PDF artwork with thumbnails

## Directory Structure

### 3D Models
```
public/assets/[project-folder]/3d-models/[asset-folder]/
├── asset.glb
└── asset-thumbnail.png
```

### Concept Art
```
public/assets/[project-folder]/concept-art/[asset-folder]/
├── concept-art.pdf
└── concept-art-thumbnail.png
```

## Adding New Assets

### Step 1: Create Asset Folders

1. Navigate to `public/assets/`
2. Create or use an existing project folder (e.g., `miscellaneous`, `rpg-game`, etc.)
3. Create the appropriate asset type folder:
   - For 3D models: `3d-models/[your-asset-name]/`
   - For concept art: `concept-art/[your-asset-name]/`

### Step 2: Add Asset Files

**For 3D Models:**
- Place your `.glb` file in the asset folder
- Add a thumbnail image as `asset-thumbnail.png`

**For Concept Art:**
- Place your PDF file in the asset folder
- Add a thumbnail image as `concept-art-thumbnail.png`

### Step 3: Update assets.ts

Add your asset entries to the `assets.ts` file following the type definitions:

#### Example Configuration

```typescript
export const projects: Record<string, ProjectEntry> = {
    'your-project': {
        title: 'Your Project Name',
        thumbnail: 'assets/your-project/project-thumbnail.png',
        models: [
            {
                title: 'Asset Name',
                id: 'assets/your-project/3d-models/asset-folder/asset.glb',
                description: 'Description of your 3D model',
                thumbnail: 'assets/your-project/3d-models/asset-folder/asset-thumbnail.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '500px',
            },
        ],
        conceptArt: [
            {
                title: 'Concept Art Name',
                id: 'assets/your-project/concept-art/art-folder/concept-art.pdf',
                description: 'Description of your concept art',
                thumbnail: 'assets/your-project/concept-art/art-folder/concept-art-thumbnail.png',
                maxHeight: '100%',
            },
        ]
    },
}
```

## Configuration Options

### 3D Model Parameters
- `background`: Canvas background color (hex format)
- `canvasHeight`: Height of the 3D model viewer
- `canvasWidth`: Width of the 3D model viewer

### Concept Art Parameters
- `maxHeight`: Maximum height for concept art display

## Best Practices

1. **Naming Convention**: Use descriptive, lowercase folder names with hyphens
2. **Thumbnails**: Create clear, representative thumbnails (recommended size: 256x256px)
3. **File Formats**: 
   - 3D Models: `.glb` (preferred for web compatibility)
   - Concept Art: `.pdf` (for high-quality vector/raster art)
4. **Descriptions**: Provide meaningful descriptions for better asset discovery
5. **Organization**: Group related assets under logical project folders

## File Structure Example

```
public/assets/
├── jumpy-bird/
│   ├── 3d-models/
│   │   └── bird/
│   │       ├── bird.glb
│   │       └── bird-thumbnail.png
│   ├── concept-art/
│   │   └── mountains-with-walls/
│   │       ├── mountains-with-walls.pdf
│   │       └── mountains-with-walls-thumbnail.png
│   └── jumpy-bird-thumbnail.png
└── running-man/
    ├── 3d-models/
    │   └── player/
    │       ├── player.glb
    │       └── player-thumbnail.png
    └── running-man-thumbnail.png
```

---

[Link to github](https://github.com/JayYosh/game-asset-library)