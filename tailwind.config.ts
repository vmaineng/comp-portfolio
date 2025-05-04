/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'retro-green-dark': '#758650',
          'retro-green-light': '#B5C267',
          'retro-yellow-light': '#ffe27c',
          'retro-yellow-dark': '#e8b634',
          'retro-gray-light': '#f8f9f8',
          'retro-gray-dark': '#c9B6A1',
        },
        fontFamily: {
          'pixel': ['monospace', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New'],
        },
      },
    },
    plugins: [],
  }