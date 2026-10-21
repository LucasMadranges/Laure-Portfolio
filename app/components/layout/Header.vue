<template>
    <header>
        <button
            class="logo-btn"
            @click="scrollStore.handleScrollToSection(refApp, '#hero')"
        >
            <NuxtImg class="logo-img" src="/logo.svg" height="32" width="32" />
        </button>

        <nav v-if="!mobileMenu" class="menu menu-desktop">
            <button
                class="nav-link"
                @click="scrollStore.handleScrollToSection(refApp, '#whoami')"
            >
                Qui suis-je ?
            </button>
            <button
                class="nav-link"
                @click="scrollStore.handleScrollToSection(refApp, '#projects')"
            >
                Projets
            </button>
            <button
                class="nav-link"
                @click="
                    scrollStore.handleScrollToSection(refApp, '#experiences')
                "
            >
                Parcours
            </button>
            <button
                class="nav-link"
                @click="scrollStore.handleScrollToSection(refApp, '#cta')"
            >
                Contact
            </button>
        </nav>

        <AnimatePresence>
            <div
                v-if="mobileMenu"
                v-motion="{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.4, ease: 'easeOut' },
                }"
                class="bg-mobile"
                @click="mobileStore.handleMobileMenu"
            />

            <nav
                v-if="mobileMenu"
                v-motion="{
                    initial: { x: 225 },
                    animate: { x: 0 },
                    exit: { x: 225 },
                    transition: { duration: 0.4, ease: 'easeOut' },
                }"
                class="menu menu-mobile"
            >
                <button
                    class="nav-link"
                    @click="
                        scrollStore.handleScrollToSection(refApp, '#whoami')
                    "
                >
                    Qui suis-je ?
                </button>
                <button
                    class="nav-link"
                    @click="
                        scrollStore.handleScrollToSection(refApp, '#projects')
                    "
                >
                    Projets
                </button>
                <button
                    class="nav-link"
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
                    class="nav-link"
                    @click="scrollStore.handleScrollToSection(refApp, '#cta')"
                >
                    Contact
                </button>
            </nav>
        </AnimatePresence>

        <button id="btn-open" @click="mobileStore.handleMobileMenu()">
            <MenuIcon v-if="!mobileMenu" />
            <XIcon v-else />
        </button>
    </header>
</template>

<script setup lang="ts">
import { MenuIcon, XIcon } from '@lucide/vue';

const mobileStore = useMobileStore();
const { mobileMenu } = storeToRefs(mobileStore);
const scrollStore = useScrollStore();

const { refApp } = defineProps<{
    refApp: any;
}>();
</script>

<style scoped>
header {
    position: fixed;
    background-color: white;
    border-bottom: 1px solid var(--color-border);
    width: 100%;
    padding: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 5;

    .logo-btn {
        cursor: pointer;

        background: transparent;
        border: none;
        width: 32px;
        height: 32px;

        .logo-img {
            width: 32px;
            height: 32px;
        }
    }

    button.nav-link {
        color: black;
        border: none;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        transition: border-bottom 0.2s;

        &:hover {
            border-bottom: none;
        }
    }

    button#btn-open {
        align-self: center;
        border: none;
        background-color: transparent;
        width: fit-content;
        color: black;

        width: 24px;
        height: 24px;

        position: absolute;
        right: 12px;
        top: 16px;

        z-index: 2;
    }

    span {
        font-weight: bold;
        font-size: 18px;
    }

    nav.menu.menu-mobile {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 12px;
        padding: 48px 12px 12px 12px;

        background-color: white;
        width: 200px;
        height: 100svh;

        position: absolute;
        right: 0;
        top: 0;

        z-index: 2;
    }

    nav.menu.menu-desktop {
        display: none;
        flex-direction: row;
        position: static;
        gap: 32px;

        width: fit-content;
        height: fit-content;
    }

    div.bg-mobile {
        background-color: rgba(0, 0, 0, 0.4);
        width: 100svw;
        height: 100svh;

        z-index: 1;

        position: absolute;
        left: 0;
        top: 0;
    }

    @media only screen and (min-device-width: 750px) {
        padding: 12px 24px;

        .logo-btn {
            background: transparent;
            border: none;
            width: 48px;
            height: 48px;

            .logo-img {
                width: 48px;
                height: 48px;
            }
        }

        nav.menu.menu-desktop {
            display: flex;
        }

        button.nav-link {
            border-bottom: 1px solid white;

            &:hover {
                border-bottom: 1px solid black;
            }
        }

        button#btn-close {
            display: none;
        }

        button#btn-open {
            display: none;
        }

        div.bg-mobile {
            display: none;
        }
    }
}
</style>
