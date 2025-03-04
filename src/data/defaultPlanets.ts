import { PlanetConfig } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const defaultPlanets: PlanetConfig[] = [
  {
    id: uuidv4(),
    name: 'Mercury',
    size: 0.38,
    speed: 4.74,
    orbitDistance: 5,
    color: '#A9A9A9',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mercury.jpg'
  },
  {
    id: uuidv4(),
    name: 'Venus',
    size: 0.95,
    speed: 3.5,
    orbitDistance: 7,
    color: '#E6E6FA',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/venus.jpg'
  },
  {
    id: uuidv4(),
    name: 'Earth',
    size: 1,
    speed: 2.98,
    orbitDistance: 10,
    color: '#1E90FF',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth.jpg'
  },
  {
    id: uuidv4(),
    name: 'Mars',
    size: 0.53,
    speed: 2.41,
    orbitDistance: 15,
    color: '#FF4500',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars.jpg'
  },
  {
    id: uuidv4(),
    name: 'Jupiter',
    size: 11.2,
    speed: 1.31,
    orbitDistance: 25,
    color: '#F4A460',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/jupiter.jpg'
  },
  {
    id: uuidv4(),
    name: 'Saturn',
    size: 9.45,
    speed: 0.97,
    orbitDistance: 35,
    color: '#FFD700',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/saturn.jpg'
  },
  {
    id: uuidv4(),
    name: 'Uranus',
    size: 4.0,
    speed: 0.68,
    orbitDistance: 45,
    color: '#ADD8E6',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/uranus.jpg'
  },
  {
    id: uuidv4(),
    name: 'Neptune',
    size: 3.88,
    speed: 0.54,
    orbitDistance: 55,
    color: '#4169E1',
    texture: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/neptune.jpg'
  }
];