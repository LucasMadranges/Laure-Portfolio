<script setup lang="ts">
import { MailIcon, PhoneIcon, PinIcon } from '@lucide/vue';
</script>

<template>
    <section>
        <h2 class="contact-title">Contact</h2>

        <div class="contact-global-container">
            <div class="contact-container">
                <div class="contact-element">
                    <div class="contact-icon">
                        <PhoneIcon />
                    </div>

                    <NuxtLink class="contact-link" to="tel:07.67.17.87.00"
                        >07.67.17.87.00</NuxtLink
                    >
                </div>

                <div class="contact-element">
                    <div class="contact-icon">
                        <MailIcon />
                    </div>

                    <NuxtLink
                        class="contact-link"
                        to="mailto:laure05everwyn@gmail.com"
                        >laure05everwyn@gmail.com</NuxtLink
                    >
                </div>
            </div>

            <div class="contact-container">
                <div class="contact-element">
                    <div class="contact-icon">
                        <PinIcon />
                    </div>

                    <NuxtLink>Métropole Lilloise</NuxtLink>
                </div>

                <div class="contact-element">
                    <div class="contact-icon">
                        <NuxtImg
                            src="/icons/linkedin.svg"
                            height="24"
                            width="24"
                        />
                    </div>

                    <NuxtLink
                        class="contact-link"
                        to="https://www.linkedin.com/in/laure-everwyn-58217738b/"
                        target="_blank"
                        >LinkedIn</NuxtLink
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #f0f0f0;
    padding: 16px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    .contact-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-primary);
    }

    .contact-global-container {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .contact-container {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .contact-element {
                display: flex;
                align-items: center;
                gap: 8px;

                .contact-icon {
                    padding: 4px;
                    background-color: var(--color-secondary);
                    width: fit-content;
                    height: 32px;
                    border-radius: 8px;

                    svg {
                        stroke: var(--color-primary);
                    }
                }

                .contact-link {
                    color: var(--color-text);
                    text-decoration: underline;
                }
            }
        }
    }

    @media only screen and (min-width: 750px) {
        flex-direction: row;

        .contact-title {
            font-size: 26px;
            align-self: center;
        }
    }

    @media only screen and (min-width: 500px) {
        gap: 48px;
        padding: 32px;

        .contact-global-container {
            flex-direction: row;
            gap: 48px;

            .contact-container {
                gap: 24px;
            }
        }
    }
}
</style>
