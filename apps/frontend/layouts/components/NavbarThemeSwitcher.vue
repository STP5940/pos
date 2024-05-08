<script setup lang="ts">
import type { ThemeSwitcherTheme } from "@layouts/types";

const themes: ThemeSwitcherTheme[] = [
  {
    name: "system",
    icon: "tabler-device-desktop-analytics",
  },
  {
    name: "light",
    icon: "tabler-sun-high",
  },
  {
    name: "dark",
    icon: "tabler-moon-stars",
  },
];
</script>

<template>
  <!-- <ColorScheme>
    <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
  </ColorScheme> -->
  <ThemeSwitcher :themes="themes" />
</template>
