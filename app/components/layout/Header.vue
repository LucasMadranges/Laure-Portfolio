<template>
    <header ref="header">
        <span>Laure Everwyn</span>

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
                @click="handleMobileMenu"
            />

            <nav
                v-if="mobileMenu"
                v-motion="{
                    initial: { x: 225 },
                    animate: { x: 0 },
                    exit: { x: 225 },
                    transition: { duration: 0.4, ease: 'easeOut' },
                }"
                class="menu"
            >
                <NuxtLink class="nav-link" to="#">Qui suis-je ?</NuxtLink>
                <NuxtLink class="nav-link" to="#">Parcours</NuxtLink>
                <NuxtLink class="nav-link" to="#">Projets</NuxtLink>
                <NuxtLink class="nav-link" to="#">Contact</NuxtLink>
            </nav>
        </AnimatePresence>

        <button id="btn-open" @click="handleMobileMenu">
            <MenuIcon v-if="!mobileMenu" />
            <XIcon v-else />
        </button>
    </header>
</template>

<script setup lang="ts">
import { MenuIcon, XIcon } from '@lucide/vue';
import { useResizeObserver } from '@vueuse/core';

const mobileMenu = ref(false);
const header = useTemplateRef('header');

function handleMobileMenu() {
    mobileMenu.value = !mobileMenu.value;
    document.body.classList.contains('scroll-canceled')
        ? document.body.classList.remove('scroll-canceled')
        : document.body.classList.add('scroll-canceled');
}

useResizeObserver(header, (entries) => {
    if (entries[0]?.borderBoxSize[0]?.inlineSize == null) return;
    mobileMenu.value = entries[0]?.borderBoxSize[0]?.inlineSize >= 750;
});
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

    .nav-link {
        text-decoration: none;
        color: black;
    }

    button {
        border: none;
        background-color: transparent;
        width: fit-content;

        &#btn-open {
            position: absolute;
            right: 12px;
            top: 12px;

            z-index: 2;
        }
    }

    span {
        font-weight: bold;
        font-size: 18px;
    }

    nav.menu {
        display: flex;
        flex-direction: column;
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
        padding: 24px;

        nav.menu {
            flex-direction: row;
            position: static;
            gap: 32px;
            padding-top: 12px;

            width: fit-content;
            height: fit-content;
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
