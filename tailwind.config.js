const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,sass,css}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#E2CAB2', //blue
        'itemsColor': '#FADFA8'
      },
      fontFamily: {
        'mainFont': 'Century Gothic',
        'logoFont': 'Colonna MT'

      },
      gridTemplateColumns: {
        '1.5/2.5': '1fr 2fr'
      },
      boxShadow: {
        'itemsShadow': '5px 16px 30px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [
    plugin(function ({ theme, addComponents }) {
      addComponents({
        '.mainBlock': {
          borderRadius: '25px',
          boxShadow: theme('boxShadow.itemsShadow'),
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          padding: '30px 20px',
          boxSizing:'border-box'
        },
        '.inputStyle':{
          padding:'0.75rem',
          borderRadius:'1rem',
          backgroundColor:theme('colors.gray.200'),
          border:'none',
          boxSizing:'border-box'
        }
      })
    }),
  ],
}


