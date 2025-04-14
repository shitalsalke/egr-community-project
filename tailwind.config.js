module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        egr: {
          black: "#0B0B0B",
          green: "#69AA00",
          white: "#FFFFFF",
          grey: "#D4D4D4",
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse': 'spin-reverse 50s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
