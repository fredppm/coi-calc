import React from 'react';
import { useNameDisplay, NameDisplayMode } from '../../hooks/useNameDisplay';

/**
 * Settings component for configuring how recipe names are displayed
 */
export const NameDisplaySettings: React.FC = () => {
  const {
    settings,
    setMode,
    setLanguage,
    setIncludeContext,
    resetSettings
  } = useNameDisplay();

  const modes: Array<{ value: NameDisplayMode; label: string; description: string }> = [
    {
      value: 'humanized',
      label: '😊 Human-Readable',
      description: 'Show user-friendly names (e.g., "Iron Smelting")'
    },
    {
      value: 'technical',
      label: '🔧 Technical',
      description: 'Show original game names (e.g., "IronSmelting")'
    },
    {
      value: 'both',
      label: '📝 Both',
      description: 'Show both formats (e.g., "Iron Smelting (IronSmelting)")'
    }
  ];

  const languages = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'pt', label: '🇧🇷 Português' },
    { value: 'es', label: '🇪🇸 Español' },
    { value: 'fr', label: '🇫🇷 Français' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          🏷️ Recipe Name Display
        </h3>
        <button
          onClick={resetSettings}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Reset to defaults
        </button>
      </div>

      <div className="space-y-4">
        {/* Display Mode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Mode
          </label>
          <div className="space-y-2">
            {modes.map((mode) => (
              <label
                key={mode.value}
                className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors ${
                  settings.mode === mode.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="displayMode"
                  value={mode.value}
                  checked={settings.mode === mode.value}
                  onChange={(e) => setMode(e.target.value as NameDisplayMode)}
                  className="mt-1 text-blue-600"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {mode.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {mode.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Language */}
        {settings.mode !== 'technical' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language for Humanized Names
            </label>
            <select
              value={settings.language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Include Context */}
        {settings.mode !== 'technical' && (
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.includeContext}
                onChange={(e) => setIncludeContext(e.target.checked)}
                className="text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                Include building context (e.g., "Iron Smelting (Electric Arc Furnace)")
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-sm font-medium text-gray-700 mb-2">Preview:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-gray-500">Technical:</span>{' '}
            <span className="font-mono">IronSmeltingArcScrapT1</span>
          </div>
          <div>
            <span className="text-gray-500">Your setting:</span>{' '}
            <span className="font-medium">
              {(() => {
                const technical = "IronSmeltingArcScrapT1";
                const humanized = "Iron from Scrap Smelting (Electric Arc Furnace)";
                
                switch (settings.mode) {
                  case 'technical':
                    return technical;
                  case 'humanized':
                    return humanized;
                  case 'both':
                    return `${humanized} (${technical})`;
                  default:
                    return technical;
                }
              })()}
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="text-sm text-blue-800">
          <div className="font-medium mb-1">💡 Pro Tip</div>
          <div>
            This setting applies to all recipe names throughout the application. 
            Changes are automatically saved and will persist between sessions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameDisplaySettings; 