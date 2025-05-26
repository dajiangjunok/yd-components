/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/components/**/*.{js,jsx,ts,tsx,mdx,css}",  // 使用逗号分隔，而不是竖线
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1385f0",
        "info":"#cccccc",
        "danger":"#ff0000",
        "success":"#00ff00",
        "warning":"#ffff00",
      }
    },
  },
  plugins: [],
}