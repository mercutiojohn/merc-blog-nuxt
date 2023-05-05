export default {
    /*
     ** Headers of the page
     ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
     */
    head: {
        title: "Mercutio John",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "Mercutio John",
                content: "Personal Website of Mercutio John"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    /*
     ** Nuxt.js modules
     ** Doc: https://modules.nuxtjs.org
     */
    modules: [
        "@nuxtjs/axios",
        '@nuxt/devtools',
        // "@unocss/nuxt"
    ],

    buildModules: ["@nuxtjs/svg"],

    /*
     ** Global CSS
     ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
     */
    css: [
        '@/styles/common.css'
    ],

    /*
     ** Plugins to load before mounting the App
     ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
     */
    plugins: ["~/plugins/axios", "~/plugins/api"],

    router: {
        // middleware: ['nocache'],
    },
    // plugin configs
    svg: {
        vueSvgLoader: {
            // vue-svg-loader options
        },
        svgSpriteLoader: {
            // svg-sprite-loader options
        },
        fileLoader: {
            // file-loader options
        }
    }
};