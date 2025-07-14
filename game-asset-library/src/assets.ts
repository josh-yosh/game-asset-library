export type ModelEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
}

export type ConceptArtEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
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
                thumbnail: 'assets/miscellaneous/3d-models/axe/axe.png'
            },
        ],
        conceptArt: [
            {
                title: 'Battle Axe Concept',
                id: 'assets/miscellaneous/concept-art/battle/concept.jpeg',
                description: 'Initial concept sketch for the stylized battle axe design.',
                thumbnail: 'assets/miscellaneous/concept-art/battle/concept.jpeg'
            },
        ]
    },
}