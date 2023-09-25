module.exports = {
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cdu-mint': '#52b7c1',
        'cdu-darkblue': '#2d3c4b',
        'cdu-white': '#fff',
        'cdu-gold': '#ffa600',
        'cdu-red': '#bf111b',
        'cdu-black': '#1b191d',
        'afd-blue': '#0099ff',
        'afd-blue-dark': '#0033cc',
        'afd-blue-dark': '#cc0000',
        'afd-gradient-second': '#0072b3',
        'lums-accent': '#A1E8AF',
        'lums-blue': '#383f51',
      },
    },
  },
  variants: {},
  plugins: [],
  content: ['./_site/**/*.{md,njk,sass}'],
};
