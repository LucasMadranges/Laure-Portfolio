<template>
    <component :is="type" :class="[`btn btn-${variant}`]" :href="href">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
interface Props {
    href?: string;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'a';
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    type: 'a',
});
</script>

<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid var(--color-primary);
    cursor: pointer;

    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 12px;

    font-size: 14px;
    font-weight: 500;

    transition:
        background-color 0.2s,
        border-color 0.2s;

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
        text-wrap: nowrap;
        height: fit-content;

        &.btn-primary {
            &:hover {
                background-color: var(--color-primary--hover);
                border: 2px solid var(--color-primary--hover);
            }
        }

        &.btn-secondary {
            &:hover {
                background-color: var(--color-tertiary--hover);
            }
        }
    }
}
</style>
