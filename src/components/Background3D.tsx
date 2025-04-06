'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Vector3 } from 'three';

const StarField = (props: any) => {
  const ref = useRef<any>();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
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