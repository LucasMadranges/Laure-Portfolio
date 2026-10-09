<template>
    <NuxtLink :class="[`btn btn-${variant}`]" :to="to">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to: string;
    variant?: 'primary' | 'secondary';
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
});
</script>

<style scoped>
.btn {
    display: inline-block;
    border: 2px solid var(--color-primary);

    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 12px;

    font-size: 14px;
    font-weight: 500;

    &.btn-primary {
        background-color: var(--color-primary);
        color: white;
    }

    &.btn-secondary {
        background-color: white;
        color: var(--color-primary);
    }

    @media only screen and (min-device-width: 750px) {
        width: fit-content;

        font-size: 16px;
    }
}
</style>
