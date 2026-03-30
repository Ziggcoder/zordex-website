/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        electric: {
          50: "#ecf9ff",
          100: "#cff0ff",
          200: "#9ee2ff",
          300: "#67d0ff",
          400: "#29bbff",
          500: "#0ea5ff",
          600: "#0085d6",
          700: "#0269aa",
          800: "#065989",
          900: "#0a4a6f",
        },
      },
      fontFamily: {
        body: ["Space Grotesk", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px rgba(14, 165, 255, 0.35)",
        panel: "0 24px 80px rgba(2, 6, 23, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        shimmer: "shimmer 6s linear infinite alternate",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(14,165,255,0.22), rgba(5,8,22,0) 36%)",
      },
    },
  },
  plugins: [],
};
