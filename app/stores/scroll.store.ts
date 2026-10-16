import { easeInOut } from 'motion-v';

export const useScrollStore = defineStore('scrollStore', () => {
    const mobileStore = useMobileStore();

    function handleScrollToSection(
        refApp: any, // TODO
        id: string
    ) {
        const offsetVal = mobileStore.isMobile ? -90 : -60;

        mobileStore.mobileMenu = false;

        refApp.lenis.scrollTo(id, {
            offset: offsetVal,
            duration: 0.8,
            easing: easeInOut,
        });
    }

    return {
        handleScrollToSection,
    };
});
