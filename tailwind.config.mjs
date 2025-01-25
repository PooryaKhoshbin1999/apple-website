/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2997FF',
        gray: {
          DEFAULT: '#86868B',
          100: '#94928B',
          200: '#AFAFAF',
          300: '#42424570',
        },
        zinc: '#101010',
      },
    },
  },
  plugins: [],
};
