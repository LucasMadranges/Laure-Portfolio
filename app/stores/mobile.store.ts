export const useMobileStore = defineStore('mobileStore', () => {
    const mobileMenu = ref(false);
    const isMobile = ref(false);

    function handleMobileMenu() {
        mobileMenu.value = !mobileMenu.value;
    }

    return {
        mobileMenu,
        isMobile,
        handleMobileMenu,
    };
});
