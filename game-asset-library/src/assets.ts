export type ModelEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
    // Canvas parameters
    background?: string
    canvasHeight?: string
    canvasWidth?: string
    cameraPosition?: [number, number, number]
    fov?: number
    ambientLightIntensity?: number
    directionalLightPosition?: [number, number, number]
}

export type ConceptArtEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
    // Sizing parameters
    maxHeight?: string
}

export type ProjectEntry = {
    title: string
    thumbnail?: string
    models: ModelEntry[]
    conceptArt: ConceptArtEntry[]
}

export const projects: Record<string, ProjectEntry> = {
    'miscellaneous': {
        title: 'Miscellaneous',
        thumbnail: 'assets/miscellaneous/miscellaneous-thumbnail.png',
        models: [
            {
                title: 'Stylized Battle Axe',
                id: 'assets/miscellaneous/3d-models/axe/axe.glb',
                description: 'An axe created following Grant Abbitt\'s "Detailed Game Assets" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/axe/axe.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '500px',
                cameraPosition: [0, 1, 4.3],
                fov: 60,
                ambientLightIntensity: 2.0,
                directionalLightPosition: [5, 0, 16],
            },
            {
                title: 'Lighthouse Island',
                id: 'assets/miscellaneous/3d-models/lighthouse/lighthouse.glb',
                description: 'A lighthouse on an island scene created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/axe/axe.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '500px',
                cameraPosition: [3, 2, -14],
                fov: 60,
                ambientLightIntensity: 0.0,
                directionalLightPosition: [1, 4, 30],
            },
        ],
        conceptArt: [
        ]
    },
}