import { useState } from 'react';

/**
 * SettingsPanelProps defines the properties for the SettingsPanel component.
 */
export interface SettingsPanelProps {
  normalizeToSixtySeconds: boolean;
  onNormalizeToggle: (enabled: boolean) => void;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * SettingsPanel renders a collapsible settings panel with recipe normalization options.
 */
export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  normalizeToSixtySeconds,
  onNormalizeToggle,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Settings Toggle Button - Only show when panel is closed */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-gray-300 mb-2"
          title="Settings"
        >
        <svg 
          className="w-5 h-5 text-gray-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
      </button>
      )}

      {/* Settings Panel */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4 w-72">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Settings</h3>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              title="Close settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Normalize to 60s Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Normalize to 60s
                </label>
                <p className="text-xs text-gray-500">
                  Convert all recipes to 60-second cycles by adjusting input/output amounts
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => onNormalizeToggle(!normalizeToSixtySeconds)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    normalizeToSixtySeconds 
                      ? 'bg-blue-600' 
                      : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={normalizeToSixtySeconds}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      normalizeToSixtySeconds 
                        ? 'translate-x-6' 
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 