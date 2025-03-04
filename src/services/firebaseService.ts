import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import { SolarSystemConfig, PlanetConfig } from '../types';

const COLLECTION_NAME = 'solarSystemConfigs';

export const saveSolarSystemConfig = async (config: Omit<SolarSystemConfig, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), config);
    return { ...config, id: docRef.id };
  } catch (error) {
    console.error('Error saving configuration:', error);
    throw error;
  }
};

export const getSolarSystemConfigs = async (): Promise<SolarSystemConfig[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as SolarSystemConfig));
  } catch (error) {
    console.error('Error getting configurations:', error);
    throw error;
  }
};

export const addPlanetConfig = async (planetName: string, size: number, speed: number, orbitDistance: number, texture: string) => {
  try {
    const docRef = await addDoc(collection(db, 'planetConfigs'), {
      planetName,
      size,
      speed,
      orbitDistance,
      texture,
      createdAt: new Date()
    });
    console.log('Planet configuration written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding planet configuration: ', e);
  }
};

export const getPlanetConfigs = async (): Promise<PlanetConfig[]> => {
  try {
    const q = query(collection(db, 'planetConfigs'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as PlanetConfig));
  } catch (error) {
    console.error('Error getting planet configurations:', error);
    throw error;
  }
};