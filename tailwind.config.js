/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        heroDesktop: "url('/src/assets/images/image-hero-desktop.jpg')",
        heroMobile: "url('/src/assets/images/image-hero-mobile.jpg')",
      },
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
