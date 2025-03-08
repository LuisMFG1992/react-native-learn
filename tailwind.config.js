/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'rf-gray-100': '#FFFFFF',
        'rf-gray-200': '#FCFBFA',
        'rf-gray-300': '#FAF7F5',
        'rf-gray-400': '#F7F2EE',
        'rf-gray-500': '#EEE4DA',
        'rf-gray-600': '#867C73',
        'rf-gray-700': '#504B45',
        'rf-gray-800': '#2B2927',
        'rf-gray-900': '#161615',
        border_gray: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
