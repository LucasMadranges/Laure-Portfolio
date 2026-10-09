<template>
    <section>
        <h2>Expériences</h2>

        <div class="experiences-container">
            <div class="experiences-element">
                <h3>Stage d'architecture d'intérieur</h3>
                <div class="tags-container">
                    <Tags label="2 semaines" bg-color="#F0F0F0" />
                    <Tags label="Octobre 2021" bg-color="#F0F0F0" />
                </div>
                <p>Rencontres clients</p>
                <p>Utilisation d'outils informatiques (Photoshop)</p>
            </div>
            <div class="experiences-element">
                <h3>Capgemini, Lille</h3>
                <div class="tags-container">
                    <Tags label="1 mois" bg-color="#F0F0F0" />
                    <Tags label="Juin 2023" bg-color="#F0F0F0" />
                </div>
                <p>Vérification des besoins du client</p>
                <p>Observation de programmation</p>
            </div>
            <div class="experiences-element">
                <h3>Enedis, Villeneuve-d'Ascq</h3>
                <div class="tags-container">
                    <Tags label="3 mois" bg-color="#F0F0F0" />
                    <Tags label="2026" bg-color="#F0F0F0" />
                </div>
                <p>Création de maquettes</p>
                <p>Rédaction de cahier des charges</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        font-size: 40px;
        font-weight: 500;
    }

    .experiences-container {
        display: flex;
        flex-direction: column;
        gap: 24px;

        position: relative;

        .experiences-element {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-left: 42px;
            position: relative;

            h3 {
                font-size: 20px;
                font-weight: 700;
            }

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
}
</style>
