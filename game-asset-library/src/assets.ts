export type ModelEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
    // Canvas parameters
    background?: string
    canvasHeight?: string
    canvasWidth?: string
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
            },
        ],
        conceptArt: [
            {
                title: 'Battle Axe Concept',
                id: 'assets/miscellaneous/concept-art/battle/concept.jpeg',
                description: 'Initial concept sketch for the stylized battle axe design.',
                thumbnail: 'assets/miscellaneous/concept-art/battle/concept.jpeg',
                maxHeight: '100%',
            },
        ]
    },
}