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

        <div class="image-container">
            <NuxtImg class="image" src="/laure.webp" height="300" width="300" />
        </div>
    </section>
</template>

<style scoped>
section.hero {
    display: flex;
    flex-direction: column;
    gap: 24px;

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

    .image-container {
        position: relative;

        .image {
            object-fit: cover;
            width: calc(100% - 16px);
            border-radius: 12px;
        }

        &::after {
            content: '';
            background-color: var(--color-primary);
            border-radius: 12px;

            width: calc(100% - 16px);
            height: 100%;

            position: absolute;
            right: 0px;
            bottom: -8px;

            z-index: -1;
        }
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;

        .image-container {
            .image {
                width: 250px;
            }

            &::after {
                width: 250px;

                right: -12px;
                bottom: -6px;
            }
        }
    }
}
</style>
