<template>
    <div class="body-btn">
        <VueLenis root :options="LenisOptions" ref="lenisRef">
            <LayoutHeader :refApp="lenisRef" />

            <Button
                type="button"
                class="btn-scroll-up"
                @click="scrollStore.handleScrollToSection(lenisRef, '#hero')"
            >
                <ArrowUp />
            </Button>

            <main ref="mainRef">
                <SectionHero :refApp="lenisRef" />
                <SectionContactInfo />
                <SectionWhoAmI />
                <SectionProjects />
                <SectionExperiences />
                <SectionCTA />
            </main>

            <LayoutFooter :refApp="lenisRef" />
        </VueLenis>
    </div>
</template>

<script setup lang="ts">
import { ArrowUp } from '@lucide/vue';
import 'lenis/dist/lenis.css';

const lenisRef = useTemplateRef('lenisRef');
const scrollStore = useScrollStore();

const LenisOptions = {
    smooth: true,
    duration: 1.2,
    autoRef: false,
    direction: 'vertical',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

:root {
    --color-primary: #9500ff;
    --color-primary--hover: #6d00bb;
    --color-secondary: #d9b8ff;
    --color-secondary--hover: #b297d1;
    --color-tertiary: #f7edff;
    --color-tertiary--hover: #c9c1d0;

    --color-text: #2f384c;

    --color-border: #e4e6e8bf;

    --color-tags: #ffe4e4;
}

* {
    font-family: 'DM Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    color: var(--color-text);

    main {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 32px 12px;

        @media only screen and (min-width: 750px) {
            padding: 32px 24px;
        }
    }

    .body-btn {
        position: relative;

        .btn-scroll-up {
            border-radius: 100px !important; /* FIXME */
            padding: 12px !important; /* FIXME */
            width: fit-content !important; /* FIXME */

            position: sticky;
            left: calc(100% - 70px);
            top: calc(100% - 65px);
        }
    }
}

.scroll-canceled {
    overflow: hidden;
}
</style>
