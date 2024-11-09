import type { Config } from 'tailwindcss';

const colors = {
  primary: '#7835E4',
  secondary: '#AA75FF',
  gris: '#B0B1B5',
  negro: '#1C1C1C',
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: {
        title: '35px',
        subtitle: '27px',
        paragraph: '15px',
      },
    },
  },
  plugins: [],
} satisfies Config;
