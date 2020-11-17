/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    // extend: {
    //   colors: {
    //     red: {
    //       ...colors.red,
    //       850: '#fffff',
    //     },
    //   },
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
