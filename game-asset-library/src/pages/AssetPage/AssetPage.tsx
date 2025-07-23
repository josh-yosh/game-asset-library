import { useParams } from 'react-router-dom'
import { projects, type ConceptArtEntry, type ModelEntry } from '../../assets'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

export default function AssetPage() {
    const { projectId, assetType, assetId } = useParams()
    const base = import.meta.env.BASE_URL

    const project = projects[projectId || '']
    if (!project) return <p>Project not found</p>

    let asset
    if (assetType === '3d-models') {
        asset = project.models.find(m => m.id.includes(assetId || ''))
    } else if (assetType === 'concept-art') {
        asset = project.conceptArt.find(a => a.id.includes(assetId || ''))
    }

    if (!asset) return <p>Asset not found</p>

    // Type guard functions
    const isModelEntry = (_asset: ModelEntry | ConceptArtEntry): _asset is ModelEntry => {
        return assetType === '3d-models'
    }

    const isConceptArtEntry = (_asset: ModelEntry | ConceptArtEntry): _asset is ConceptArtEntry => {
        return assetType === 'concept-art'
    }

    return (
        <div className='page-content'>
            <h2>{asset.title}</h2>

            {isModelEntry(asset) ? (
                <>
                    <div style={{ height: '500px' }}>
                        <Canvas
                            camera={{ position: asset.cameraPosition || [1, 1, 3], fov: asset.fov || 60 }}
                            style={{
                                background: asset.background || '#3f3f3f',
                                height: asset.canvasHeight || '500px',
                                width: asset.canvasWidth || '500px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}>
                            <ambientLight intensity={asset.ambientLightIntensity || 1.0} />
                            <directionalLight position={asset.directionalLightPosition || [1, 1, 10]} />
                            <Suspense fallback={null}>
                                <Model url={`${base}${asset.id}`} />
                            </Suspense>
                            <OrbitControls />
                        </Canvas>
                    </div>
                    <blockquote>
                        <em>Right click to pan, left click to rotate, scroll to zoom</em>
                    </blockquote>
                </>
            ) : isConceptArtEntry(asset) ? (
                <div style={{ maxWidth: '100%', textAlign: 'center' }}>
                    <img
                        src={`${base}${asset.id}`}
                        alt={asset.title}
                        style={{
                            maxWidth: '100%',
                            maxHeight: asset.maxHeight || '100%',
                            objectFit: 'contain',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
            ) : null}

            <p>{asset.description}</p>
        </div>
    )
}