/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#52622E',
        'brand-dark': '#3A4520',
        terracotta: '#E07A5F',
        mocha: '#C4A484',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
        'app-bg': '#FBFBFA',
        'border-color': '#EAE8E3',
        'row-hover': '#F9F9F8',
        'light-gray': '#F3F4F6',
        'dark-gray': '#4B5563',
      },
      fontFamily: {
        montserrat: ["Montserrat-Regular"], 
        "montserrat-bold": ["Montserrat-Bold"],
      },
    },
  },
  presets: [require("nativewind/preset")],
  plugins: [],
};