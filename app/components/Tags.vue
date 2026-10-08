<template>
    <span>{{ label }}</span>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: 'Créative',
    },
    bgColor: {
        type: String,
        default: '#ffe4e4',
    },
});
</script>

<style scoped>
span {
    width: fit-content;
    background-color: var(--color-tags);
    padding: 4px 16px;
    border-radius: 8px;
}
</style>
