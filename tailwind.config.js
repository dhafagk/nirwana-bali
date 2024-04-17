/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "main-bg": "url('../img/fabric-background.jpg')",
    },
    fontFamily: {
      roxborough: "RoxboroughCF, Arial, sans-serif",
      times: "Times New Roman, Times, serif",
      gotham: "Gotham, Arial, sans-serif",
    },
  },
  plugins: [],
};
