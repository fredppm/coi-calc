/**
 * Game-agnostic utility for humanizing technical names and IDs
 * Useful for any game data where technical names are not user-friendly
 */

export interface NameFormatterConfig {
  // Custom replacements for specific terms
  replacements?: Record<string, string>;
  // Whether to add contextual information (building + action)
  includeContext?: boolean;
  // Custom patterns for specific games
  patterns?: NamePattern[];
  // Language-specific rules
  language?: 'en' | 'pt' | 'es' | 'fr';
}

export interface NamePattern {
  // Regex pattern to match
  pattern: RegExp;
  // Template for replacement (can use capture groups)
  template: string;
  // Optional context hint
  context?: string;
}

// Default patterns for common game naming conventions
const defaultPatterns: NamePattern[] = [
  // CamelCase with action suffix (e.g., "IronSmelting" -> "Iron Smelting")
  {
    pattern: /^(\w+?)(Smelting|Melting|Casting|Forging)$/,
    template: "$1 $2",
    context: "production"
  },
  // Resource + Processing action (e.g., "PotatoDigestion" -> "Potato Digestion")
  {
    pattern: /^(\w+?)(Digestion|Processing|Refining|Crushing|Grinding)$/,
    template: "$1 $2",
    context: "processing"
  },
  // Separation processes (e.g., "AirSeparation" -> "Air Separation")
  {
    pattern: /^(\w+?)(Separation|Distillation|Extraction)$/,
    template: "$1 $2",
    context: "separation"
  },
  // Assembly processes (e.g., "ElectronicsAssembly" -> "Electronics Assembly")
  {
    pattern: /^(\w+?)(Assembly|Manufacturing|Production|Creation|Making)$/,
    template: "$1 $2",
    context: "assembly"
  },
  // Chemical processes (e.g., "SteelAlloying" -> "Steel Alloying")
  {
    pattern: /^(\w+?)(Alloying|Mixing|Combining|Blending|Synthesis)$/,
    template: "$1 $2",
    context: "chemistry"
  },
  // Generic CamelCase splitting (fallback)
  {
    pattern: /^([A-Z][a-z]+)([A-Z][a-z]+.*)$/,
    template: "$1 $2",
    context: "generic"
  }
];

// Default replacements for common technical terms
const defaultReplacements: Record<string, string> = {
  // Technical abbreviations
  'Ii': 'II',
  'Iii': 'III',
  'Iv': 'IV',
  'T1': 'Tier 1',
  'T2': 'Tier 2',
  'T3': 'Tier 3',
  'Scrap': 'from Scrap',
  'Arc': 'Electric Arc',
  // Common gaming terms
  'Smelting': 'Smelting',
  'Melting': 'Melting',
  'Casting': 'Casting',
  'Digestion': 'Processing',
  'Separation': 'Separation',
  'Electrolysis': 'Electrolysis',
  'Distillation': 'Distillation',
  'Assembly': 'Assembly',
  'Manufacturing': 'Production',
  'Processing': 'Processing',
  'Refining': 'Refining',
  'Mixing': 'Mixing',
  'Alloying': 'Alloying'
};

// Multilingual support
const languageReplacements: Record<string, Record<string, string>> = {
  pt: {
    'Smelting': 'Fundição',
    'Melting': 'Derretimento',
    'Casting': 'Moldagem',
    'Processing': 'Processamento',
    'Separation': 'Separação',
    'Electrolysis': 'Eletrólise',
    'Distillation': 'Destilação',
    'Assembly': 'Montagem',
    'Production': 'Produção',
    'Refining': 'Refinamento',
    'Mixing': 'Mistura',
    'Alloying': 'Liga',
    'from Scrap': 'da Sucata',
    'Electric Arc': 'Arco Elétrico',
    'Tier': 'Nível'
  },
  es: {
    'Smelting': 'Fundición',
    'Melting': 'Fundición',
    'Casting': 'Moldeado',
    'Processing': 'Procesamiento',
    'Separation': 'Separación',
    'Electrolysis': 'Electrólisis',
    'Distillation': 'Destilación',
    'Assembly': 'Ensamblaje',
    'Production': 'Producción',
    'Refining': 'Refinamiento',
    'Mixing': 'Mezcla',
    'Alloying': 'Aleación'
  },
  fr: {
    'Smelting': 'Fusion',
    'Melting': 'Fonte',
    'Casting': 'Coulée',
    'Processing': 'Traitement',
    'Separation': 'Séparation',
    'Electrolysis': 'Électrolyse',
    'Distillation': 'Distillation',
    'Assembly': 'Assemblage',
    'Production': 'Production',
    'Refining': 'Raffinage',
    'Mixing': 'Mélange',
    'Alloying': 'Alliage'
  }
};

/**
 * Converts CamelCase to space-separated words
 * Example: "TitaniumAlloyMixing" -> "Titanium Alloy Mixing"
 */
function splitCamelCase(text: string): string {
  return text
    // Add space before uppercase letters that follow lowercase letters
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space before uppercase letters followed by lowercase letters (for acronyms)
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .trim();
}

/**
 * Applies pattern-based transformations to technical names
 */
function applyPatterns(name: string, patterns: NamePattern[]): { result: string; context?: string } {
  for (const pattern of patterns) {
    const match = name.match(pattern.pattern);
    if (match) {
      const result = name.replace(pattern.pattern, pattern.template);
      return { 
        result: splitCamelCase(result), 
        context: pattern.context 
      };
    }
  }
  
  // Fallback: just split camelCase
  return { result: splitCamelCase(name) };
}

/**
 * Applies word replacements to improve readability
 */
function applyReplacements(text: string, replacements: Record<string, string>): string {
  let result = text;
  
  // Apply replacements (case-insensitive for flexibility)
  Object.entries(replacements).forEach(([from, to]) => {
    const regex = new RegExp(`\\b${from}\\b`, 'gi');
    result = result.replace(regex, to);
  });
  
  return result;
}

/**
 * Generates context information based on building and process type
 */
function generateContextInfo(buildingName?: string, processContext?: string): string {
  if (!buildingName) return '';
  
  const building = splitCamelCase(buildingName)
    .replace(/([A-Z])\w*\s*Ii\b/g, '$1 II')
    .replace(/([A-Z])\w*\s*Iii\b/g, '$1 III');
  
  return ` (${building})`;
}

/**
 * Main function to humanize technical recipe names
 */
export function humanizeRecipeName(
  technicalName: string,
  buildingName?: string,
  config: NameFormatterConfig = {}
): string {
  const {
    replacements = {},
    includeContext = false,
    patterns = defaultPatterns,
    language = 'en'
  } = config;
  
  // Start with the technical name
  let result = technicalName;
  
  // Apply pattern-based transformations
  const { result: patternResult, context } = applyPatterns(result, patterns);
  result = patternResult;
  
  // Merge replacements (custom overrides default)
  const allReplacements = {
    ...defaultReplacements,
    ...(languageReplacements[language] || {}),
    ...replacements
  };
  
  // Apply word replacements
  result = applyReplacements(result, allReplacements);
  
  // Add context information if requested
  if (includeContext && buildingName) {
    result += generateContextInfo(buildingName, context);
  }
  
  // Final cleanup
  result = result
    .replace(/\s+/g, ' ')  // Multiple spaces to single space
    .trim();
  
  return result;
}

/**
 * Humanizes multiple recipe names efficiently
 */
export function humanizeRecipeNames(
  recipes: Array<{ name: string; buildingName?: string }>,
  config: NameFormatterConfig = {}
): Array<{ original: string; humanized: string }> {
  return recipes.map(({ name, buildingName }) => ({
    original: name,
    humanized: humanizeRecipeName(name, buildingName, config)
  }));
}

/**
 * Game-specific preset configurations
 */
export const gamePresets = {
  captainOfIndustry: {
    includeContext: true,
    language: 'en' as const,
    replacements: {
      'Arc': 'Electric Arc',
      'Scrap': 'from Scrap',
      'T1': 'Basic',
      'T2': 'Advanced',
      'Stage I': 'Stage 1',
      'Stage II': 'Stage 2',
      'Stage III': 'Stage 3'
    }
  },
  factorio: {
    includeContext: false,
    language: 'en' as const,
    patterns: [
      {
        pattern: /^(\w+)-(\w+)-(\w+)$/,
        template: "$1 $2 $3",
        context: "crafting"
      }
    ]
  },
  satisfactory: {
    includeContext: true,
    language: 'en' as const,
    patterns: [
      {
        pattern: /^Recipe_(\w+)_C$/,
        template: "$1",
        context: "recipe"
      }
    ]
  }
};

/**
 * Create a custom formatter with pre-configured settings
 */
export function createRecipeFormatter(config: NameFormatterConfig) {
  return {
    humanize: (name: string, buildingName?: string) => 
      humanizeRecipeName(name, buildingName, config),
    
    humanizeMany: (recipes: Array<{ name: string; buildingName?: string }>) =>
      humanizeRecipeNames(recipes, config)
  };
}

// Export pre-configured formatters for common games
export const coiFormatter = createRecipeFormatter(gamePresets.captainOfIndustry);
export const factorioFormatter = createRecipeFormatter(gamePresets.factorio);
export const satisfactoryFormatter = createRecipeFormatter(gamePresets.satisfactory); 