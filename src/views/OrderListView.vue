<template>
  <div class="mt-4 mb-4 p-3 bg-white shadow-sm">
    <div class="table-responsive">
      <table class="table table-striped table-hover mb-0">
        <thead class="table-light">
          <tr>
            <th>購買時間</th>
            <th>客戶資訊</th>
            <th>購買品項</th>
            <th class="text-end">應付金額</th>
            <th width="120">是否付款</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ date(item.create_at) }}</td>
            <td>
              <ul class="list-unstyled mb-0">
                <li>
                  <span>訂單編號：</span><span>{{ item.id }}</span>
                </li>
                <li>
                  <span>姓名：</span><span>{{ item.user.name }}</span>
                </li>
                <li>
                  <span>Email：</span><span>{{ item.user.email }}</span>
                </li>
              </ul>
            </td>
            <td>
              <ol class="list-group list-group-numbered mb-0">
                <li
                  class="list-group-item ps-0 border border-0 bg-transparent"
                  v-for="product in item.products"
                  :key="product.id"
                >
                  {{ product.product.title }}
                </li>
              </ol>
            </td>

            <td class="text-end">${{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <!-- 這裡的 is_paid 是true / false -->
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  :id="item.id"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="item.id"
                  ><span class="text-success" v-if="item.is_paid">已付款</span>
                  <span class="text-danger" v-else>未付款</span></label
                >
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('view', item)"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <OrderModal :ref="orderModalRef" :temp-content="temp" @update-modal="updatePaid" />
  <DelModal :ref="deleteModalRef" :item="temp" @delete-item="deleteOrder" :item-title="temp.id" />
  <PaginationComponent :pages="pagination" @change-page="getOrder" />
</template>
<script setup>
import {
  deleteOrder as deleteOrderApi,
  getOrder as getOrderApi,
  updatePaid as updatePaidApi
} from '@/apis/order';

const loadingState = useLoadingState();

const orders = ref([]);
const temp = ref({});
const pagination = ref({});

const { date } = useFilters();
const {
  // `useModal` 需要的是 ref 物件；這裡取別名為 `orderModal`，讓畫面層語意更直覺。
  modalRef: orderModal,
  openModal: openOrderModal,
  closeModal: closeOrderModal
} = useModal();
const {
  modalRef: deleteModal,
  openModal: openDeleteModal,
  closeModal: closeDeleteModal
} = useModal();

const orderModalRef = (element) => {
  // 使用函式 ref，明確把子元件實例指派到 `orderModal.value`。
  // 可避免 template ref 自動解包造成邊界狀況，導致 `openOrderModal()` 失效。
  orderModal.value = element;
};
const deleteModalRef = (element) => {
  deleteModal.value = element;
};

const getOrder = async (num = 1) => {
  loadingState.isLoading = true;
  try {
    const res = await getOrderApi(num);
    orders.value = res.orders;
    pagination.value = res.pagination;
  } finally {
    loadingState.isLoading = false;
  }
};
const deleteOrder = async (id) => {
  loadingState.isLoading = true;
  try {
    await deleteOrderApi(id, {
      successMsg: `已刪除訂單:${id}`
    });
    await getOrder(pagination.value?.current_page || 1);
    closeDeleteModal();
  } finally {
    loadingState.isLoading = false;
  }
};

const openModal = (type, item) => {
  temp.value = JSON.parse(JSON.stringify(item));
  if (type === 'view') {
    openOrderModal();
  } else if (type === 'delete') {
    openDeleteModal();
  }
};
const updatePaid = async (content) => {
  loadingState.isLoading = true;
  try {
    await updatePaidApi(content);
    await getOrder(pagination.value?.current_page || 1);
    closeOrderModal();
  } finally {
    loadingState.isLoading = false;
  }
};

getOrder();
onMounted(() => {
  loadingState.isLoading = true;
});
</script>
