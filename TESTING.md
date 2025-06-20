# Guia de Testes - COI Calculator

Este projeto usa uma stack moderna de testes para garantir qualidade e estabilidade durante o desenvolvimento.

## 🧪 Stack de Testes

### Testes Unitários e de Integração
- **Jest** - Framework principal de testes
- **React Testing Library** - Testes de componentes React
- **@testing-library/jest-dom** - Matchers extras para DOM

### Testes End-to-End (E2E)
- **Playwright** - Testes em browsers reais
- Suporte a Chromium, Firefox, Safari
- Testes responsivos (desktop/mobile)

## 📁 Estrutura

```
__tests__/
├── components/          # Testes de componentes React
├── utils/              # Testes de funções utilitárias
└── pages/              # Testes de páginas (se necessário)

e2e/                    # Testes end-to-end
├── homepage.spec.ts    # Testes da página inicial
└── canvas.spec.ts      # Testes do canvas (futuro)
```

## 🚀 Comandos

```bash
# Testes unitários
npm test                # Executa todos os testes unitários
npm run test:watch      # Executa em modo watch
npm run test:coverage   # Executa com relatório de cobertura

# Testes E2E
npm run test:e2e        # Executa testes E2E
npm run test:e2e:ui     # Executa com interface visual

# Executa todos os testes
npm run test:all        # TypeScript + Unitários + E2E
```

## ✅ Testes Implementados

### Utilitários (`__tests__/utils/`)

#### `recipeCalculations.test.ts`
- ✅ `roundForDisplay()` - Arredondamento para display
- ✅ `clampMultiplier()` - Limitação de multiplicadores
- ✅ `getDisplayTime()` - Formatação de tempo
- ✅ `getNormalizedAmount()` - Normalização de quantidades
- ✅ `getNormalizedAmountForBalance()` - Normalização para balanceamento

#### `imageUtils.test.ts`
- ✅ `processImagePath()` - Processamento de paths de imagem
- ✅ Testes de tipos e estruturas de dados

### E2E (`e2e/`)

#### `homepage.spec.ts`
- 🔄 Visualização do seletor de objetivos (precisa data-testids)
- 🔄 Navegação para canvas (precisa data-testids)
- 🔄 Busca de recursos (funcionalidade não implementada)
- ✅ Design responsivo

## 🛠️ Configuração

### Jest (`jest.config.js`)
```javascript
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/e2e/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    // Outros aliases...
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    // Exclusões...
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### Playwright (`playwright.config.ts`)
```typescript
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

## 📋 Para Adicionar Testes E2E

Os testes E2E atuais falham porque faltam `data-testid` nos componentes. Para corrigir:

### 1. Adicionar data-testids no ObjectiveSelector

```tsx
// Em components/ObjectiveSelector/ObjectiveSelector.tsx
<button
  key={resource.id}
  data-testid="resource-option"
  onClick={() => onResourceSelect(resource.id)}
  className="..."
>
  {/* conteúdo */}
</button>
```

### 2. Adicionar busca (se desejado)

```tsx
<input
  type="text"
  placeholder="Search resources..."
  data-testid="resource-search"
  className="..."
/>
```

## 🎯 Estratégia de Testes

### O que testar com Jest (Unit/Integration)
- ✅ Funções utilitárias (cálculos, formatação)
- ✅ Hooks customizados
- ✅ Componentes isolados (props, estado, eventos)
- ✅ Transformações de dados
- ✅ Validações

### O que testar com Playwright (E2E)
- ✅ Fluxos completos do usuário
- ✅ Navegação entre páginas
- ✅ Interações complexas (drag-and-drop no canvas)
- ✅ Responsividade
- ✅ Performance de carregamento

### O que NÃO testar
- ❌ Implementações internas de bibliotecas (ReactFlow, Next.js)
- ❌ Estilos CSS específicos (apenas funcionalidade)
- ❌ Testes que dependem de APIs externas sem mock

## 🔄 CI/CD Integration

Para integrar no GitHub Actions:

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run test:all
      
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: test-results
          path: test-results/
```

## 🎓 Exemplos Práticos

### Teste de Componente Simples
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('should handle user interaction', () => {
  const mockHandler = jest.fn();
  
  render(<MyComponent onAction={mockHandler} />);
  
  fireEvent.click(screen.getByRole('button'));
  
  expect(mockHandler).toHaveBeenCalledWith('expected-value');
});
```

### Teste E2E Simples
```typescript
import { test, expect } from '@playwright/test';

test('user can complete main workflow', async ({ page }) => {
  await page.goto('/');
  
  await page.click('[data-testid="start-button"]');
  await page.fill('[data-testid="input-field"]', 'test value');
  await page.click('[data-testid="submit-button"]');
  
  await expect(page.locator('[data-testid="result"]')).toBeVisible();
});
```

## 📊 Cobertura de Testes

Execute `npm run test:coverage` para ver relatório de cobertura.

Meta atual: **70%+ de cobertura** em funções críticas (utils, cálculos)

## 🐛 Debug

### Jest
```bash
# Debug em modo watch
npm run test:watch -- --verbose

# Debug um teste específico
npm test -- --testPathPattern=recipeCalculations
```

### Playwright
```bash
# Debug visual
npm run test:e2e:ui

# Debug específico
npx playwright test homepage.spec.ts --debug
``` 