module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        1200: '1200ms',
        1500: '1500ms',
        1800: '1800ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};
