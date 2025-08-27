import { useParams } from 'react-router-dom'
import { projects, type ConceptArtEntry, type ModelEntry } from '../../assets'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

function Loader() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 10
        }}>
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 'clamp(16px, 4vw, 32px)',
                borderRadius: '8px',
                textAlign: 'center',
                maxWidth: 'clamp(280px, 80vw, 400px)',
                margin: '0 16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
                <div style={{
                    color: 'white',
                    fontSize: 'clamp(14px, 3vw, 20px)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: '500',
                    lineHeight: '1.4'
                }}>
                    Loading 3D Model...
                </div>

                <div style={{
                    marginTop: '16px'
                }}>
                    <div style={{
                        display: 'inline-block',
                        width: 'clamp(20px, 4vw, 32px)',
                        height: 'clamp(20px, 4vw, 32px)',
                        border: '2px solid transparent',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                </div>
            </div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}


function Model({ url, onLoaded }: { url: string, onLoaded?: () => void }) {
    const group = useRef<Group>(null)
    const { scene, animations } = useGLTF(url)
    const { actions, mixer } = useAnimations(animations, group)

    useEffect(() => {
        // Auto-play all animations if they exist
        if (actions && Object.keys(actions).length > 0) {
            Object.values(actions).forEach((action) => {
                action?.reset()
                action?.play()
            })
        }

        // Call onLoaded when model is ready
        if (onLoaded) {
            onLoaded()
        }

        // Cleanup function
        return () => {
            if (mixer) {
                mixer.stopAllAction()
            }
        }
    }, [actions, mixer, onLoaded])

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default function AssetPage() {
    const { projectId, assetType, assetId } = useParams()
    const base = import.meta.env.BASE_URL
    const [isLoading, setIsLoading] = useState(true)
    const controlsRef = useRef<any>(null)

    const project = projects[projectId || '']
    if (!project) return <p>Project not found</p>

    let asset
    if (assetType === '3d-models') {
        asset = project.models.find(m => m.id.includes(assetId || ''))
    } else if (assetType === 'concept-art') {
        asset = project.conceptArt.find(a => a.id.includes(assetId || ''))
    }

    if (!asset) return <p>Asset not found</p>

    // Reset loading state when asset changes
    useEffect(() => {
        setIsLoading(true)
    }, [asset.id])

    // Type guard functions
    const isModelEntry = (_asset: ModelEntry | ConceptArtEntry): _asset is ModelEntry => {
        return assetType === '3d-models'
    }

    const isConceptArtEntry = (_asset: ModelEntry | ConceptArtEntry): _asset is ConceptArtEntry => {
        return assetType === 'concept-art'
    }

    const resetCamera = () => {
        if (controlsRef.current && isModelEntry(asset)) {
            // Reset camera position
            const defaultPosition = asset.cameraPosition || [1, 1, 3]
            controlsRef.current.object.position.set(...defaultPosition)
            
            // Reset target to origin
            controlsRef.current.target.set(0, 0, 0)
            
            // Update controls
            controlsRef.current.update()
        }
    }

    return (
        <div className='page-content'>
            <h2 className='page-header'>{asset.title}</h2>

            {isModelEntry(asset) ? (
                <>
                    <div style={{ height: '500px', width: '100%', position: 'relative'}}>
                        {isLoading && <Loader />}
                        <Canvas
                            key={asset.id} // This recreates the entire Canvas so camera orientation resets
                            camera={{ position: asset.cameraPosition || [1, 1, 3], fov: asset.fov || 60 }}
                            style={{
                                background: asset.background || '#3f3f3f',
                                height: asset.canvasHeight || '500px',
                                width: asset.canvasWidth || '500px',
                            }}
                            className='canvas'
                        >
                            <ambientLight intensity={asset.ambientLightIntensity || 1.0} />
                            <directionalLight position={asset.directionalLightPosition || [1, 1, 10]} />
                            <Suspense fallback={null}>
                                <Model url={`${base}${asset.id}`} onLoaded={() => setIsLoading(false)} />
                                {asset.environment && (
                                    <Environment files={`${base}${asset.environment}`} background />
                                )}
                            </Suspense>
                            <OrbitControls ref={controlsRef} />
                        </Canvas>
                        
                        <button 
                            onClick={resetCamera}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(0, 0, 0, 0.7)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                transition: 'background-color 0.2s ease',
                                zIndex: 5
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'
                            }}
                        >
                            Reset Camera
                        </button>
                    </div>
                    <blockquote>
                        <em>Right click to pan, left click to rotate, scroll to zoom</em>
                    </blockquote>
                </>
            ) : isConceptArtEntry(asset) ? (
                <>
                    <div style={{ maxWidth: '100%', textAlign: 'center' }}>
                        <embed
                            src={`${base}${asset.id}`}
                            type="application/pdf"
                            width={asset.width || '100%'}
                            height={asset.maxHeight || '600px'}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                    <blockquote>
                        <em>Ctrl + scroll to zoom</em>
                    </blockquote>
                </>
            ) : null}

            <p className='description'>{asset.description}</p>
        </div>
    )
}