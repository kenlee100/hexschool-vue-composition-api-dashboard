import { routes } from '@/router';

export default defineStore('adminNavListMenu', () => {
  const adminRoute = routes.find((route) => route.path === '/admin');
  const navList = computed(() =>
    (adminRoute?.children ?? [])
      .filter((route) => route.meta?.showInNav)
      .map((route) => ({
        path: `/admin/${route.path}`,
        name: route.meta.navName
      }))
  );

  return {
    navList
  };
});
