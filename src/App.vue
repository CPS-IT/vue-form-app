<template>
    <HomeView />
</template>

<script setup>
import { onMounted, computed, inject, watch } from 'vue';
import { useAppStore } from '@/store/app';
import HomeView from '@/views/HomeView.vue';
import { version } from '../package.json';

const apiData = inject('api'),
    appStore = useAppStore(),
    appStoreInit = computed(() => appStore.isInit);

onMounted(() => {
    appStore.init(apiData);
});

watch(appStoreInit, () => {
    if (appStoreInit.value) {
        document
            .getElementById(`${import.meta.env.VITE_APP_ID}`)
            .classList.remove('app-loading');
    }
});

console.info(`[${import.meta.env.VITE_APP_ID}] app version ${version}`);
</script>

<style lang="scss" scoped></style>
