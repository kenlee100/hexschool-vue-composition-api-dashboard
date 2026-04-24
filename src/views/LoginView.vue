<template>
  <div class="w-100 h-100 bg-light">
    <div class="container d-flex flex-column h-100">
      <div class="overflow-auto row align-items-center h-100">
        <div class="col-lg-6 mx-auto">
          <div class="p-4 bg-white">
            <div class="position-relative mt-n4">
              <h1 class="text-center">{{ appName }}</h1>
            </div>
            <div class="row justify-content-center">
              <h3 class="mb-3 font-weight-normal text-center">後台管理</h3>
              <form id="form" class="form-signin">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                    required
                    autofocus
                    v-model="loginData.username"
                  />
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    v-model="loginData.password"
                  />
                  <label for="password">Password</label>
                </div>
                <button
                  class="btn btn-lg btn-primary w-100 mt-3"
                  type="submit"
                  @click.prevent="login"
                >
                  登入
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { login as loginApi } from '@/apis/login.js';
import { setAuthToken } from '@/utils/authToken';
import { appName } from '@/constants/appConfig';

const loginData = reactive({
  username: '',
  password: ''
});

const loadingState = useLoadingState();

const router = useRouter();
const login = async () => {
  loadingState.isLoading = true;
  try {
    const res = await loginApi(loginData);
    const { token, expired } = res;
    setAuthToken(token, expired);
    router.push('/admin');
  } finally {
    loadingState.isLoading = false;
  }
};
</script>
