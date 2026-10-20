// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        defaultLocale: 'fr',
        url: 'https://laure-everwyn.netlify.app/',
        name: 'Laure Everwyn',
        description: `Je m'appelle Laure Everwyn, j'ai 19 ans, étudiante à MyDigitalSchool et voici mon portfolio présentant qui je suis, mon parcours ainsi que mes projets ! Enjoy !`,
    },
    app: {
        head: {
            meta: [
                { name: 'theme-color', content: '#9500ff' },
                {
                    name: 'theme-color',
                    content: '#6d00bb',
                    media: '(prefers-color-scheme: dark)',
                },
            ],
            htmlAttrs: {
                lang: 'fr',
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'favicon.ico',
                },
            ],
        },
    },
    modules: [
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxt/eslint',
        '@nuxt/hints',
        '@vueuse/nuxt',
        'motion-v/nuxt',
        'lenis/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/seo',
        'nuxt-og-image',
        '@nuxtjs/robots',
    ],
    compatibilityDate: '2026-10-08',
    devtools: { enabled: true },
    motionV: {
        directives: true,
    },
    lenis: {
        anchors: true,
    },
    build: {
        transpile: ['@lucide/vue'],
    },
});
