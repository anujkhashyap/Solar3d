import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { PlanetConfig } from '../types';
import TexturedPlanet from './TexturedPlanet';
import { TextureLoader } from 'three';
// Import sun texture directly
import sunTexture from '../assets/th.jpg';

interface SunProps {
  size?: number;
}

const Sun: React.FC<SunProps> = ({ size = 2.5 }) => {
  const texture = useLoader(TextureLoader, sunTexture);
  
  return (
    <mesh>
      <Sphere args={[size, 64, 64]}>
        <meshPhongMaterial 
          map={texture}
          emissive="#FDB813"
          emissiveIntensity={0.6}
          shininess={0}
        />
      </Sphere>
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
        {/* Ambient light for overall scene illumination */}
        <ambientLight intensity={0.4} color="#404040" />
        
        {/* Directional light for shadows and depth */}
        <directionalLight 
          intensity={1} 
          position={[5, 3, 5]} 
          color="#ffffff"
        />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={<LoadingPlanet />}>
          <Sun />
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