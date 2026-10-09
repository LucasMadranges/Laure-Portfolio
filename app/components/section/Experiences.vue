<template>
    <section>
        <h2>Mes expériences</h2>

        <div class="professionals">
            <h3>Professionels</h3>

            <div class="professionals-container">
                <div class="professionals-element">
                    <h4>Stage d'architecture d'intérieur</h4>
                    <div class="tags-container">
                        <Tags label="2 semaines" bg-color="#F0F0F0" />
                        <Tags label="Octobre 2021" bg-color="#F0F0F0" />
                    </div>
                    <p>Rencontres clients</p>
                    <p>Utilisation d'outils informatiques (Photoshop)</p>
                </div>
                <div class="professionals-element">
                    <h4>Capgemini, Lille</h4>
                    <div class="tags-container">
                        <Tags label="1 mois" bg-color="#F0F0F0" />
                        <Tags label="Juin 2023" bg-color="#F0F0F0" />
                    </div>
                    <p>Vérification des besoins du client</p>
                    <p>Observation de programmation</p>
                </div>
                <div class="professionals-element">
                    <h4>Enedis, Villeneuve-d'Ascq</h4>
                    <div class="tags-container">
                        <Tags label="3 mois" bg-color="#F0F0F0" />
                        <Tags label="2026" bg-color="#F0F0F0" />
                    </div>
                    <p>Création de maquettes</p>
                    <p>Rédaction de cahier des charges</p>
                </div>
            </div>
        </div>

        <div class="formations">
            <h3>Formations</h3>

            <div class="formations-container">
                <div class="formations-element">
                    <span>2025 - Aujourd'hui</span>
                    <h4>MyDigitalSchool, Lille</h4>
                    <p>Bachelor digital, design UX/UI</p>
                </div>
                <div class="formations-element">
                    <span>2022 - 2025</span>
                    <h4>Lycée Arthur Rimbaud, Sin-le-Noble</h4>
                    <p>Spécialités mathématiques et NSI · Mention Bien</p>
                </div>
                <div class="formations-element">
                    <span>2018 - 2022</span>
                    <h4>Collège Val de la Sensée, Arleux</h4>
                    <p>Mention Très bien</p>
                </div>
            </div>
        </div>

        <div class="competences"></div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
        font-size: 40px;
        font-weight: 500;
    }

    h3 {
        font-size: 32px;
        font-weight: 500;
    }

    h4 {
        font-size: 20px;
        font-weight: 700;
    }

    .professionals {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .professionals-container {
            display: flex;
            flex-direction: column;
            gap: 24px;

            position: relative;

            .professionals-element {
                display: flex;
                flex-direction: column;
                gap: 12px;
                padding-left: 42px;
                position: relative;

                .tags-container {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                p {
                    font-size: 16px;
                }

                &::after {
                    content: '';
                    background-color: var(--color-primary);
                    width: 24px;
                    height: 24px;
                    border-radius: 100px;
                    border: 6px solid white;

                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);

                    z-index: 2;
                }
            }

            &::after {
                content: '';
                border-left: 3px solid #e9e9f0;
                border-radius: 100px;

                height: 100%;

                position: absolute;
                left: 16px;
                top: 0;

                z-index: 1;
            }
        }

        @media only screen and (min-width: 750px) {
            .professionals-container {
                flex-direction: row;
                justify-content: space-around;

                text-align: center;

                .professionals-element {
                    padding-left: 0px;
                    padding-top: 48px;

                    align-items: center;

                    &::after {
                        left: 50%;
                        top: 0px;
                        transform: translateX(-50%);
                    }
                }

                &::after {
                    border-top: 3px solid #e9e9f0;

                    width: 100%;
                    height: 0;

                    left: 0;
                    top: 16px;
                }
            }
        }
    }

    .formations {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .formations-container {
            display: flex;
            flex-direction: column;
            gap: 24px;

            position: relative;

            .formations-element {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding-left: 42px;
                position: relative;

                p {
                    font-size: 16px;
                    color: #777d8a;
                }

                &::after {
                    content: '';
                    background-color: var(--color-primary);
                    width: 12px;
                    height: 12px;
                    border-radius: 100px;
                    border: 6px solid white;

                    position: absolute;
                    left: 5.5px;
                    top: 50%;
                    transform: translateY(-50%);

                    z-index: 2;
                }
            }

            &::after {
                content: '';
                border-left: 3px solid #e9e9f0;
                border-radius: 100px;

                height: 100%;

                position: absolute;
                left: 16px;
                top: 0;

                z-index: 1;
            }
        }
    }

    .competences {
    }
}
</style>
