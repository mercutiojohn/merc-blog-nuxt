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
            { name: "msapplication-TileColor", content: "#ffffff" },
            { name: "theme-color", content: "#ffffff" },
            {
                hid: "description",
                name: "Mercutio John",
                content: "Personal Website of Mercutio John"
            }
        ],
        link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "icon", type: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" },
                { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
            ]
            /*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
        */
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    /*
     ** Nuxt.js modules
     ** Doc: https://modules.nuxtjs.org
     */
    modules: [
        "@nuxtjs/axios",
        // "@unocss/nuxt"
    ],

    buildModules: ["@nuxtjs/svg"],

    /* 
        If you get an Cannot use import statement outside a module error, you may need to add your package to the build > transpile option in nuxt.config.js for webpack loader to make your plugin available.
        https://stackoverflow.com/a/73187520
    */
    build: {
        transpile: ['vue-agile']
    },

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