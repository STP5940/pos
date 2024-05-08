<script setup lang="ts">
import type { ThemeSwitcherTheme } from "@layouts/types";

const themes: ThemeSwitcherTheme[] = [
  {
    name: "system",
    icon: "tabler-device-laptop",
  },
  {
    name: "light",
    icon: "tabler-sun-high",
  },
  {
    name: "dark",
    icon: "tabler-moon",
  },
];
</script>

<template>
  <ColorScheme>
    <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
  </ColorScheme>
  <ThemeSwitcher :themes="themes" />
</template>
