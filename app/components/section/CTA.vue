<template>
    <section>
        <div>
            <h2>Vous proposez une alternance en design UX/UI ?</h2>
            <span
                >Je serais ravie d’en discuter et de vous présenter mes
                maquettes.</span
            >
        </div>

        <Button to="mailto:laure05everwyn@gmail.com" variant="secondary"
            >Écrire à Laure</Button
        >
    </section>
</template>

<style scoped>
section {
    background-color: var(--color-primary);
    color: white;
    padding: 12px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        h2 {
            font-size: 40px;
            font-weight: 700;
        }
    }

    @media only screen and (min-width: 750px) {
        flex-direction: row;
        align-items: center;
        padding: 32px;
    }
}
</style>
