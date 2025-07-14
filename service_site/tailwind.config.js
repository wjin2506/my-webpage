/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'global-1': '#000000',  // Black
        'global-2': '#333333',  // Dark Gray
        'global-3': '#666666',  // Medium Gray
        'global-4': '#999999',  // Light Gray
        'global-5': '#ffffff',  // White
        'info-gray': '#D6D6D6', // Information Gray
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      maxWidth: {
        'container': '1380px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
} 