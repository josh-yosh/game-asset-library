// src/components/ModelViewer.tsx
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

interface ModelProps {
    url: string
}

function Model({ url }: ModelProps) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

export default function ModelViewer() {
    return (
        <div style={{ height: '100vh' }}>
            <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model url="/models/miscellaneous/axe.glb" />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
