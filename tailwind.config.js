module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 0.5s ease-in-out',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
