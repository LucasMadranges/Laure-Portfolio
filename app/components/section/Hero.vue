<template>
    <section class="hero">
        <div class="hero-content">
            <h1>Laure Everwyn</h1>

            <p class="hero-primary-content">19 ans, Bachelor 2 design UX/UI</p>

            <p class="hero-content">
                Je cherche une alternance en design UX/UI. J’aime transformer un
                besoin en maquettes claires et en cahier des charges, en
                travaillant avec les équipes et les utilisateurs.
            </p>

            <div class="tags-container">
                <Tags label="Créative" />
                <Tags label="Créative" />
                <Tags label="Créative" />
                <Tags label="Créative" />
            </div>
        </div>
    </section>
</template>

<style scoped>
section.hero {
    padding: 32px 12px;

    .hero-content {
        display: flex;
        flex-direction: column;
        gap: 12px;

        h1 {
            font-weight: 700;
            font-size: 40px;
            color: var(--color-primary);
        }

        p {
            &.hero-primary-content {
                font-size: 16px;
                font-weight: 400;
            }

            &.hero-content {
                font-size: 14px;
                font-weight: 400;
            }
        }

        .tags-container {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    }
}
</style>
