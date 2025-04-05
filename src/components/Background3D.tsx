import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
} 