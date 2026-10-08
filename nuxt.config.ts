// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxt/eslint',
        '@nuxt/hints',
        '@vueuse/nuxt',
    ],
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    fonts: {
        provider: 'google', // sets default provider
        families: [
            {
                name: 'DM Sans',
            },
        ],
    },
})
