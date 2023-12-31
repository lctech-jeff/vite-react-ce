/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/assets/**/*.css',
    './src/components/**/*.css',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
