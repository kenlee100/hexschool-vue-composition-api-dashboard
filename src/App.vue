<template>
  <RouterView />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
const isLoading = ref(false);
onMounted(() => {
  isLoading.value = true;
});
</script>

<style lang="scss"></style>
