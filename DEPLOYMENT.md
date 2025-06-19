# Deployment Guide

Este projeto pode ser executado de duas maneiras:

## 🏠 Desenvolvimento Local

Para desenvolvimento local, use API Routes dinâmicas:

```bash
npm run dev
```

- ✅ Usa API Routes (`/api/resources`, `/api/recipes`) 
- ✅ Hot reload e debugging completo
- ✅ Todas as funcionalidades disponíveis

## 🌐 GitHub Pages (Estático)

Para deploy no GitHub Pages, use arquivos JSON estáticos:

### 1. Gerar arquivos estáticos
```bash
npm run generate:static
```

Isso cria:
- `public/api/resources.json`
- `public/api/recipes.json` 

### 2. Build para GitHub Pages
```bash
npm run deploy:github
```

Ou manualmente:
```bash
npm run generate:static
next build -p next.config.github.js
```

### 3. Deploy no GitHub Pages

1. Faça push dos arquivos gerados
2. Vá em **Settings** > **Pages** no seu repositório
3. Escolha **Source**: Deploy from a branch
4. Escolha **Branch**: `main` e `/root`
5. Salve

## ⚙️ Configurações

### Para GitHub Pages
- `next.config.github.js` - configuração estática
- `utils/dataFetcher.ts` - detecta automaticamente o ambiente
- `NEXT_PUBLIC_STATIC_EXPORT=true` - ativa modo estático

### Para desenvolvimento
- `next.config.js` - configuração normal
- API Routes funcionam normalmente

## 🔄 Diferenças Entre os Ambientes

| Funcionalidade | Local (dev) | GitHub Pages |
|----------------|-------------|--------------|
| **Dados** | API Routes dinâmicas | JSON estático |
| **Performance** | Hot reload | Cache otimizado |
| **Custo** | Grátis | Grátis |
| **Servidor** | Node.js | Apenas estático |

## 🚀 Resumo Rápido

**Desenvolvimento:**
```bash
npm run dev
```

**Deploy GitHub Pages:**
```bash
npm run deploy:github
```

Pronto! 🎉 