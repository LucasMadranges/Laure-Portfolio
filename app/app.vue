<template>
    <LayoutHeader />

    <main>
        <SectionHero />

        <SectionContactInfo />

        <SectionWhoAmI />

        <SectionExperiences />
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

:root {
    --color-primary: #9500ff;
    --color-secondary: #d9b8ff;
    --color-tertiary: #f7edff;

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
}

.scroll-canceled {
    overflow: hidden;
}
</style>
