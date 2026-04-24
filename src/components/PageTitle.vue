<template>
  <div class="page-title pt-4">
    <h2 v-if="getPath.length > 0" class="fs-4 text-secondary">
      {{ getPath[0].name }}
    </h2>
    <h2 v-else class="fs-4 text-secondary">後台管理</h2>
  </div>
</template>
<script setup>
import adminNavListMenu from '@/stores/NavList.js';

defineProps({
  pageTitle: {
    type: String,
    required: true
  }
});
const route = useRoute();
const getPath = computed(() => {
  return adminNavListMenu().navList.filter((item) => item.path === route.path);
});
</script>
