import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030014',   // Dark background
        secondary: '#38bdf8', // Light blue accent
        accent: '#f472b6',    // Pink accent
        react: '#61dafb',     // React blue
        node: '#4ade80',      // Node green
        'dark-bg': '#0a0a1f', // Darker card background
        'light-text': '#f8fafc', // Light text
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(3, 0, 20, 0) 0%, #030014 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
