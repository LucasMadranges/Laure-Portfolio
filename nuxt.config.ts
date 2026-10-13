// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Portfolio de Laure Everwyn',
            meta: [
                {
                    name: 'description',
                    content: `Je m'appelle Laure Everwyn, j'ai 19 ans, étudiante à MyDigitalSchool et voici mon portfolio présentant qui je suis, mon parcours ainsi que mes projets ! Enjoy 💫`,
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
    modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/eslint', '@nuxt/hints', '@vueuse/nuxt', 'motion-v/nuxt', 'lenis/nuxt', '@pinia/nuxt'],
    compatibilityDate: '2026-10-08',
    devtools: { enabled: true },
    motionV: {
        directives: true,
    },
    lenis: {
        anchors: true,
    },
});