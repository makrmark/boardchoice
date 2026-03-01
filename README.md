# 🏄 Surfboard Selector

A beautiful, interactive web app that helps surfers choose the perfect surfboard and fin setup based on current surf conditions. Built with vanilla JavaScript and SVG graphics.

![Surfboard Selector](https://img.shields.io/badge/Framework-Vite-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Condition Selector**: Choose from wave height, power, wind conditions, break type, and your skill level
- **Live Wave Preview**: Beautiful SVG wave graphics that update based on your selections
- **Board Recommendations**: Get suggested surfboard shapes and sizes for the conditions
- **Fin Setup Guide**: Learn which fin configuration (thruster, quad, twin, 2+1) works best
- **Pro Tips**: Context-aware surf tips based on your selected conditions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts a local dev server at http://localhost:5173/

### Build

```bash
npm run build
```

This generates static files in the `dist/` folder, ready for deployment.

## 📦 Deployment to GitHub Pages

This project is configured with GitHub Actions for automatic deployment!

### Setup

1. Create a new GitHub repository
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/surfboard-selector.git
   git push -u origin main
   ```

3. Go to your repository settings → **Pages**
4. Under "Build and deployment", select **Source**: "Deploy from a branch"
5. The GitHub Actions workflow will automatically deploy when you push to main!

### How it works

- Every push to `main` triggers the GitHub Actions workflow
- The workflow builds the app with Vite
- Deploys to GitHub Pages automatically
- Your updated site is live within a minute!

## 🎨 Surf Conditions

Select from these typical surfing conditions:

| Condition | Options |
|-----------|---------|
| **Wave Height** | Knee High, Waist High, Chest High, Head High, Overhead, Double Overhead+ |
| **Wave Power** | Flat/Sloppy, Mushy/Weak, Average/Medium, Powerful/Steep, Hollow/Barrel |
| **Wind** | Offshore (Clean), Light/Glass, Cross-shore, Onshore (Choppy), Strong |
| **Break Type** | Beach Break, Point Break, Reef Break, River Mouth |
| **Skill Level** | Beginner, Intermediate, Advanced, Expert |

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework bloat
- **CSS Variables** - Easy theming
- **SVG Graphics** - Crisp, scalable wave and board illustrations
- **GitHub Actions** - Automatic deployment

## 📝 License

MIT License - feel free to use this for your own projects!

---

Made for surfers, by surfers 🏄‍♂️
