<template>Welcome</template>

<script setup>
const loadingState = useLoadingState();

onMounted(() => {
  loadingState.isLoading = true;
  setTimeout(() => {
    loadingState.isLoading = false;
  }, 300);
});
</script>
