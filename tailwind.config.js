/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#df683d",
        secondaryColor: "#508ba1",
        textColor: "#000000",
        secondaryTextColor: "#ffffff",
        disabledColor: "#6b7280",
        successColor: "#16a34a",
        errorColor: "#b91c1c",
        backgroundColor: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
