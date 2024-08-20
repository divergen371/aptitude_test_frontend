/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a202c", // ダークモードの背景色
        darkCardBg: "#2d3748", // ダークモードのカード背景色
        darkText: "#a0aec0", // ダークモードのテキスト色
        darkAccent: "#4FD1C5", // ダークモードのアクセントカラー
        darkBorder: "#4A5568", // ダークモードのボーダー色
      },
    },
  },
  plugins: [],
};
