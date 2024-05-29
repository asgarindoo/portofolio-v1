/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 15s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".mask-gradient": {
          maskImage:
            "linear-gradient(to right, transparent 0.5%, #313131 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
