'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

const StarField = (props: any) => {
  const ref = useRef<any>();
  
  // Create stars manually instead of using maath
  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Create random positions in a sphere
    const radius = 1.5 * Math.random();
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background to-background/80">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
        <Preload all />
      </Canvas>
    </div>
  );
} 