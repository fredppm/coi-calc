import { useState } from 'react';
import { useRouter } from 'next/router';
import { ObjectiveSelector, Resource } from '../components/ObjectiveSelector/ObjectiveSelector';
import { RecipeSelector } from '../components/RecipeSelector/RecipeSelector';
import { Recipe } from '../utils/recipes';

export default function Home() {
  const router = useRouter();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    // Redirect to canvas page with objective (resourceId from selectedResource)
    if (selectedResource) {
      router.push(`/canvas/objective/${selectedResource.id}?state=${encodeURIComponent(btoa(JSON.stringify({
        n: [{
          i: `recipe-${recipe.id}`,
          t: 'recipe',
          p: [400, 200],
          d: {
            n: recipe.name,
            b: recipe.building.id,
            m: 1
          }
        }],
        e: []
      })))}`);
    } else {
      // Fallback to old behavior if no resource selected
    router.push(`/canvas/${recipe.id}`);
    }
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