<template>
  <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router';
import { useLoading } from 'vue-loading-overlay';
const loadingState = useLoadingState();
const loading = useLoading();
let loader = null;

watch(
  () => loadingState.isLoading,
  (val) => {
    if (val) {
      loader = loading.show();
    } else {
      loader?.hide();
    }
  }
);
</script>
