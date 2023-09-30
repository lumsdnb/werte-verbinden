/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'partei-red': '#b72837',

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
        'volt-violet': '#502379',
        'volt-red': '#502379',
        'volt-blue': '#82D0F4',
        'volt-yellow': '#FDC220',
        'volt-green': '#1BBE6F',
        'fdp-yellow': '#ffed00',
        'fdp-blue': '#009ee3',
        'fdp-magenta': '#e5007d',
        'linke-red': '#FF0000',
        'linke-dark': '#999999',
        'green-tanne': '#005437',
        'green-klee': '#008939',
        'green-grashalm': '#8abd24',
        'green-sand': '#f5f1e9',
        'green-sky': '#0ba1dd',
        'green-sonne': '#fff17a',
        'pirate-orange': '#FF8800',

        'lums-blue': '#383f51',
        'lums-accent': '#A1E8AF',
      },
    },
  },
  plugins: [],
};
