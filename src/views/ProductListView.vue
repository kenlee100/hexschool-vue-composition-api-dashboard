<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="openModal('new')">建立新的行程</button>
  </div>
  <div class="mt-4 mb-4 p-3 bg-white shadow-sm">
    <div class="table-responsive">
      <table class="table table-striped table-hover mb-0">
        <thead class="table-light">
          <tr>
            <th width="120">分類</th>
            <th>行程名稱</th>
            <th width="120" class="text-end">原價</th>
            <th width="120" class="text-end">售價</th>
            <th width="120">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>
              <p class="mb-0 line-clamp-2">{{ item.title }}</p>
            </td>
            <td class="text-end">{{ item.origin_price }}</td>
            <td class="text-end">{{ item.price }}</td>
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
                  @change="updateProduct(item)"
                />
                <label class="form-check-label" :for="item.id"
                  ><span class="text-success" v-if="item.is_enabled">啟用</span>
                  <span class="text-danger" v-else>未啟用</span></label
                >
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', item)"
                >
                  編輯
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
  <ProductModal
    :ref="productModalRef"
    :temp-content="temp"
    :is-new="isNew"
    @update-content="updateProduct"
  />
  <DelModal :ref="deleteModalRef" :item="temp" @delete-item="deleteItem" />
  <PaginationComponent :pages="pagination" @change-page="getProducts" />
</template>
<script setup>
import {
  getProducts as getProductsApi,
  deleteItem as deleteProductApi,
  updateProduct as updateProductApi
} from '@/apis/product';

const products = ref([]);
const tempInit = {
  category: '',
  content: '',
  description: '',
  id: '',
  imageUrl: '',
  imagesUrl: [],
  origin_price: 0,
  price: 0,
  title: '',
  unit: '',
  num: 0
};

const createTempProduct = (item = {}) => ({
  ...tempInit,
  ...item,
  imagesUrl: Array.isArray(item.imagesUrl) ? item.imagesUrl.map((image) => ({ ...image })) : []
});

const toNumberOrDefault = (value, defaultValue = 0) => {
  const num = Number(value);
  return Number.isNaN(num) ? defaultValue : num;
};

const temp = ref({ ...tempInit });
const pagination = ref({});
const isNew = ref(false);
const loadingState = useLoadingState();

const {
  modalRef: productModal,
  openModal: openProductModal,
  closeModal: closeProductModal
} = useModal();
const {
  modalRef: deleteModal,
  openModal: openDeleteModal,
  closeModal: closeDeleteModal
} = useModal();

const productModalRef = (element) => {
  productModal.value = element;
};

const deleteModalRef = (element) => {
  deleteModal.value = element;
};

const getProducts = async (num = 1) => {
  loadingState.isLoading = true;
  try {
    const res = await getProductsApi(num);
    products.value = res.products;
    pagination.value = res.pagination;
  } finally {
    loadingState.isLoading = false;
  }
};
const openModal = async (openMethod, item) => {
  if (openMethod === 'new') {
    isNew.value = true;
    temp.value = createTempProduct();
    await nextTick();
    openProductModal();
    return;
  }

  if (openMethod === 'edit') {
    isNew.value = false;
    temp.value = createTempProduct(item);
    await nextTick();
    openProductModal();
    return;
  }

  if (openMethod === 'delete') {
    temp.value = createTempProduct(item);
    await nextTick();
    openDeleteModal();
  }
};
const deleteItem = async (id) => {
  loadingState.isLoading = true;
  try {
    await deleteProductApi(id, {
      successMsg: `已刪除行程:${temp.value.title}`
    });
    closeDeleteModal();
    await getProducts(pagination.value?.current_page || 1);
  } finally {
    loadingState.isLoading = false;
  }
};
const updateProduct = async (content) => {
  loadingState.isLoading = true;

  const isCreate = isNew.value;
  const method = isCreate ? 'post' : 'put';
  const url = isCreate ? `/admin/product` : `/admin/product/${content.id}`;
  const payload = {
    ...content,
    origin_price: toNumberOrDefault(content.origin_price),
    price: toNumberOrDefault(content.price)
  };

  try {
    await updateProductApi(
      method,
      url,
      {
        data: payload
      },
      {
        successMsg: isCreate ? '已新增行程' : '已更新行程'
      }
    );
    await getProducts(pagination.value?.current_page || 1);
    closeProductModal();
    isNew.value = false;
  } finally {
    loadingState.isLoading = false;
  }
};

getProducts();
</script>
