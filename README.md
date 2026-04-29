# Keyboard Tester

A React, Vite, and Tailwind CSS keyboard testing app with live visual feedback for keyboard and mouse input.

## Features

- Full-size Windows and Mac keyboard layouts
- Live key detection with active, tested, and possible stuck-key states
- Recent key history and latest key code display
- Mouse button testing
- Optional key press sound
- Responsive dark UI
- No backend, database, or permanent storage

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build in dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
keyboard-testing/
├── src/
│   ├── components/
│   │   ├── KeyCap.jsx
│   │   ├── Keyboard.jsx
│   │   ├── LayoutToggle.jsx
│   │   └── StatusPanel.jsx
│   ├── data/
│   │   └── keyboardLayouts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## GitHub Upload

Before pushing, make sure dependencies and generated files are not committed. This project already ignores `node_modules/`, `dist/`, logs, local environment files, and editor files.

```bash
git init
git add .
git commit -m "Initial keyboard tester app"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deployment

This app can be deployed to Vercel or any static hosting provider.

```bash
npm run build
```

The production files are generated in `dist/`.

## License

MIT
