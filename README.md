# COI Calculator 🏭

A visual production chain calculator for **Captain of Industry** game, built with Next.js, ReactFlow, and TypeScript.

![COI Calculator Preview](https://img.shields.io/badge/Captain%20of%20Industry-Production%20Calculator-blue)
![Next.js](https://img.shields.io/badge/Next.js-13+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![ReactFlow](https://img.shields.io/badge/ReactFlow-11+-green)

## ✨ Features

### 🎯 **Objective-Based Planning**
- Select your production goal from 200+ resources
- Browse available recipes for any resource
- Visual recipe cards with inputs/outputs

### 🔗 **Interactive Flow Canvas**
- Drag & drop recipe nodes
- Visual connections between recipes
- Animated resource flow with varying particle sizes
- Real-time production calculations

### 📊 **Production Analysis**
- **Smart Summary Drawer**: Bottom sliding panel with production overview
- **Building Requirements**: Count of each building type needed
- **Net Resource Balance**: Shows surplus/deficit for each resource
- **Input/Output Totals**: Complete material flow analysis

### ⚡ **Advanced Features**
- **Multiplier System**: Scale production with visual multiplier controls
- **Connection Management**: Smart modal for linking recipes
- **URL State Persistence**: Advanced compression (80% smaller URLs)
- **Debug Panel**: Development tools for inspecting canvas state

## 🚀 Technologies

- **Frontend**: Next.js 13+ with TypeScript
- **Visualization**: ReactFlow for interactive diagrams
- **Styling**: Tailwind CSS
- **Data**: 332 recipes with 220 resources from Captain of Industry
- **Compression**: Custom LZ77-like algorithm for URL state

## 📱 Screenshots

### Main Flow Canvas
Interactive production chain with animated connections and real-time calculations.

### Recipe Selection
Browse and select recipes with detailed input/output information.

### Production Summary
Comprehensive analysis panel showing building requirements and resource balance.

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/fredppm/coi-calc.git
cd coi-calc

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start planning your factory!

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## 🎮 How to Use

1. **Select Objective**: Choose what resource you want to produce
2. **Pick Recipe**: Select the recipe that produces your target resource
3. **Build Chain**: Click on input resources to add supplier recipes
4. **Analyze**: Use the summary drawer to see building requirements
5. **Optimize**: Adjust multipliers and connections for efficiency

## 🔧 Project Structure

```
├── components/           # React components
│   ├── Flow/            # ReactFlow canvas and edges
│   ├── RecipeNode/      # Individual recipe nodes
│   ├── ProductionSummaryDrawer/  # Analysis panel
│   └── ...
├── data/                # Game data (recipes, resources)
├── pages/               # Next.js pages and API routes
├── public/images/       # Resource and building images (93.7% coverage)
└── styles/              # Global styles
```

## 📊 Data Coverage

- **Resources**: 178/220 images (80.9% coverage)
- **Buildings**: 133/112 images (118.8% coverage)
- **Total**: 311/332 images (93.7% coverage)

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add missing resource/building images
- Improve UI/UX
- Optimize algorithms
- Add new features

## 📄 License

This project is open source. Captain of Industry game assets belong to their respective owners.

## 🎯 Roadmap

- [ ] Recipe search and filtering
- [ ] Factory layout export
- [ ] Resource consumption optimization
- [ ] Multi-factory support
- [ ] Save/load factory designs

---

**Built with ❤️ for the Captain of Industry community** 