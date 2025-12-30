import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f5ff",
          100: "#e8e8ff",
          200: "#cfd0ff",
          300: "#a4a7ff",
          400: "#6b72ff",
          500: "#3f46f0",
          600: "#2f35c7",
          700: "#252aa0",
          800: "#1d227c",
          900: "#171b62"
        }
      }
    },
  },
  plugins: [],
};

export default config;
