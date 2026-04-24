<template>
  <div ref="modalEl" class="modal fade">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>訂單細節</span>
          </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <h3>客戶資料</h3>
              <table class="table table-striped table-hover mb-0">
                <tbody v-if="newTempContent.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ newTempContent.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ newTempContent.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ newTempContent.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ newTempContent.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>訂單細節</h3>
              <table class="table table-striped table-hover mb-0">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ newTempContent.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(newTempContent.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="newTempContent.paid_date">
                        {{ date(newTempContent.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="newTempContent.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>${{ currency(newTempContent.total) }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex justify-content-end py-3">
                <div class="form-check form-switch">
                  <input
                    :id="paidSwitchId"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    v-model="newTempContent.is_paid"
                  />
                  <label class="form-check-label" :for="paidSwitchId"
                    ><span class="text-success" v-if="newTempContent.is_paid">已付款</span>
                    <span class="text-danger" v-else>未付款</span></label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in newTempContent.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">${{ currency(item.final_total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">取消</button>
          <button type="button" class="btn btn-primary" @click="handleConfirm">修改付款狀態</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Modal from 'bootstrap/js/dist/modal';

const { date, currency } = useFilters();
const modalEl = ref(null);
const newTempContent = ref({});

const props = defineProps({
  tempContent: {
    type: Object,
    default: () => ({})
  }
});

const paidSwitchId = computed(() => `switch-paid-${newTempContent.value?.id || 'modal'}`);

watch(
  () => props.tempContent,
  (val) => {
    newTempContent.value = val ? JSON.parse(JSON.stringify(val)) : {};
  },
  { immediate: true }
);

const emit = defineEmits(['update-modal']);

const handleConfirm = () => {
  emit('update-modal', newTempContent.value);
};

const { modalRef, openModal, closeModal } = useModal();
onMounted(() => {
  modalEl.value?.addEventListener('hidden.bs.modal', () => {
    // 關閉modal時將內部暫存資料清空
    newTempContent.value = {};
  });
  // 將 Bootstrap modal 實例存入 `modalRef`，讓共用的 open/close 方法可直接呼叫 show/hide。
  modalRef.value = new Modal(modalEl.value, {
    backdrop: 'static',
    keyboard: false
  });
});
defineExpose({
  // 讓父層（`AdminOrderListView`）可透過元件 ref 與 expose 出來的方法控制開關。
  show: openModal,
  hide: closeModal
});
</script>
