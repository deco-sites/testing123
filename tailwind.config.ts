import daisyui from 'daisyui';

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ['./**/*.tsx'],
  theme: {
    container: { center: true },
    colors: {
      primary: '#64CCC5',
      secondary: '#176B87',
      tertiary: '#001C30',
    },
  },
};
