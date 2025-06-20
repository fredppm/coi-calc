import { useState, useEffect } from 'react';
import Image from 'next/image';
import { coiResources } from '../../data/coi';
import { Resource as CoiResource } from '../../types';
import { processImagePath } from '../../utils/imageUtils';


/**
 * Resource represents a possible objective in the system.
 */
export interface Resource {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

// Convert COI resource to our Resource format
const convertResource = (coiResource: CoiResource): Resource => {
  return {
    id: coiResource.id,
    name: coiResource.name,
    description: `${coiResource.name} resource for production chains`,
    image: processImagePath(coiResource.image),
    color: coiResource.color,
  };
};

// Get resources directly from data
const getResources = (): Resource[] => {
  return coiResources.map(convertResource);
};

/**
 * ObjectiveSelectorProps defines the properties for the ObjectiveSelector component.
 */
export interface ObjectiveSelectorProps {
  onSelect: (resource: Resource) => void;
}

/**
 * ObjectiveSelector allows users to select their objective from available resources.
 */
export const ObjectiveSelector: React.FC<ObjectiveSelectorProps> = ({ onSelect }) => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [availableResources, setAvailableResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = () => {
      try {
        setLoading(true);
        const data = getResources();
        setAvailableResources(data);
        setFilteredResources(data);
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  // Filter resources based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredResources(availableResources);
    } else {
      const filtered = availableResources.filter(resource =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResources(filtered);
    }
  }, [searchTerm, availableResources]);

  const handleSelect = (resource: Resource) => {
    setSelectedResource(resource);
    onSelect(resource);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        {/* Simple Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="text-center text-gray-500 relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-25">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Minimal Header */}
      <div className="flex-shrink-0 py-4 px-6 bg-white border-b border-gray-200 relative z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800" data-testid="page-title">Captain of Industry Calculator</h1>
          
          {/* Centered Search Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                data-testid="resource-search"
                className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* Empty space for balance */}
          <div className="w-96"></div>
        </div>
      </div>
      
      {/* FULL SCREEN Grid */}
      <div className="flex-1 overflow-y-auto p-6 relative z-10">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 2xl:grid-cols-20 gap-4">
          {filteredResources.length === 0 ? (
            <div className="col-span-full text-center py-20 text-gray-400">
              <span className="text-8xl mb-6 block">🔍</span>
              <p className="text-2xl">No resources found</p>
            </div>
          ) : (
            filteredResources.map((resource) => (
              <button
                key={resource.id}
                data-testid="resource-option"
                onClick={() => handleSelect(resource)}
                className={`group relative p-3 rounded-xl transition-all duration-200 aspect-square overflow-hidden ${
                  selectedResource?.id === resource.id
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 shadow-lg shadow-blue-200/50 scale-105 ring-2 ring-blue-300/30'
                    : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-gray-200/50 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white'
                }`}
                title={`${resource.name}: ${resource.description}`}
              >
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-200 ${
                  selectedResource?.id === resource.id
                    ? 'bg-gradient-to-t from-blue-500/5 to-transparent'
                    : 'bg-gradient-to-t from-gray-900/0 to-transparent group-hover:from-gray-900/5'
                }`} />
                
                <div className="relative flex flex-col items-center justify-center h-full z-10">
                  {/* Resource Icon Container */}
                  <div className={`w-full h-[70%] flex items-center justify-center overflow-hidden rounded-lg p-1 transition-all duration-200 ${
                    selectedResource?.id === resource.id
                      ? 'bg-blue-50 ring-1 ring-blue-200'
                      : 'group-group-hover:ring-1 group-hover:ring-gray-200'
                  }`}>
                    <Image 
                      src={resource.image} 
                      alt={resource.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    <div className="hidden w-full h-full items-center justify-center text-2xl opacity-60">📦</div>
                  </div>
                  
                  {/* Resource Name with better typography */}
                  <div className="w-full mt-2 px-1">
                    <span className={`block text-[10px] font-semibold text-center leading-tight transition-colors duration-200 ${
                      selectedResource?.id === resource.id 
                        ? 'text-blue-700' 
                        : 'text-gray-700 group-hover:text-gray-900'
                    }`} style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {resource.name}
                    </span>
                  </div>
                  
                  {/* Selection indicator */}
                  {selectedResource?.id === resource.id && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
      
      {/* Selected Resource Floating Panel */}
      {selectedResource && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-white/95 backdrop-blur-sm shadow-xl border border-blue-200 rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ring-2 ring-blue-200">
                <Image 
                  src={selectedResource.image} 
                  alt={selectedResource.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-blue-800 text-lg">{selectedResource.name}</h3>
                <p className="text-sm text-blue-600">{selectedResource.description}</p>
              </div>
              <div className="text-2xl">🎯</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 