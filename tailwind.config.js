/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "main-dark-color": "#1a535c",
        "main-secondary-color": "#cbf3f0",
        "main-light-color": "#f7fff7",
        "secondary-dark-color": "#fb7c33",
        "secondary-light-color": "#ffe66d",
        "dark-charcoal": "#333",
        "dark-shade-gray": "#444",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
