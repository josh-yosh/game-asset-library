export type ModelEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
}

export type ProjectEntry = {
    title: string
    thumbnail?: string
    models: ModelEntry[]
}

export const projects: Record<string, ProjectEntry> = {
    'miscellaneous': {
        title: 'Miscellaneous',
        thumbnail: 'models/miscellaneous/miscellaneous-thumbnail.png',
        models: [
            {
                title: 'Stylized Battle Axe',
                id: 'models/miscellaneous/axe/axe.glb',
                description: 'An axe created following Grant Abbitt\'s "Detailed Game Assets" tutorial series.',
                thumbnail: 'models/miscellaneous/axe/axe.png'
            }
        ]
    },

    'first-person-shooter': {
        title: 'First-Person Shooter',
        thumbnail: 'thumbnails/fps/project-thumb.png',
        models: []
    }
}
