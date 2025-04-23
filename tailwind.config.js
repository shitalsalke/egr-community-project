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
          cblue:"#124E66",
          cgrey:"#1F2833",
          cblight:"#748D92",
          cglight:"#D3D9D4",
        },
        egr2: {
          black: "#0B0B0B",
          green: "#69AA00",
          white: "#FFFFFF",
          grey: "#D4D4D4",
          cblue:"#124E66",
          cgrey:"#FDF6E9",
          cblight:"#748D92",
          cglight:"#D3D9D4",
        }
      },
      animation: {
        'scroll-loop': 'scrollLoop 60s linear infinite',
      },
      keyframes: {
        scrollLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' }, // Adjust based on repeat count
        },
      },
    },
  },
  plugins: [],
};
