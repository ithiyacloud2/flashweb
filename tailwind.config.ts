import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E1EDE6',
          200: '#C2DBCF',
          700: '#2D5A43',
          800: '#1B4332',
          900: '#112A1F',
          950: '#0A1B14',
        },
        terracotta: {
          50: '#FDF6F2',
          100: '#FBEBE3',
          200: '#F6D7C7',
          500: '#D9733E',
          600: '#C45C26',
          700: '#A6481A',
          800: '#873913',
          900: '#6E2E0E',
        },
        parchment: {
          50: '#FFFFFF',
          100: '#FDFCF9',
          200: '#FBF9F5',
          300: '#F4EFEA',
          400: '#ECE5DC',
          500: '#DFD5C8',
        },
        charcoal: {
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#141210',
        },
        ochre: {
          500: '#D4A373',
          600: '#B88653',
          700: '#996C3B',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Lora', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-cinzel)', 'Cinzel', 'Lora', 'Georgia', 'serif'],
      },
      borderColor: {
        DEFAULT: '#E5DFD7',
      },
    },
  },
  plugins: [],
}

export default config
