export type ModelEntry = {
    title: string
    id: string
    description?: string
    thumbnail?: string
    // Canvas parameters
    background?: string
    environment?: string
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
    width?: string
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
                title: 'Cartoon Head',
                id: 'assets/miscellaneous/3d-models/cartoon-head/cartoon-head.glb',
                description: 'A stylized high-poly villain head sculpt ready created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/cartoon-head/cartoon-head.png',
                cameraPosition: [3, 0, 4],
            },
            {
                title: 'TV Man',
                id: 'assets/miscellaneous/3d-models/tv-man/tv-man.glb',
                description: 'A cartoon tv man in a walk cycle ready for game engine import created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/tv-man/tv-man.png',
                cameraPosition: [12, 4, 10],
            },
            {
                title: 'Spitfire Airplane',
                id: 'assets/miscellaneous/3d-models/spitfire-airplane/spitfire-airplane.glb',
                description: 'A spitfire airplane flying over a city ready for game engine import created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/spitfire-airplane/spitfire-airplane.png',
                background: '#3f3f3f',
                environment: 'assets/miscellaneous/3d-models/spitfire-airplane/spitfire-airplane.exr',
                canvasHeight: '500px',
                canvasWidth: '100%',
                cameraPosition: [8, 1, 18],
                fov: 60,
                ambientLightIntensity: 2.0,
                directionalLightPosition: [5, 0, 16],
            },
            {
                title: 'Stylized Battle Axe',
                id: 'assets/miscellaneous/3d-models/axe/axe.glb',
                description: 'An axe created following Grant Abbitt\'s "Detailed Game Assets" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/axe/axe.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '100%',
                cameraPosition: [0, 1, 4.3],
                fov: 60,
                ambientLightIntensity: 2.0,
                directionalLightPosition: [5, 0, 16],
            },
            {
                title: 'Modular Dungeon',
                id: 'assets/miscellaneous/3d-models/modular-dungeon/modular-dungeon.glb',
                description: 'A modular dungeon ready for game engine import created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/modular-dungeon/modular-dungeon.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '100%',
                cameraPosition: [20, 10, 20],
                fov: 60,
                ambientLightIntensity: 0.0,
                directionalLightPosition: [1, 4, 30],
            },
            {
                title: 'Lighthouse Island',
                id: 'assets/miscellaneous/3d-models/lighthouse/lighthouse.glb',
                description: 'A lighthouse on an island scene created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/lighthouse/lighthouse.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '100%',
                cameraPosition: [3, 2, -14],
                fov: 60,
                ambientLightIntensity: 0.0,
                directionalLightPosition: [1, 4, 30],
            },
            {
                title: 'Low Poly Dinosaur',
                id: 'assets/miscellaneous/3d-models/low-poly-dinosaur/low-poly-dinosaur.glb',
                description: 'A modular dungeon ready for game engine import created following Grant Abbitt\'s "Complete Blender Creator 3: Learn 3D Modelling for Beginners" tutorial series.',
                thumbnail: 'assets/miscellaneous/3d-models/low-poly-dinosaur/low-poly-dinosaur.png',
                background: '#3f3f3f',
                canvasHeight: '500px',
                canvasWidth: '100%',
                cameraPosition: [20, 10, 20],
                fov: 60,
                ambientLightIntensity: 0.0,
                directionalLightPosition: [1, 4, 30],
            },
        ],
        conceptArt: [
            {
                title: '"Monster Madness" Character Thumbnail Study',
                id: 'assets/miscellaneous/concept-art/monster-madness/monster-madness.pdf',
                description: 'Thumbnail character study with light shading following Grant Abbit\'s "Complete Drawing Course: Create Your Own Drawings & Game Concept Art course"',
                thumbnail: 'assets/miscellaneous/concept-art/monster-madness/monster-madness.png',
                maxHeight: '500px',
            },
            {
                title: 'Castle Concept Art',
                id: 'assets/miscellaneous/concept-art/castle-concept-art/castle-concept-art.pdf',
                description: 'Castle on Floating Island Concept Art following Grant Abbit\'s "Complete Drawing Course: Create Your Own Drawings & Game Concept Art course"',
                thumbnail: 'assets/miscellaneous/concept-art/castle-concept-art/castle-concept-art.png',
                maxHeight: '500px',
            },
        ]
    },
}