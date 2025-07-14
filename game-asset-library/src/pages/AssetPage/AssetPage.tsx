import { useParams } from 'react-router-dom'
import { projects } from '../../assets'
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

    return (
        <div>
            <h2>{asset.title}</h2>
            
            {assetType === '3d-models' ? (
                <>
                    <div style={{ height: '500px' }}>
                        <Canvas
                            camera={{ position: [1, 1, 3], fov: 60 }}
                            style={{
                                    background: '#3f3f3f',
                                    height: '500px',
                                    width: '500px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px'
                                }}>
                            <ambientLight intensity={1.0} />
                            <directionalLight position={[1, 1, 10]} />
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
            ) : (
                <div style={{ maxWidth: '100%', textAlign: 'center' }}>
                    <img
                        src={`${base}${asset.id}`}
                        alt={asset.title}
                        style={{ 
                            maxWidth: '100%', 
                            maxHeight: '70vh', 
                            objectFit: 'contain',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
            )}
            
            <p>{asset.description}</p>
        </div>
    )
}