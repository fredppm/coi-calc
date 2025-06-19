# 🤝 Contributing to COI Calculator

Welcome! We love contributions from everyone, whether you're fixing bugs, adding features, or improving documentation.

## 🚦 Development Workflow

### Prerequisites
- **Node.js 18+** (check with `node --version`)
- **Git** for version control
- **Code editor** (VS Code recommended)

### Getting Started

```bash
# 1. Fork & clone the repository
git clone https://github.com/your-username/coi-calc.git
cd coi-calc

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Create a feature branch
git checkout -b feature/awesome-new-feature
```

### Making Changes

```bash
# Make your changes
# Test locally
npm run dev

# Check TypeScript
npm run type-check

# Run linting
npm run lint

# Commit with clear messages
git commit -m "Add recipe search functionality"

# Push and create a Pull Request
git push origin feature/awesome-new-feature
```

## 🛠️ Contribution Ideas

### 🟢 **Easy (Great for First-Time Contributors)**
- **Add missing images**: We're at 88.6% coverage - help us reach 100%!
- **Fix typos**: Documentation improvements are always welcome
- **Add resource categories**: Improve the objective selector
- **Improve responsive design**: Make it work better on mobile

### 🟡 **Medium Complexity**
- **Recipe search & filtering**: Add search functionality
- **Keyboard shortcuts**: Power user features
- **Export functionality**: Save designs as images/JSON
- **Performance optimizations**: Make large factories smoother

### 🔴 **Advanced Features**
- **Multi-factory support**: Plan multiple production sites
- **Resource optimization algorithms**: Auto-suggest improvements
- **Real-time collaboration**: Multiple users on same design
- **Integration with game saves**: Import existing factories

## 📝 Code Style Guidelines

### TypeScript
- Use **strict mode**
- Define interfaces for all props
- Prefer `interface` over `type` for props

### Components
- **Functional components only** (no class components)
- **Export by name** (not default): `export const MyComponent`
- Props interfaces in the same file, above the component

### Styling
- **Tailwind CSS** utility classes only
- **Minimal inline styles** (only for dynamic values)
- No CSS modules or styled-components

### Comments
- **English only**
- Explain the "why" not the "what"
- Add JSDoc for exported functions

### Naming Conventions
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case` for non-components

## 🏗️ Project Architecture

### Component Structure
```
components/
├── ComponentName/
│   ├── ComponentName.tsx    # Main component
│   └── index.ts            # Re-export (optional)
```

### Component Template
```tsx
import { useState, useEffect } from 'react';

/**
 * ComponentProps defines the properties for the Component.
 */
export interface ComponentProps {
  color?: string; // Optional with default
  size: number;   // Required
  visible?: boolean; // Optional with default
}

/**
 * Component does something useful.
 */
export const Component: React.FC<ComponentProps> = ({
  color = "#2563eb",
  size,
  visible = true,
}) => {
  // Component logic here
  
  return (
    <div className="bg-white p-4">
      {/* Component JSX */}
    </div>
  );
};
```

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📦 Pull Request Process

1. **Create an issue first** for significant changes
2. **Keep PRs focused** - one feature/fix per PR
3. **Write clear descriptions** - what does it do and why?
4. **Test thoroughly** - make sure it works as expected
5. **Update documentation** if needed

### PR Title Format
- `feat: add recipe search functionality`
- `fix: resolve image loading issue`
- `docs: update contributing guidelines`
- `refactor: improve component structure`

## 🐛 Bug Reports

When reporting bugs, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if helpful
- **Browser/OS information**

## 💡 Feature Requests

For new features:

1. **Check existing issues** to avoid duplicates
2. **Open a discussion** first for major features
3. **Describe the use case** - why is this needed?
4. **Suggest implementation** if you have ideas

## 🔒 Security

For security vulnerabilities, please email us privately instead of creating public issues.

---

**Thanks for contributing! 🎉** 