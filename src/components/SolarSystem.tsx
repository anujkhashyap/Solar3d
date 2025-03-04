import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { PlanetConfig } from '../types';
import TexturedPlanet from './TexturedPlanet';

interface SunProps {
  size?: number;
}

const Sun: React.FC<SunProps> = ({ size = 2.5 }) => {
  return (
    <mesh>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={2} />
      <pointLight intensity={1.5} distance={100} decay={2} />
    </mesh>
  );
};

// Fallback component for when textures are loading
const LoadingPlanet: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#444444" wireframe />
    </mesh>
  );
};

interface SolarSystemProps {
  planets: PlanetConfig[];
}

const SolarSystem: React.FC<SolarSystemProps> = ({ planets }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 30, 60], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sun />
        <Suspense fallback={<LoadingPlanet />}>
          {planets.map((planet) => (
            <TexturedPlanet key={planet.id} planet={planet} />
          ))}
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default SolarSystem;