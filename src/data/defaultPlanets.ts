import { PlanetConfig } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Import all planet textures
import mercuryTexture from '../assets/mercury.jpg';
import venusTexture from '../assets/venus.jpg';
import earthTexture from '../assets/earth.jpg';
import marsTexture from '../assets/mars.jpg';
import jupiterTexture from '../assets/jupiter.jpg';
import saturnTexture from '../assets/saturn.jpg';
import uranusTexture from '../assets/uranus.jpg';
import neptuneTexture from '../assets/neptune.jpg';
import sunTexture from '../assets/th.jpg';  // Assuming th.jpg is the sun texture

export const defaultPlanets: PlanetConfig[] = [
  {
    id: uuidv4(),
    name: 'Mercury',
    size: 0.38,
    speed: 4.74,
    orbitDistance: 5,
    color: '#A9A9A9',
    texture: '/src/assets/mercury.jpg'
  },
  {
    id: uuidv4(),
    name: 'Venus',
    size: 0.95,
    speed: 3.5,
    orbitDistance: 7,
    color: '#E6E6FA',
    texture: '/src/assets/venus.jpg'
  },
  {
    id: uuidv4(),
    name: 'Earth',
    size: 1,
    speed: 2.98,
    orbitDistance: 10,
    color: '#1E90FF',
    texture: '/src/assets/earth.jpg'
  },
  {
    id: uuidv4(),
    name: 'Mars',
    size: 0.53,
    speed: 2.41,
    orbitDistance: 15,
    color: '#FF4500',
    texture: '/src/assets/mars.jpg'
  },
  {
    id: uuidv4(),
    name: 'Jupiter',
    size: 11.2,
    speed: 1.31,
    orbitDistance: 25,
    color: '#F4A460',
    texture: new URL('../assets/saturn.jpg', import.meta.url).href
  },
  {
    id: uuidv4(),
    name: 'Saturn',
    size: 9.45,
    speed: 0.97,
    orbitDistance: 35,
    color: '#FFD700',
    texture: '/src/assets/saturn.jpg'
  },
  {
    id: uuidv4(),
    name: 'Uranus',
    size: 4.0,
    speed: 0.68,
    orbitDistance: 45,
    color: '#ADD8E6',
    texture: '/src/assets/uranus.jpg'
  },
  {
    id: uuidv4(),
    name: 'Neptune',
    size: 3.88,
    speed: 0.54,
    orbitDistance: 55,
    color: '#4169E1',
    texture: '/src/assets/neptune.jpg'
  }
];

// Also export the sun texture for use in the Sun component
export const sunTextureUrl = '/src/assets/th.jpg';
