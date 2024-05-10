<script setup lang="ts">
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import { hexToRgb } from "@layouts/utils";

useSeoMeta({
  ogImage: "/cat.webp",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
});

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();

const configStore = useConfigStore();
const { isMobile } = useDevice();
if (isMobile) configStore.appContentLayoutNav = "vertical";
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <VitePwaManifest />
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <NuxtLayout>
        <NuxtPage />
        <NuxtLoadingIndicator color="rgb(var(--v-theme-primary))" />
      </NuxtLayout>

      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>
