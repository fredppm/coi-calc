import { useState } from 'react';
import { useRouter } from 'next/router';
import { ObjectiveSelector, Resource } from '../components/ObjectiveSelector/ObjectiveSelector';
import { RecipeSelector } from '../components/RecipeSelector/RecipeSelector';
import { Recipe } from '../utils/recipes';
import NameFormatterTest from '../components/NameFormatterTest/NameFormatterTest';
import NameDisplaySettings from '../components/NameDisplaySettings/NameDisplaySettings';

export default function Home() {
  const router = useRouter();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showNameTest, setShowNameTest] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    // Redirect to canvas page with recipe ID
    router.push(`/canvas/${recipe.id}`);
  };

  const handleBackToObjectives = () => {
    setSelectedResource(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Captain of Industry - Recipe Planner
          </h1>
          
          {/* Demo and Settings */}
          <div className="mb-8 text-center space-x-4">
            <button
              onClick={() => setShowNameTest(!showNameTest)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showNameTest ? '✨ Hide Demo' : '🎮 Show Demo'}
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {showSettings ? '⚙️ Hide Settings' : '⚙️ Name Settings'}
            </button>
          </div>
          
          {showSettings && (
            <div className="mb-8">
              <NameDisplaySettings />
            </div>
          )}
          
          {showNameTest && (
            <div className="mb-8">
              <NameFormatterTest />
            </div>
          )}
          
          {!selectedResource ? (
            // Show objective selector
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. Selecione um Objetivo
                </h2>
                <p className="text-gray-600 mt-1">
                  Escolha o recurso que você deseja produzir
                </p>
              </div>
              <ObjectiveSelector onSelect={handleResourceSelect} />
            </div>
          ) : (
            // Show recipe selector
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToObjectives}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  ← Voltar aos Objetivos
                </button>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Objetivo: {selectedResource.name}
                  </h2>
                  <p className="text-gray-600">{selectedResource.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    2. Escolha uma Receita
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Selecione como produzir {selectedResource.name}
                  </p>
                </div>
                <RecipeSelector 
                  selectedResource={selectedResource.id}
                  selectedResourceName={selectedResource.name}
                  onRecipeSelect={handleRecipeSelect}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 