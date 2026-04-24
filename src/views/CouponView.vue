<template>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal('new')">
        建立新的優惠券
      </button>
    </div>
    <div class="mt-4 mb-4 p-3 bg-white shadow-sm">
      <div class="table-responsive">
        <table class="table table-striped table-hover mb-0">
          <thead class="table-light">
            <tr>
              <th>名稱</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th style="width: 100px">是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in coupons" :key="key">
              <td>{{ item.title }}</td>
              <td>{{ item.percent }}%</td>
              <td>{{ date(item.due_date) }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    :id="item.id"
                    v-model="item.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    @change="updateCoupon(item)"
                  />
                  <label class="form-check-label" :for="item.id"
                    ><span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-danger" v-else>未啟用</span></label
                  >
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                    編輯
                  </button>
                  <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <CouponModal
      :temp-content="temp"
      :is-new="isNew"
      :ref="couponModalRef"
      @update-content="updateCoupon"
    />
    <DelModal :ref="deleteModalRef" :item="temp" @delete-item="deleteItem" />
    <PaginationComponent :pages="pagination" @change-page="getCoupons" />
  </div>
</template>
<script setup>
import {
  getCoupons as getCouponsApi,
  deleteItem as deleteCouponApi,
  updateCouponItem as updateCouponApi
} from '@/apis/coupon';
const loadingState = useLoadingState();
const { date } = useFilters();

const isNew = ref(false);
const tempInit = {
  title: '',
  is_enabled: 0,
  percent: 100,
  code: ''
};
const temp = ref({ ...tempInit });
const coupons = ref([]);
const pagination = ref({});

const {
  // `useModal` 需要的是 ref 物件；這裡取別名為 `orderModal`，讓畫面層語意更直覺。
  modalRef: couponModal,
  openModal: openCouponModal,
  closeModal: closeCouponModal
} = useModal();
const {
  modalRef: deleteModal,
  openModal: openDeleteModal,
  closeModal: closeDeleteModal
} = useModal();

const couponModalRef = (element) => {
  couponModal.value = element;
};
const deleteModalRef = (element) => {
  deleteModal.value = element;
};

const getCoupons = async (num = 1) => {
  loadingState.isLoading = true;
  try {
    const res = await getCouponsApi(num);
    coupons.value = res.coupons;
    pagination.value = res.pagination;
  } finally {
    loadingState.isLoading = false;
  }
};
const updateCoupon = async (content) => {
  loadingState.isLoading = true;
  const normalizedPercent = Number(content.percent);
  const payload = {
    ...content,
    percent: Number.isNaN(normalizedPercent) ? 0 : normalizedPercent
  };
  let url = `/admin/coupon`;
  let method = 'post';
  // // // 判斷 isNew 是否為 新增
  if (!isNew.value) {
    url = `/admin/coupon/${payload.id}`;
    method = 'put';
  }

  try {
    await updateCouponApi(
      method,
      url,
      {
        data: payload
      },
      {
        successMsg: isNew.value ? '已新增優惠券' : '已更新優惠券'
      }
    );
    closeCouponModal();
    await getCoupons(pagination.value?.current_page || 1);
    isNew.value = false;
  } finally {
    loadingState.isLoading = false;
  }
};
const deleteItem = async (id) => {
  loadingState.isLoading = true;
  try {
    await deleteCouponApi(id, {
      successMsg: `已刪除優惠券:${temp.value.title}`
    });
    await getCoupons(pagination.value?.current_page || 1);
    closeDeleteModal();
  } finally {
    loadingState.isLoading = false;
  }
};
const openModal = (openMethod, item) => {
  if (openMethod === 'new') {
    isNew.value = true;
    openCouponModal();

    temp.value = {
      ...tempInit,
      due_date: new Date().getTime() / 1000
    };
  } else if (openMethod === 'edit') {
    isNew.value = false;
    temp.value = {
      ...tempInit,
      ...item
    };

    openCouponModal();
  } else if (openMethod === 'delete') {
    temp.value = {
      ...tempInit,
      ...item
    };
    openDeleteModal();
  }
};

onMounted(() => {
  loadingState.isLoading = true;
  getCoupons();
});
</script>
