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
    const { projectId, modelId } = useParams()
    const base = import.meta.env.BASE_URL

    // Get the model from the correct project
    const model = projects[projectId || '']?.models.find(m =>
        m.id.includes(modelId || '')
    )

    if (!model) return <p>Model not found</p>

    return (
        <div>
            <h2>{model.title}</h2>
            <div style={{ height: '500px' }}>
                <Canvas
                    camera={{ position: [1, 1, 3], fov: 60 }}
                    style={{ background: '#3f3f3f', height: '500px' }}>
                    <ambientLight intensity={1.0} />
                    <directionalLight position={[1, 1, 10]} />
                    <Suspense fallback={null}>
                        <Model url={`${base}${model.id}`} />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
            <blockquote>
                <em>Right click to pan, left click to rotate, scroll to zoom</em>
            </blockquote>
            <p>{model.description}</p>
        </div>
    )
}
