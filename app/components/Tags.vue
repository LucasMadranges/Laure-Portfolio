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
    background-color: v-bind(bgColor);
    padding: 4px 16px;
    border-radius: 8px;
    font-size: 14px;

    @media only screen and (min-width: 750px) {
        font-size: 16px;
    }
}
</style>
