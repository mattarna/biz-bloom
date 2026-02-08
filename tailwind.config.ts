import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-serif)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          primary: "#0A4D46",
          dark: "#0D453D",
          olive: "#7E7357",
          beige: "#BEB1A3",
          alabaster: "#E7E5E3",
        },
        blueroom: {
          navy: '#0A1628',
          deep: '#0F2044',
          gold: '#C9A96E',
          brass: '#8B7355',
          cream: '#F5F0E8',
          leather: '#3D2B1F',
        },
        background: "#F8F7F5",
      },
      backgroundImage: {
        'blueprint': "linear-gradient(to right, rgba(10,77,70,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,77,70,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'blueprint-size': '40px 40px',
      }
    },
  },
  plugins: [],
};
export default config;
