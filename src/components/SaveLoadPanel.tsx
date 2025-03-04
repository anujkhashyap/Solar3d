import React, { useState } from 'react';
import { SolarSystemConfig } from '../types';
import { Save, Download, List } from 'lucide-react';

interface SaveLoadPanelProps {
  onSave: (name: string) => void;
  onLoad: (config: SolarSystemConfig) => void;
  savedConfigurations: SolarSystemConfig[];
  isSaving: boolean;
  isLoading: boolean;
}

const SaveLoadPanel: React.FC<SaveLoadPanelProps> = ({
  onSave,
  onLoad,
  savedConfigurations,
  isSaving,
  isLoading,
}) => {
  const [configName, setConfigName] = useState('');
  const [showConfigs, setShowConfigs] = useState(false);

  const handleSave = () => {
    if (configName.trim()) {
      onSave(configName);
      setConfigName('');
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Save className="mr-2" size={20} />
          Save Configuration
        </h2>
        <div className="flex">
          <input
            type="text"
            value={configName}
            onChange={(e) => setConfigName(e.target.value)}
            placeholder="Configuration name"
            className="flex-grow p-2 rounded-l bg-gray-700 text-white"
          />
          <button
            onClick={handleSave}
            disabled={!configName.trim() || isSaving}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold flex items-center">
            <Download className="mr-2" size={20} />
            Load Configuration
          </h2>
          <button
            onClick={() => setShowConfigs(!showConfigs)}
            className="text-sm bg-gray-700 hover:bg-gray-600 p-1 rounded flex items-center"
          >
            <List size={16} className="mr-1" />
            {showConfigs ? 'Hide' : 'Show'} ({savedConfigurations.length})
          </button>
        </div>

        {showConfigs && (
          <div className="max-h-60 overflow-y-auto">
            {savedConfigurations.length === 0 ? (
              <p className="text-gray-400 italic">No saved configurations</p>
            ) : (
              <ul className="space-y-2">
                {savedConfigurations.map((config) => (
                  <li key={config.id}>
                    <button
                      onClick={() => onLoad(config)}
                      disabled={isLoading}
                      className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded flex justify-between items-center"
                    >
                      <span>{config.name}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(config.createdAt).toLocaleDateString()}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SaveLoadPanel;