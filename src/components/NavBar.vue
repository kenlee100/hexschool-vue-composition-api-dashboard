<template>
  <div
    class="sidebar position-fixed start-0 top-0 bottom-0 z-10 d-flex flex-column h-100 overflow-x-hidden overflow-y-auto"
  >
    <div class="brand-section flex-shrink-0 p-4">
      <router-link
        class="flex w-full d-block h-20 justify-content-center align-items-center text-decoration-none text-white"
        to="/admin"
        >{{ appName }} 後台管理</router-link
      >
    </div>
    <ul class="sidebar-menu list-unstyled mb-0">
      <li class="" v-for="item in navList" :key="item.path">
        <router-link
          class="d-block py-3 px-4 fs-6 text-decoration-none text-white"
          :to="item.path"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import adminNavListMenu from '@/stores/NavList.js';
import { appName } from '@/constants/appConfig';

const navList = adminNavListMenu().navList;
</script>
