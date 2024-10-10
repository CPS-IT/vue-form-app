export default function () {
    const el = document.createElement('link');
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('type', 'text/css');
    el.setAttribute('href', import.meta.env.VITE_DEV_STYLES);
    document.getElementsByTagName('head')[0].appendChild(el);
}
