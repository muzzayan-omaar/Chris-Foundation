/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        accent: '#EA580C',
        sage: '#10B981',
        dark: '#0F172A',
      },
    },
  },
  plugins: [],
}