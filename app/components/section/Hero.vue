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
                <Tags label="Productive" bg-color="#DDF6DF" />
                <Tags label="Adaptabilité" bg-color="#FFEBDD" />
                <Tags label="Permis B" bg-color="#FFF7C9" />
            </div>

            <div class="link-container">
                <Button to="#" variant="primary">Voir mes projets</Button>
                <Button to="#" variant="secondary">Me contacter</Button>
            </div>
        </div>

        <NuxtImg class="image" src="/laure.webp" height="300" width="300" />
    </section>
</template>

<style scoped>
section.hero {
    display: flex;
    flex-direction: column;
    gap: 24px;
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

        .link-container {
            display: flex;
            gap: 8px;
        }
    }

    .image {
        object-fit: cover;
        width: 100%;
        border-radius: 12px;
        position: relative;

        &::after {
            content: '';
            background-color: var(--color-primary);
            border-radius: 12px;

            width: 100px;
            height: 100px;

            position: absolute;
            right: -12px;
        }
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
    }

    @media only screen and (min-width: 750px) {
        padding: 32px 24px;
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;

        .image {
            width: 250px;
        }
    }
}
</style>
