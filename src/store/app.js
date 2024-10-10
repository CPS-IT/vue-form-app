import { defineStore } from 'pinia';

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        isInit: false,
        config: {
            breakpoints: {
                mobile: 0,
                xs: 500,
                sm: 700,
                md: 900,
                lg: 1100,
                xl: 1300,
                xxl: 1700,
            },
        },
        loading: false,
        errors: [],
    }),
    getters: {},
    actions: {
        init(payload = {}) {
            this.config = Object.assign(this.config, payload);
            this.isInit = true;
        },
    },
});
