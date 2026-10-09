<template>
    <section>
        <div class="section-title">
            <span>À propos</span>

            <h2>Qui suis-je ?</h2>
        </div>

        <div class="section-content">
            <p>
                Je suis Laure, étudiante en design UX/UI. Curieuse et attentive,
                j’aime comprendre les besoins des utilisateurs pour imaginer des
                interfaces claires, utiles et agréables à utiliser.
            </p>

            <p>
                Mon approche mêle écoute, recherche, organisation et créativité.
                Je transforme les idées en parcours structurés, puis en
                maquettes pensées pour le web et le mobile.
            </p>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 16px;

    background-color: var(--color-tertiary);
    padding: 16px;
    border-radius: 12px;

    .section-title {
        span {
            font-size: 14px;
            text-transform: uppercase;
            color: #777d8a;
        }

        h2 {
            font-size: 36px;
            color: var(--color-primary);
            text-wrap: nowrap;
        }
    }

    .section-content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        color: var(--color-text);
    }

    @media only screen and (min-width: 750px) {
        flex-direction: row;
        padding: 32px;
        gap: 32px;
    }
}
</style>
