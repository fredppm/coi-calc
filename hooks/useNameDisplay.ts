import { useState, useEffect } from 'react';

export type NameDisplayMode = 'technical' | 'humanized' | 'both';

export interface NameDisplaySettings {
  mode: NameDisplayMode;
  language: 'en' | 'pt' | 'es' | 'fr';
  includeContext: boolean;
}

const DEFAULT_SETTINGS: NameDisplaySettings = {
  mode: 'humanized',
  language: 'en',
  includeContext: true
};

const STORAGE_KEY = 'coi-name-display-settings';

/**
 * Hook for managing display preferences for recipe names
 * Persists settings to localStorage and provides utilities for formatting
 */
export function useNameDisplay() {
  const [settings, setSettings] = useState<NameDisplaySettings>(DEFAULT_SETTINGS);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<NameDisplaySettings>;
        setSettings(prev => ({ ...prev, ...parsed }));
      }
    } catch (error) {
      console.warn('Failed to load name display settings:', error);
    }
  }, []);

  // Save settings to localStorage when changed
  const updateSettings = (newSettings: Partial<NameDisplaySettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save name display settings:', error);
    }
  };

  // Utility function to get display name based on current settings
  const getDisplayName = (technicalName: string, humanizedName?: string) => {
    switch (settings.mode) {
      case 'technical':
        return technicalName;
      case 'humanized':
        return humanizedName || technicalName;
      case 'both':
        return humanizedName 
          ? `${humanizedName} (${technicalName})`
          : technicalName;
      default:
        return technicalName;
    }
  };

  // Utility function to check if we should show technical names
  const shouldShowTechnical = () => {
    return settings.mode === 'technical' || settings.mode === 'both';
  };

  // Utility function to check if we should show humanized names
  const shouldShowHumanized = () => {
    return settings.mode === 'humanized' || settings.mode === 'both';
  };

  return {
    settings,
    updateSettings,
    getDisplayName,
    shouldShowTechnical,
    shouldShowHumanized,
    
    // Convenience methods for common settings
    setMode: (mode: NameDisplayMode) => updateSettings({ mode }),
    setLanguage: (language: NameDisplaySettings['language']) => updateSettings({ language }),
    setIncludeContext: (includeContext: boolean) => updateSettings({ includeContext }),
    
    // Reset to defaults
    resetSettings: () => {
      setSettings(DEFAULT_SETTINGS);
      localStorage.removeItem(STORAGE_KEY);
    }
  };
} 