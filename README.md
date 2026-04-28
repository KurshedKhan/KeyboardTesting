# Keyboard Tester Web App

A comprehensive keyboard testing application built with React, Vite, and Tailwind CSS. Test all your keyboard keys with visual feedback and persistent highlighting.

## ✨ Features

- **Complete Key Detection**: Tests all keyboard keys including special system keys
- **Visual Feedback**: Keys highlight in green when pressed and remain highlighted to show tested keys
- **Special Keys Support**: Detects PrintScreen, ScrollLock, Pause, navigation keys, and media keys
- **Real-time Display**: Shows recently pressed keys and currently active keys
- **Multiple Layouts**: Support for Windows keyboard layout
- **Sound Feedback**: Optional beep sound on key press
- **Stuck Key Detection**: Alerts when keys appear to be stuck
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Easy on the eyes dark interface

## 🚀 Live Demo

[https://keyboard-tester.vercel.app](https://keyboard-tester.vercel.app)

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KurshedKhan/MyProject.git
cd MyProject/KeyboradTesting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Open the app** in your browser
2. **Press any key** on your keyboard to test it
3. **Visual feedback**: The key will light up green and stay highlighted
4. **Recent keys**: View your recently pressed keys at the top
5. **Reset session**: Click the reset button to clear all tested keys
6. **Toggle sound**: Enable/disable key press sounds

## 🔧 Special Keys

The app detects and tests:
- **PrintScreen (PrtSc)** - Uses multiple detection methods
- **ScrollLock** - System key detection
- **Pause/Break** - System key detection
- **Navigation Keys** - Insert, Delete, Home, End, PageUp, PageDown
- **Arrow Keys** - Up, Down, Left, Right
- **Function Keys** - F1-F12
- **Modifier Keys** - Shift, Ctrl, Alt, Win/Cmd
- **Media Keys** - Play, Pause, Volume, etc.

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

### Automatic Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your app

### Manual Build
```bash
npm run build
npm run preview
```

The build output is in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
keyboard-testing/
├── src/
│   ├── components/          # React components
│   │   ├── KeyCap.jsx      # Individual key component
│   │   ├── Keyboard.jsx    # Main keyboard layout
│   │   ├── LayoutToggle.jsx # Layout switcher
│   │   └── StatusPanel.jsx # Status display panel
│   ├── data/
│   │   └── keyboardLayouts.js # Keyboard layout definitions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point
│   └── styles.css          # Global styles
├── public/                 # Static assets
├── dist/                   # Build output
├── package.json            # Project configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 🎨 Customization

### Colors and Themes
The app uses Tailwind CSS with a dark theme. You can customize colors by modifying:
- `src/styles.css` - Custom component styles
- `tailwind.config.js` - Tailwind configuration

### Keyboard Layouts
Add new keyboard layouts by modifying:
- `src/data/keyboardLayouts.js` - Layout definitions

## 🐛 Troubleshooting

### Special Keys Not Working
Some system keys like PrintScreen may be intercepted by the OS. The app uses multiple detection methods including:
- Event capture phase listeners
- Clipboard monitoring for PrintScreen
- Fallback detection mechanisms

### Browser Compatibility
- **Chrome/Edge**: Full support
- **Firefox**: Most features supported
- **Safari**: Basic support (some system keys may not work)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kurshed Khan**
- GitHub: [KurshedKhan](https://github.com/KurshedKhan)
- Project: [Keyboard Testing App](https://github.com/KurshedKhan/MyProject/tree/KeyboradTesting)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for seamless deployment
- Tailwind CSS for beautiful styling
- Lucide for the icon library
