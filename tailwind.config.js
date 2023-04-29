/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#6B63FF",
        "purple-primary-dark": "#4F48D1",
        "gray-box": "rgba(0, 0, 0, 0.01)",
        "gray-box-border": "rgba(0, 0, 0, 0.08)"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      },
      width: {
        "480": "480px",
      },
      height: {
        '674': '674px',
        '465': '465px',
      },
    },
  },
  plugins: [],
}