<template>
    <footer>
        <div class="footer-content">
            <div class="footer-title">
                <span>Laure Everwyn</span>
                <p>Portfolio de design UX/UI</p>
            </div>
            <div class="footer-link">
                <a href="#whoami" class="footer-link">Qui suis-je ?</a>
                <a href="#experiences" class="footer-link">Parcours</a>
                <a href="#projects" class="footer-link">Projets</a>
                <a href="#cta" class="footer-link">Contact</a>
            </div>
            <div class="footer-contact">
                <a class="footer-link" href="mailto:laure05everwyn@gmail.com"
                    >laure05everwyn@gmail.com</a
                >
                <a class="footer-link" href="tel:0767178700">07.67.17.87.00</a>
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
