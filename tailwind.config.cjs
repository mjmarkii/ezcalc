/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backdrop": "var(--backdrop)",
        "front": "var(--front)",
        "keys": "var(--keys)",
        "hover": "var(--hover)",
        "operator-keys": "var(--operator-keys)",
        "operator-color": "var(--operator-color)",
        "main-color": "var(--main-color)",
        "equals": "var(--equals)",
      }
    },
  },
  plugins: [],
}
