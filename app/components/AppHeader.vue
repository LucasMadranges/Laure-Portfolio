<script setup lang="ts">
import { MenuIcon, XIcon } from '@lucide/vue';
import { useResizeObserver } from '@vueuse/core';

const mobileMenu = ref(false);
const header = useTemplateRef('header');

function handleMobileMenu() {
    mobileMenu.value = !mobileMenu.value;
}

useResizeObserver(header, (entries) => {
    if (entries[0]?.borderBoxSize[0]?.inlineSize == null) return;
    mobileMenu.value = entries[0]?.borderBoxSize[0]?.inlineSize >= 750;
});
</script>

<template>
    <header ref="header">
        <span>Laure Everwyn</span>

        <div v-if="mobileMenu" class="bg-mobile" @click="handleMobileMenu" />

        <nav v-if="mobileMenu" class="menu">
            <button id="btn-close" class="btn-mobile" @click="handleMobileMenu">
                <XIcon />
            </button>
            <NuxtLink class="nav-link" to="#">Qui suis-je ?</NuxtLink>
            <NuxtLink class="nav-link" to="#">Parcours</NuxtLink>
            <NuxtLink class="nav-link" to="#">Projets</NuxtLink>
            <NuxtLink class="nav-link" to="#">Contact</NuxtLink>
        </nav>

        <button id="btn-open" @click="handleMobileMenu">
            <MenuIcon />
        </button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid var(--color-border);

    .nav-link {
        text-decoration: none;
        color: black;
    }

    button {
        border: none;
        background-color: transparent;
        width: fit-content;

        &#btn-close {
            align-self: flex-end;
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
        padding: 12px;

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

    @media (min-width: 750px) {
        padding: 24px;

        nav.menu {
            flex-direction: row;
            position: static;
            gap: 32px;

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
