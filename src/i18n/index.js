import { createI18n } from 'vue-i18n';
import messages from './messages.js';

export default createI18n({
    legacy: false,
    locale: document.documentElement.lang.split('-')[0].toLowerCase(),
    fallbackLocale: 'de',
    messages,
});
