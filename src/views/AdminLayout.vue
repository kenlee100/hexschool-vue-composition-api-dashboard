<template>
  <div class="layout-content d-flex flex-column h-100">
    <NavBar></NavBar>
    <section class="data-section flex-grow-1 pb-3">
      <HeaderBar :logout="logout" />
      <div class="container-fluid">
        <PageTitle page-title="test" />
        <RouterView />
      </div>
    </section>
  </div>
</template>
<script setup>
import toast from '@/utils/toast';
import { check, logout as logoutApi } from '@/apis/login';
import { useLoadingState } from '@/stores/common.js';
import { clearAuthToken, getAuthToken } from '@/utils/authToken';

const router = useRouter();
const loadingState = useLoadingState();

const checkLogin = async () => {
  loadingState.isLoading = true;
  const token = getAuthToken();
  if (!token) {
    router.push('/');
    toast.fire({
      icon: 'error',
      title: `請先登入`
    });
    loadingState.isLoading = false;
    return;
  }
  try {
    await check();
  } catch (error) {
    router.push('/');
  } finally {
    loadingState.isLoading = false;
  }
};

const logout = async () => {
  loadingState.isLoading = true;
  try {
    await logoutApi();
    clearAuthToken();
    router.push('/');
  } finally {
    loadingState.isLoading = false;
  }
};

checkLogin();
</script>

<style lang="scss">
.swal2-container {
  top: 84px !important;
  z-index: 2001;
}

.swal2-actions {
  width: 100%;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
}

.swal2-confirm,
.swal2-cancel {
  flex: 1;
}

.vl-overlay.vl-full-page {
  z-index: 2000;
}
</style>
