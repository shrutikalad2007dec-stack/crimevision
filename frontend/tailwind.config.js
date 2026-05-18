/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#050a15',
          card: 'rgba(10, 15, 30, 0.7)',
          border: 'rgba(0, 255, 255, 0.2)',
          accent: '#00ffff',
          text: '#e0f7fa',
          muted: '#8e9eab'
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #050a15 0%, #0a1128 100%)',
      }
    },
  },
  plugins: [],
};
