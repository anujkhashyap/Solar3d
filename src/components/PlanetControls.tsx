import React from 'react';
import { PlanetConfig } from '../types';
import { Settings } from 'lucide-react';

interface PlanetControlsProps {
  planets: PlanetConfig[];
  onPlanetChange: (updatedPlanet: PlanetConfig) => void;
  selectedPlanetId: string | null;
  onSelectPlanet: (id: string) => void;
}

const PlanetControls: React.FC<PlanetControlsProps> = ({
  planets,
  onPlanetChange,
  selectedPlanetId,
  onSelectPlanet,
}) => {
  const selectedPlanet = planets.find((p) => p.id === selectedPlanetId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedPlanet) return;

    const { name, value } = e.target;
    const updatedPlanet = {
      ...selectedPlanet,
      [name]: parseFloat(value),
    };

    onPlanetChange(updatedPlanet);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Settings className="mr-2" size={20} />
        <h2 className="text-xl font-bold">Planet Controls</h2>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Select Planet:</label>
        <div className="grid grid-cols-4 gap-2">
          {planets.map((planet) => (
            <button
              key={planet.id}
              onClick={() => onSelectPlanet(planet.id)}
              className={`p-2 rounded ${
                selectedPlanetId === planet.id
                  ? 'bg-blue-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              style={{ borderLeft: `4px solid ${planet.color}` }}
            >
              {planet.name}
            </button>
          ))}
        </div>
      </div>

      {selectedPlanet && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1">
              Size: {selectedPlanet.size.toFixed(2)}
            </label>
            <input
              type="range"
              name="size"
              min="0.1"
              max="15"
              step="0.1"
              value={selectedPlanet.size}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-1">
              Speed: {selectedPlanet.speed.toFixed(2)}
            </label>
            <input
              type="range"
              name="speed"
              min="0.1"
              max="10"
              step="0.1"
              value={selectedPlanet.speed}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-1">
              Orbit Distance: {selectedPlanet.orbitDistance.toFixed(1)}
            </label>
            <input
              type="range"
              name="orbitDistance"
              min="3"
              max="80"
              step="0.5"
              value={selectedPlanet.orbitDistance}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetControls;