/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundPosition: theme => theme('positions'),
    objectPosition: theme => theme('positions'),
    extend: {
      backgroundImage: theme => ({

        'background': "url('/static/background.png')",
      }),
      color:{
        primary:{
          defaultBlue: '#4285F4',
          lightBlue:'#3FA9F5',
          defaultOrange: '#F4B400',
          twitterbg: '#00ACED',
          defaultGray: '#00ACED'
        }
      },

    },

  
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
    },
  },
  variants: {},
  plugins: []
}