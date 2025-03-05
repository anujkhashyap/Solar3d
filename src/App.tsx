import React, { useState, useEffect } from 'react';
import SolarSystem from './components/SolarSystem';
import PlanetControls from './components/PlanetControls';
import SaveLoadPanel from './components/SaveLoadPanel';
import { PlanetConfig, SolarSystemConfig } from './types';
import { defaultPlanets } from './data/defaultPlanets';
import { saveSolarSystemConfig, getSolarSystemConfigs } from './services/firebaseService';
import { v4 as uuidv4 } from 'uuid';
import { Sun, Rocket } from 'lucide-react';

function App() {
  const [planets, setPlanets] = useState<PlanetConfig[]>(defaultPlanets);
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);
  const [savedConfigs, setSavedConfigs] = useState<SolarSystemConfig[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved configurations
    const loadConfigs = async () => {
      try {
        const configs = await getSolarSystemConfigs();
        setSavedConfigs(configs);
      } catch (error) {
        console.error('Error loading configurations:', error);
      }
    };

    loadConfigs();
  }, []);

  const handlePlanetChange = (updatedPlanet: PlanetConfig) => {
    setPlanets(planets.map(p => p.id === updatedPlanet.id ? updatedPlanet : p));
  };

  const handleSaveConfig = async (name: string) => {
    setIsSaving(true);
    try {
      const config: Omit<SolarSystemConfig, 'id'> = {
        name,
        planets,
        createdAt: Date.now()
      };
      
      const savedConfig = await saveSolarSystemConfig(config);
      setSavedConfigs([savedConfig, ...savedConfigs]);
      alert(`Configuration "${name}" saved successfully!`);
    } catch (error) {
      console.error('Error saving configuration:', error);
      alert('Failed to save configuration. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoadConfig = (config: SolarSystemConfig) => {
    setIsLoading(true);
    try {
      // Generate new IDs for planets to ensure uniqueness
      const planetsWithNewIds = config.planets.map(planet => ({
        ...planet,
        id: uuidv4()
      }));
      
      setPlanets(planetsWithNewIds);
      setSelectedPlanetId(null);
      alert(`Configuration "${config.name}" loaded successfully!`);
    } catch (error) {
      console.error('Error loading configuration:', error);
      alert('Failed to load configuration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetToDefault = () => {
    setPlanets(defaultPlanets);
    setSelectedPlanetId(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Sun className="mr-2 text-yellow-400" size={28} />
            Interactive Solar System
          </h1>
          <button 
            onClick={handleResetToDefault}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded flex items-center"
          >
            <Rocket className="mr-1" size={16} />
            Reset to Default
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* 3D Solar System View */}
        <div className="md:w-3/4 h-[600px] bg-black rounded-lg overflow-hidden">
          <SolarSystem planets={planets} />
        </div>

        {/* Controls Panel */}
        <div className="md:w-1/4 space-y-4">
          <PlanetControls
            planets={planets}
            onPlanetChange={handlePlanetChange}
            selectedPlanetId={selectedPlanetId}
            onSelectPlanet={setSelectedPlanetId}
          />

          <SaveLoadPanel
            onSave={handleSaveConfig}
            onLoad={handleLoadConfig}
            savedConfigurations={savedConfigs}
            isSaving={isSaving}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>Interactive Solar System Simulator &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;