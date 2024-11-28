import type { Config } from 'tailwindcss'
import TailwindCSSAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },

        // DigiFly Colors
        'digifly-purple': {
          DEFAULT: '#6D5CBC',
          50: '#EDEDF9',
          100: '#D0CDDF',
          200: '#B3ADC5',
          300: '#968DAB',
          400: '#7A6D91',
          500: '#6D5CBC',
          600: '#554A98',
          700: '#3E3873',
          800: '#26264F',
          900: '#0F142B',
        },
        'digifly-green': {
          DEFAULT: '#49BD88',
          50: '#E6FDF4',
          100: '#C0F8E0',
          200: '#99F4CC',
          300: '#73F0B8',
          400: '#4DEC9F',
          500: '#49BD88',
          600: '#3D8B6E',
          700: '#306954',
          800: '#24373A',
          900: '#14373A',
        },
        'global-bg-gardient-start': '#FFF9ED',
        'global-bg-gardient-end': '#93ADE9',
        'text-dark': '#1A1A1A',
        'text-gray': '#666666',
        'text-placeholder': '#B3B3B3',
        'editor-toolbar-bg': '#F8F7FC',
        'editor-bg': '#F8F7FF',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [TailwindCSSAnimate],
}
export default config
