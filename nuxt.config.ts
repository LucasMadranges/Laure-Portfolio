// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxt/eslint',
        '@nuxt/hints',
        '@vueuse/nuxt',
        'motion-v/nuxt',
    ],
    compatibilityDate: '2026-10-08',
    devtools: { enabled: true },
    motionV: {
        directives: true,
    },
});
