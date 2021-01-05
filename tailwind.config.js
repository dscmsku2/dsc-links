/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#ffa000',
                defaultBlue: '#4285F4',
                lightBlue: '#3FA9F5',
                defaultOrange: '#F4B400',
                twitterbg: '#00ACED',
                defaultGray: '#00ACED'
            }

        },


        future: {
            removeDeprecatedGapUtilities: true,
            purgeLayersByDefault: true
        },
        fontFamily: {
            display: [
                'Nunito', 'sans-serif'
            ],
            body: ['Nunito', 'sans-serif']
        }
    },
    variants: {},
    plugins: []
}
