/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#dbf0ff",
        blue: "#109DFF",
        lightBlue: "#ADE2FF",
        "bg-dark": "hsla(220, 6%, 10%, 1)",
        "red-500": "hsla(0, 78%, 60%, 1)",
        "gray-100": "hsla(0, 0%, 65%, 1)",
        "gray-200": "hsla(0, 0%, 52%, 1)",
        "gray-600": "hsla(0, 0%, 38%, 1)",
        "gray-700": "hsla(0, 0%, 26%, 1)",
        "gray-800": "hsla(228, 7%, 20%, 1)",
        "blue-50": "hsla(205, 100%, 93%, 1)",
        "blue-100": "hsla(202, 100%, 84%, 1)",
        "blue-300": "hsla(205, 100%, 74%, 1)",
        "blue-500": "hsla(204, 100%, 58%, 1)",
        "blue-500": "hsla(202, 100%, 55%, 1)",
        "blue-600": "hsla(205, 100%, 53%, 1)",
        "blue-800": "hsla(209, 100%, 35%, 1)",
      },
    },
  },
  plugins: [],
};
