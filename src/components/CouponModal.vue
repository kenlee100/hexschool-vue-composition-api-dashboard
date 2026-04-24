<template>
  <div ref="modalEl" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <Form ref="couponFormRef" v-slot="{ errors }" @submit="handleSubmit">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="isNew">新增優惠卷</span>
              <span v-else>編輯優惠卷</span>
            </h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <Field
                type="text"
                name="title"
                label="標題"
                class="form-control"
                :class="{ 'is-invalid': errors['title'] }"
                id="title"
                rules="required"
                v-model="newTempContent.title"
                placeholder="請輸入標題"
              />
              <ErrorMessage name="title" class="text-danger" />
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <Field
                type="text"
                name="coupon_code"
                label="優惠碼"
                class="form-control"
                :class="{ 'is-invalid': errors['coupon_code'] }"
                id="coupon_code"
                rules="required"
                v-model="newTempContent.code"
                placeholder="請輸入優惠碼"
              />
              <ErrorMessage name="coupon_code" class="text-danger" />
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                :min="due_date"
                v-model="due_date"
              />
            </div>
            <div class="mb-3">
              <label for="percent">折扣百分比</label>
              <Field
                type="number"
                name="percent"
                label="折扣百分比"
                class="form-control"
                :class="{ 'is-invalid': errors['percent'] }"
                id="price"
                min="0"
                max="100"
                :rules="{
                  required: true,
                  max_value: 100,
                  regex: /^(0|[1-9][0-9]?|100)$/
                }"
                v-model.number="newTempContent.percent"
                placeholder="請輸入折扣百分比"
              />
              <ErrorMessage name="percent" class="text-danger" />
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch-coupon"
                  v-model="newTempContent.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="switch-coupon"
                  ><span class="text-success" v-if="newTempContent.is_enabled">啟用</span>
                  <span class="text-danger" v-else>未啟用</span></label
                >
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="closeModal">
              取消
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitDisabled(errors)">
              {{ isNew ? '新增優惠卷' : '更新優惠券' }}
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Modal from 'bootstrap/js/dist/modal';
import { Form, Field, ErrorMessage } from 'vee-validate';

const createEmptyCoupon = () => ({
  title: '',
  is_enabled: 0,
  percent: 100,
  code: '',
  due_date: Math.floor(Date.now() / 1000)
});

const formatDateInput = (timestamp) => {
  const date = new Date(timestamp * 1000);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0];
  }
  return date.toISOString().split('T')[0];
};

const modalEl = ref(null);
const couponFormRef = ref(null);
const newTempContent = ref(createEmptyCoupon());
const due_date = ref('');
const props = defineProps({
  tempContent: {
    type: Object,
    default: () => ({})
  },
  isNew: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update-content']);

const hasRequiredContent = computed(
  () =>
    Boolean(newTempContent.value.title?.trim()) &&
    Boolean(newTempContent.value.code?.trim()) &&
    newTempContent.value.percent !== '' &&
    newTempContent.value.percent !== null &&
    newTempContent.value.percent !== undefined &&
    Boolean(due_date.value)
);

const isSubmitDisabled = (errors) => {
  if (!hasRequiredContent.value) return true;
  return Boolean(errors.title || errors.coupon_code || errors.percent);
};

watch(
  () => props.tempContent,
  (val) => {
    const source = val ? JSON.parse(JSON.stringify(val)) : {};
    newTempContent.value = {
      ...createEmptyCoupon(),
      ...source
    };
    due_date.value = formatDateInput(newTempContent.value.due_date);
  },
  { immediate: true }
);

watch(
  () => due_date.value,
  () => {
    const timestamp = Math.floor(new Date(due_date.value).getTime() / 1000);
    if (!Number.isNaN(timestamp)) {
      newTempContent.value.due_date = timestamp;
    }
  }
);

const handleSubmit = (values) => {
  const nextPercent = Number(values.percent ?? newTempContent.value.percent);
  emit('update-content', {
    ...newTempContent.value,
    ...values,
    percent: Number.isNaN(nextPercent) ? 0 : nextPercent
  });
};

const { modalRef, openModal, closeModal } = useModal();
onMounted(() => {
  modalEl.value?.addEventListener('hidden.bs.modal', () => {
    newTempContent.value = createEmptyCoupon();
    due_date.value = formatDateInput(newTempContent.value.due_date);
    couponFormRef.value?.resetForm();
  });
  modalRef.value = new Modal(modalEl.value, {
    backdrop: 'static',
    keyboard: false
  });
});
defineExpose({
  show: openModal,
  hide: closeModal
});
</script>
