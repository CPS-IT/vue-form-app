import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';
import i18n from './i18n';

const appID = import.meta.env.VITE_APP_ID;

// Load styles in development mode
(async () => {
    if (
        import.meta.env.MODE == 'development' &&
        import.meta.env.VITE_DEV_STYLES
    ) {
        const { default: styles } = await import('@/composables/useDevStyles');
        styles();
    }
})();

// Add loader class to app container
document.getElementById(`${appID}`).classList.add('app-loading');

// Get dataset from app container
const dataset = Object.assign({}, document.getElementById(`${appID}`).dataset);

/* eslint-disable */
const { ...apiData } = dataset;
/* eslint-enable */

const app = createApp(App);

// Directives

// Provide Api
app.provide('api', apiData);

// Use Pinia Store
app.use(createPinia());

// Use Axios
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

// Use DOM Purify
app.use(VueDOMPurifyHTML);

// Use i18n
app.use(i18n);

app.mount(`#${appID}`);
