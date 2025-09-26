// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-primary": "linear-gradient(to right, #06b6d4, #3b82f6)",
        "muted-foreground": "#9ca3af",
        card: "rgba(255,255,255,0.1)",
        border: "#374151",
      },
    },
  },
  plugins: [],
};
