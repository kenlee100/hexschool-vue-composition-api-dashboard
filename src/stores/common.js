export const useLoadingState = defineStore('loading', () => {
  const isLoading = ref(false);
  return { isLoading };
});
