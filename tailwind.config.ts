import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/button.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config

export default config
