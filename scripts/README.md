# COI Wiki Scraper

Este script extrai dados da wiki do Captain of Industry para atualizar os arquivos de dados do projeto.

## Funcionalidades

- 🔍 **Extração de Receitas**: Analisa a tabela CargoQuery da wiki para extrair todas as receitas
- 🏭 **Metadados dos Prédios**: Faz scraping das páginas individuais dos prédios para extrair metadados (workers, electricity, maintenance, etc.)
- 🖼️ **Imagens**: Identifica as imagens dos prédios nas páginas da wiki
- 📦 **Recursos**: Coleta todos os recursos únicos das receitas
- 📄 **Geração de TypeScript**: Gera arquivos TypeScript compatíveis com a estrutura atual do projeto
- ⚡ **Processamento Paralelo**: Usa async/await para scraping paralelo e eficiente

## Instalação

1. Instale as dependências Python:
```bash
pip install -r requirements.txt
```

## Uso

Execute o script:
```bash
python coi_scraper.py
```

## Saída

O script cria os seguintes arquivos na pasta `scripts/output/`:

### Arquivos TypeScript
- `coi_updated.ts` - Arquivo principal com todos os dados
- `resources.ts` - Apenas os recursos
- `buildings.ts` - Apenas os prédios
- `recipes.ts` - Apenas as receitas

### Arquivo de Debug
- `scraped_data.json` - Dados brutos em JSON para análise

## Estrutura dos Dados

### Resources
```typescript
interface Resource {
  id: string;           // ID normalizado (ex: "iron_ore")
  name: string;         // Nome da wiki (ex: "Iron Ore")
  color: string;        // Cor estimada baseada no tipo
  image: string;        // Caminho da imagem
}
```

### Buildings
```typescript
interface Building {
  id: string;           // ID normalizado
  name: string;         // Nome da wiki
  image: string;        // Caminho da imagem
  metadata?: MetadataItem[]; // Metadados extraídos da infobox
}
```

### Recipes
```typescript
interface Recipe {
  id: string;           // ID gerado
  name: string;         // Nome da receita
  buildingId: string;   // Referência ao prédio
  inputs: RecipeItem[]; // Recursos de entrada
  outputs: RecipeItem[]; // Recursos de saída
  metadata: MetadataItem[]; // Metadados (tempo, etc.)
}
```

## Logs

O script fornece logs detalhados durante a execução:
- 📋 Buscando dados das receitas
- 📊 Processando receita X/Y
- 🏭 Fazendo scraping do prédio: Nome do Prédio
- ✅ Parseou X receitas
- ✅ Fez scraping de X prédios com sucesso
- 📝 Gerando arquivos TypeScript
- 🎉 Scraping concluído com sucesso!

## Rate Limiting

O script usa um semáforo para limitar requisições simultâneas (máximo 3) para ser respeitoso com o servidor da wiki.

## Tratamento de Erros

- Páginas de prédios que não existem são tratadas graciosamente
- Conexões com timeout são logadas e continuam
- Dados malformados são ignorados

## Próximos Passos

Após executar o script:

1. Revisar os arquivos gerados em `scripts/output/`
2. Comparar com os dados atuais em `data/coi.ts`
3. Integrar os novos dados mantendo compatibilidade
4. Fazer download das imagens se necessário 