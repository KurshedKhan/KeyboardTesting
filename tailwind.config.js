/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        key: 'inset 0 -2px 0 rgba(0,0,0,0.42), 0 8px 18px rgba(0,0,0,0.28)',
        pressed: '0 0 0 1px rgba(94,234,212,0.75), 0 0 26px rgba(45,212,191,0.48), inset 0 0 18px rgba(45,212,191,0.22)',
        stuck: '0 0 0 1px rgba(251,113,133,0.85), 0 0 26px rgba(251,113,133,0.42), inset 0 0 18px rgba(251,113,133,0.18)',
      },
    },
  },
  plugins: [],
};
