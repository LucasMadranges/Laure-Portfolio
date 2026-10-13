<template>
    <section id="projects">
        <div class="projects-title">
            <h2>Mes projets</h2>

            <span
                >Deux projets de maquettes, l’un pour un site web, l’autre pour
                une application mobile.</span
            >
        </div>

        <div class="projects-container">
            <div class="projects-element">
                <div class="projects-header">
                    <div class="projects-content">
                        <h3>Salv Skate Co.</h3>
                        <div class="projects-tags">
                            <Tags label="Site web" bg-color="#F0F0F0" />
                            <Tags
                                label="Ordinateur et mobile"
                                bg-color="#F0F0F0"
                            />
                            <Tags label="Figma" bg-color="#F0F0F0" />
                        </div>
                    </div>

                    <div class="projects-description">
                        <p>
                            Maquettes du site de la marque de skate Salv Skate
                            Co. : une boutique pour le matériel, des vidéos de
                            sessions et un blog sur la fabrication des produits.
                        </p>
                        <p>
                            Univers sombre, titres condensés et boutons blancs
                            très contrastés.
                        </p>
                        <p>
                            Pages conçues : accueil, produits, fiche produit,
                            blog, article, vidéos et contact.
                        </p>
                        <p>
                            Chaque page existe en version ordinateur et en
                            version mobile.
                        </p>
                    </div>
                </div>

                <div class="projects-body">
                    <div class="projects-element">
                        <NuxtImg
                            src="/salv/image-1.webp"
                            alt="Première image du projet Salv Skate Co."
                            class="projects-img"
                        />
                        <span>Accueil, version ordinateur</span>
                    </div>
                    <div class="grid">
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Deuxième image du projet Salv Skate Co."
                                src="/salv/image-2.webp"
                            />
                            <span>Fiche produit, version ordinateur</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Troisième image du projet Salv Skate Co."
                                src="/salv/image-3.webp"
                            />
                            <span>Produits, mobile</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Quatrième image du projet Salv Skate Co."
                                src="/salv/image-4.webp"
                            />
                            <span>Fiche produit, mobile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects-container">
            <div class="projects-element">
                <div class="projects-header">
                    <div class="projects-content">
                        <h3>Enedis, application d’inventaire du matériel</h3>
                        <div class="projects-tags">
                            <Tags
                                label="Application mobile"
                                bg-color="#F0F0F0"
                            />
                            <Tags label="Stage 2026" bg-color="#F0F0F0" />
                            <Tags
                                label="Maquettes et cahier des charges"
                                bg-color="#F0F0F0"
                            />
                        </div>
                    </div>

                    <div class="projects-description">
                        <p>
                            Application mobile pour suivre le matériel de la
                            Direction Régionale Nord-Pas-de-Calais sur les sites
                            de Villeneuve-d’Ascq et de Douai. Chaque service
                            accède à son propre espace d’inventaire.
                        </p>
                        <p>Connexion, puis choix du service.</p>
                        <p>
                            Tableau de bord avec le matériel disponible, prêté
                            et en alerte.
                        </p>
                        <p>
                            Recherche, historique, alertes et ajout d’un
                            équipement en 3 étapes.
                        </p>
                    </div>
                </div>

                <div class="projects-body">
                    <div class="grid grid-inverted">
                        <div class="projects-element">
                            <NuxtImg
                                src="/enedis/image-1.png"
                                alt="Première image du projet d'Enedis"
                                class="projects-img"
                            />
                            <span>Choix du service</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                src="/enedis/image-2.png"
                                alt="Deuxième image du projet d'Enedis"
                                class="projects-img"
                            />
                            <span>Tableau de bord</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                src="/enedis/image-3.png"
                                alt="Troisième image du projet d'Enedis"
                                class="projects-img"
                            />
                            <span>Recherche et stock</span>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Quatrième image du projet d'Enedis"
                                src="/enedis/image-4.png"
                            />
                            <span>Historique des mouvements</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Cinquième image du projet d'Enedis"
                                src="/enedis/image-5.png"
                            />
                            <span>Alertes de stock</span>
                        </div>
                        <div class="projects-element">
                            <NuxtImg
                                class="projects-img"
                                alt="Sixième image du projet d'Enedis"
                                src="/enedis/image-6.png"
                            />
                            <span>Ajout d'un équipement</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ImgSalv1 from '/salv/image-1.png';
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        font-size: 40px;
        font-weight: 500;
    }

    h3 {
        font-size: 32px;
        font-weight: 500;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;

        @media only screen and (min-width: 750px) {
            row-gap: 24px;
            column-gap: 24px;
            grid-template-columns: 2fr 1fr 1fr;

            &.grid-inverted {
                grid-template-columns: 1fr 1fr 2fr;
            }
        }
    }

    .projects-title {
        display: flex;
        flex-direction: column;
        gap: 12px;

        span {
            font-size: 16px;
            color: #777d8a;
        }
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .projects-element {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .projects-header {
                display: flex;
                flex-direction: column;
                gap: 12px;

                .projects-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;

                    .projects-tags {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                }

                .projects-description {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
            }

            .projects-body {
                display: flex;
                flex-direction: column;
                gap: 12px;

                .projects-element {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;

                    span {
                        font-size: 14px;
                    }

                    .projects-img {
                        object-fit: cover;
                        object-position: top;
                        width: 100%;
                        height: 250px;
                        border-radius: 12px;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 750px) {
        gap: 32px;

        .projects-container {
            .projects-element {
                gap: 24px;

                .projects-header {
                    flex-direction: row;
                    justify-content: space-between;

                    .projects-description {
                        width: 50%;
                    }
                }

                .projects-body {
                    gap: 24px;

                    .projects-element {
                        .projects-img {
                            height: 500px;
                        }
                    }
                }
            }
        }
    }
}
</style>
