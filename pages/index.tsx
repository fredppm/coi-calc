import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { ObjectiveSelector, Resource } from '../components/ObjectiveSelector/ObjectiveSelector';
import { RecipeSelector } from '../components/RecipeSelector/RecipeSelector';
import { Recipe } from '../utils/recipes';

export default function Home() {
  const router = useRouter();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [importValue, setImportValue] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (showImport) textareaRef.current?.focus();
  }, [showImport]);

  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleImportLoad = () => {
    const code = importValue.trim();
    if (!code) return;
    // Pass the blueprint string directly — canvas.tsx tries decodeFromBlueprintString first
    router.push(`/canvas?state=${encodeURIComponent(code)}`);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    // Redirect to canvas page with state parameter
    const state = {
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
    };
    
    router.push(`/canvas?state=${encodeURIComponent(btoa(JSON.stringify(state)))}`);
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
            <ObjectiveSelector
              onSelect={handleResourceSelect}
              actionButton={
                <button
                  onClick={() => { setShowImport(true); setImportError(null); setImportValue(''); }}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-600 text-sm rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors bg-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Import Blueprint
                </button>
              }
            />
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

      {/* Import Blueprint modal */}
      {showImport && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowImport(false); } }}
        >
          <div className="bg-white rounded-xl p-6 w-[480px] shadow-2xl mx-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Import Blueprint</h2>
            <p className="text-sm text-gray-500 mb-4">Paste a blueprint code to load a saved build.</p>
            <textarea
              ref={textareaRef}
              value={importValue}
              onChange={e => { setImportValue(e.target.value); setImportError(null); }}
              onKeyDown={e => { if (e.key === 'Escape') setShowImport(false); }}
              rows={6}
              placeholder="COI1:..."
              className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm font-mono resize-none focus:outline-none focus:border-blue-400 transition-colors"
            />
            {importError && <p className="text-red-500 text-sm mt-2">{importError}</p>}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowImport(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleImportLoad}
                disabled={!importValue.trim()}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Load Build
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 