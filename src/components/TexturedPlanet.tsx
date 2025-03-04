import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { PlanetConfig } from '../types';

interface TexturedPlanetProps {
  planet: PlanetConfig;
}

const TexturedPlanet: React.FC<TexturedPlanetProps> = ({ planet }) => {
  const { size, speed, orbitDistance, texture, color } = planet;
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  
  let planetTexture;
  
  try {
    if (texture) {
      planetTexture = useLoader(TextureLoader, texture);
    }
  } catch (error) {
    console.error(`Failed to load texture for ${planet.name}:`, error);
  }

  useFrame(({ clock }) => {
    if (planetRef.current && orbitRef.current) {
      // Rotate planet around its axis
      planetRef.current.rotation.y += 0.01;
      
      // Rotate planet around the sun
      orbitRef.current.rotation.y = clock.getElapsedTime() * 0.1 * speed;
    }
  });

  // Draw orbit path
  const orbitPath = () => {
    return (
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitDistance, orbitDistance + 0.05, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent={true} />
      </mesh>
    );
  };

  return (
    <>
      {orbitPath()}
      <group ref={orbitRef}>
        <mesh position={[orbitDistance, 0, 0]} ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          {planetTexture ? (
            <meshStandardMaterial map={planetTexture} />
          ) : (
            <meshStandardMaterial color={color} />
          )}
        </mesh>
      </group>
    </>
  );
};

export default TexturedPlanet;