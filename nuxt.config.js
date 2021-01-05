export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'dsc-links',
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: ''
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/custom.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@aceforth/nuxt-optimized-images',
        '@nuxtjs/tailwindcss',
        'nuxt-webfontloader',
        'nuxtjs-mdi-font',
    ],

    webfontloader: {
        google: {
            families: ['Nunito:300,400,500,600,700&display=swap'], // Loads Lato font with weights 400 and 700
        }
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/firebase',
    ],

    firebase: {
        config: {
            apiKey: 'AIzaSyA-EaEL2jb8XhP4wly6W3wHmFS7q0NZ7rc',
            authDomain: 'dsc-link.firebaseapp.com',
            databaseURL: 'https://dsc-link.firebaseio.com',
            projectId: 'dsc-link',
            storageBucket: 'dsc-link.appspot.com',
            messagingSenderId: '954244865743',
            appId: '1:954244865743:web:65a69de6fafe1faea2a1ba',
            measurementId: 'G-C11KK9F2VL'
        },
        services: {
            analytics: true,
            messaging: {
                createServiceWorker: true,
                actions: [
                    {
                        action: 'randomName',
                        url: 'randomUrl'
                    }
                ],
                fcmPublicVapidKey: 'BBemCuzpxFqGWPJ_aiQiKzNkh8u974AlXTwCr2EbGfZm8FzJ7kQ0yyXdaaQznzYWxxn3KCEVy9No0c_IbexMuck' // OPTIONAL : Sets vapid key for FCM after initialization
            }
        }
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
