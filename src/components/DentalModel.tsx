'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/tooth_model.glb'); 
  return <primitive object={scene} />;
}

export default function DentalModel() {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#ffffff']} />
        
        <Suspense fallback={null}>
          <Stage 
            environment="city" 
            intensity={0.5} 
            contactShadow={{ opacity: 0.4, blur: 2 }}
            adjustCamera={1.8} 
            center
          >
            <Model />
          </Stage>
        </Suspense>

        <OrbitControls 
          makeDefault 
          minDistance={3} 
          maxDistance={10} 
          enablePan={false}
          minPolarAngle={0} 
          maxPolarAngle={Math.PI / 1.75} 
          // 💡 ここにあった autoRotate と autoRotateSpeed を削除しました
        />
      </Canvas>
    </div>
  );
}