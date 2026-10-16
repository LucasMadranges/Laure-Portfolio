<template>
    <footer>
        <div class="footer-content">
            <div class="footer-title">
                <span>Laure Everwyn</span>
                <p>Portfolio de design UX/UI</p>
            </div>
            <div class="footer-link">
                <button
                    class="footer-link"
                    @click="
                        scrollStore.handleScrollToSection(refApp, '#whoami')
                    "
                >
                    Qui suis-je ?
                </button>
                <button
                    class="footer-link"
                    @click="
                        scrollStore.handleScrollToSection(refApp, '#projects')
                    "
                >
                    Projets
                </button>
                <button
                    class="footer-link"
                    @click="
                        scrollStore.handleScrollToSection(
                            refApp,
                            '#experiences'
                        )
                    "
                >
                    Parcours
                </button>
                <button
                    class="footer-link"
                    @click="scrollStore.handleScrollToSection(refApp, '#cta')"
                >
                    Contact
                </button>
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

<script setup lang="ts">
import { useScrollStore } from '#imports';

const scrollStore = useScrollStore();

const { refApp } = defineProps<{
    refApp: any;
}>();
</script>

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

            button {
                border: none;
                background-color: transparent;
                font-size: 14px;
                cursor: pointer;
                border-bottom: 1px solid white;
                transition: border-bottom 0.2s;

                &:hover {
                    border-bottom: 1px solid transparent;
                }
            }
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

            .footer-link {
                button {
                    &:hover {
                        border-bottom: 1px solid black;
                    }
                }
            }
        }

        .footer-copyright {
            padding: 24px 0 0 0;
        }
    }
}
</style>
