<script setup lang="ts">
// https://flowbite.com/docs/components/buttons/

defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "button" | "submit" | "reset" | undefined,
    default: "button",
  },
});
</script>

<template>
  <VBtn size="small" :type="type">
    <VIcon start icon="tabler-mail-filled" />
    {{ buttonText }}
  </VBtn>
</template>
