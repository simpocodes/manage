/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*{html,js}'],
  theme: {
    screen:{
      xs: '100px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
          colors:{
             callToAction: '#22c55e',
             secondary: '#dcfce7',
             primary: '#fff',
          },
    },
  },
  plugins: [],
}

 