export const useMobileStore = defineStore('mobileStore', () => {
    const mobileMenu = ref(false);
    const isMobile = ref(false);

    function handleMobileMenu() {
        mobileMenu.value = !mobileMenu.value;
    }

    onMounted(() => {
        useResizeObserver(document.body, (entries) => {
            if (entries[0]?.borderBoxSize[0]?.inlineSize == null) return;
            isMobile.value = entries[0]?.borderBoxSize[0]?.inlineSize >= 750;
            mobileMenu.value = false;
        });
    });

    return {
        mobileMenu,
        isMobile,
        handleMobileMenu,
    };
});
