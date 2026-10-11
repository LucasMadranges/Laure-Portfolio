<template>
    <footer>
        <div class="footer-content">
            <div class="footer-title">
                <span>Laure Everwyn</span>
                <p>Portfolio de design UX/UI</p>
            </div>
            <div class="footer-link">
                <NuxtLink to="#whoami" class="footer-link"
                    >Qui suis-je ?</NuxtLink
                >
                <NuxtLink to="#experiences" class="footer-link"
                    >Parcours</NuxtLink
                >
                <NuxtLink to="#projects" class="footer-link">Projets</NuxtLink>
                <NuxtLink to="#cta" class="footer-link">Contact</NuxtLink>
            </div>
            <div class="footer-contact">
                <NuxtLink
                    class="footer-link"
                    to="mailto:laure05everwyn@gmail.com"
                    >laure05everwyn@gmail.com</NuxtLink
                >
                <NuxtLink class="footer-link" to="tel:0767178700"
                    >07.67.17.87.00</NuxtLink
                >
            </div>
        </div>
        <div class="footer-copyright">
            © {{ new Date().getFullYear() }} Laure Everwyn. Tous droits
            réservés.
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin: 0 12px;
    padding-top: 32px;
    border-top: 1px solid #e4e6e8;

    span {
        font-size: 18px;
        font-weight: 700;
    }

    p {
        color: #777d8a;
    }

    .footer-link {
        width: fit-content;
        color: var(--color-text);
        text-decoration: none;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        gap: 32px;

        .footer-link {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }

    .footer-copyright {
        border-top: 1px solid #e4e6e8;
        color: #777d8a;
        padding: 32px 0;
        text-align: center;
    }

    @media only screen and (min-width: 750px) {
        padding: 48px 24px;
        gap: 48px;

        .footer-content {
            flex-direction: row;
            justify-content: space-between;
        }

        .footer-copyright {
            padding: 24px 0 0 0;
        }
    }
}
</style>
