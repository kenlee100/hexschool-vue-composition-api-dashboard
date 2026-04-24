<template>
  <div ref="modalEl" class="modal fade">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <Form ref="productFormRef" v-slot="{ errors }" @submit="handleSubmit">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="isNew">新增行程</span>
              <span v-else>編輯行程</span>
            </h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="image-upload-section d-flex flex-column">
                  <div class="mb-2">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">主要圖片</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入主要圖片連結"
                        v-model="newTempContent.imageUrl"
                      />
                      <div class="input-group">
                        <input
                          type="file"
                          class="form-control"
                          name="main-file-upload"
                          @change="uploadFile('main-file')"
                          ref="mainFileRef"
                        />
                      </div>
                      <img
                        v-if="newTempContent.imageUrl"
                        class="img-fluid"
                        :src="newTempContent.imageUrl"
                        alt=""
                      />
                      <img
                        v-else
                        class="img-fluid"
                        src="https://placehold.co/640x480?text=No+Photo"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <!-- 判斷 newTempContent.imagesUrl 是一個陣列 -->
                <div
                  class="d-flex flex-column overflow-auto"
                  v-if="Array.isArray(newTempContent.imagesUrl)"
                >
                  <template v-for="(item, index) in newTempContent.imagesUrl" :key="item.id">
                    <div class="py-3 border-bottom">
                      <label class="form-label">圖片 {{ item.num }}</label>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="'請輸入圖片' + item.num + '連結'"
                          v-model="newTempContent.imagesUrl[index].imageUrl"
                        />
                        <input
                          type="file"
                          class="form-control"
                          :name="'file-upload-' + (index + 1)"
                          :ref="(el) => setRefFileEl(el, 'ref-file-' + (index + 1))"
                          @change="uploadFile('ref-file-' + (index + 1))"
                          :data-num="index"
                        />
                        <img v-if="item.imageUrl" class="img-fluid" :src="item.imageUrl" alt="" />
                        <img
                          v-else
                          class="img-fluid"
                          src="https://placehold.co/640x480?text=No+Photo"
                          alt=""
                        />
                      </div>
                      <div>
                        <button
                          class="btn btn-outline-danger btn-sm d-block w-100"
                          @click="deleteImage(item)"
                        >
                          刪除圖片 {{ item.num }}
                        </button>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="mb-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImage"
                  >
                    新增其他圖片欄位
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <Field
                    id="title"
                    name="title"
                    label="標題"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['title'] }"
                    placeholder="請輸入標題"
                    rules="required"
                    v-model="newTempContent.title"
                    @input="startValidation"
                    @blur="startValidation"
                  />
                  <ErrorMessage name="title" class="text-danger" />
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <Field
                      name="category"
                      label="分類"
                      id="category"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['category'] }"
                      placeholder="請輸入分類"
                      rules="required"
                      v-model="newTempContent.category"
                      @input="startValidation"
                      @blur="startValidation"
                    />
                    <ErrorMessage name="category" class="text-danger" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <Field
                      id="unit"
                      label="單位"
                      name="unit"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['unit'] }"
                      placeholder="請輸入單位"
                      rules="required"
                      v-model="newTempContent.unit"
                      @input="startValidation"
                      @blur="startValidation"
                    />
                    <ErrorMessage name="unit" class="text-danger" />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <Field
                      id="origin_price"
                      type="number"
                      name="origin_price"
                      label="原價"
                      min="0"
                      class="form-control"
                      :class="{ 'is-invalid': errors['origin_price'] }"
                      placeholder="請輸入原價"
                      rules="required"
                      v-model.number="newTempContent.origin_price"
                      @input="startValidation"
                      @blur="startValidation"
                    />
                    <ErrorMessage name="origin_price" class="text-danger" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <Field
                      id="price"
                      name="price"
                      label="售價"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      rules="required"
                      v-model.number="newTempContent.price"
                      :class="{ 'is-invalid': errors['price'] }"
                      @input="startValidation"
                      @blur="startValidation"
                    />
                    <ErrorMessage name="price" class="text-danger" />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <label for="description" class="form-label">行程描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入行程描述"
                    v-model="newTempContent.description"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <ckeditor
                    :editor="editor"
                    :config="editorConfig"
                    v-model="newTempContent.content"
                  ></ckeditor>
                </div>
                <div class="mb-3">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-activated"
                      :true-value="1"
                      :false-value="0"
                      v-model="newTempContent.is_enabled"
                    />
                    <label class="form-check-label" for="switch-activated"
                      ><span class="text-success" v-if="newTempContent.is_enabled">已啟用</span>
                      <span class="text-danger" v-else>未啟用</span></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="closeModal">
              取消
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitDisabled(errors)">
              {{ isNew ? '新增行程' : '修改行程' }}
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
import { component as Ckeditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { uploadImage } from '@/apis/product';

const MAIN_FILE_KEY = 'main-file';
const UPLOAD_FIELD_NAME = 'file-to-upload';

const createEmptyProduct = () => ({
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
});
const modalEl = ref(null);
const productFormRef = ref(null);
const mainFileRef = ref(null);
const refFileElMap = ref({});
const loadingState = useLoadingState();
const newTempContent = ref(createEmptyProduct());
const hasValidationStarted = ref(false);
const editor = ClassicEditor;
const editorConfig = {
  toolbar: ['heading', 'bold', 'italic', '|', 'link']
};

const props = defineProps({
  tempContent: {
    type: Object,
    default: () => ({})
  },
  // 接收外層isNew，判斷modal標題
  isNew: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update-content']);

const startValidation = () => {
  hasValidationStarted.value = true;
};

const hasValue = (value) => value !== '' && value !== null && value !== undefined;

const hasRequiredContent = computed(
  () =>
    Boolean(newTempContent.value.title?.trim()) &&
    Boolean(newTempContent.value.category?.trim()) &&
    Boolean(newTempContent.value.unit?.trim()) &&
    hasValue(newTempContent.value.origin_price) &&
    hasValue(newTempContent.value.price)
);

const isSubmitDisabled = (errors) => {
  if (!hasRequiredContent.value) return true;
  if (props.isNew && !hasValidationStarted.value) return true;
  return Boolean(
    errors.title || errors.category || errors.unit || errors.origin_price || errors.price
  );
};

const cloneProduct = (data = {}) => ({
  ...createEmptyProduct(),
  ...data,
  imagesUrl: Array.isArray(data.imagesUrl) ? data.imagesUrl.map((item) => ({ ...item })) : []
});

const buildFormValues = (data = {}) => ({
  title: data.title ?? '',
  category: data.category ?? '',
  unit: data.unit ?? '',
  origin_price:
    data.origin_price === '' || data.origin_price === null || data.origin_price === undefined
      ? ''
      : Number(data.origin_price),
  price:
    data.price === '' || data.price === null || data.price === undefined ? '' : Number(data.price)
});

const createImage = () => {
  const images = Array.isArray(newTempContent.value.imagesUrl)
    ? newTempContent.value.imagesUrl
    : [];
  const imageObj = {
    id: new Date().getTime(),
    num: images.length + 1
  };
  newTempContent.value.imagesUrl = [...images, imageObj];
};

const deleteImage = (data) => {
  newTempContent.value.imagesUrl = newTempContent.value.imagesUrl.filter(
    (item) => item.id !== data.id
  );
};

const setRefFileEl = (el, refKey) => {
  if (el) {
    refFileElMap.value[refKey] = el;
    return;
  }
  delete refFileElMap.value[refKey];
};

const getFileInput = (refKey) =>
  refKey === MAIN_FILE_KEY ? mainFileRef.value : refFileElMap.value[refKey];

const toNumberOrDefault = (value, defaultValue = 0) => {
  const num = Number(value);
  return Number.isNaN(num) ? defaultValue : num;
};

const uploadFile = async (refItem) => {
  const fileInput = getFileInput(refItem);
  if (!fileInput?.files?.[0]) return;

  loadingState.isLoading = true;
  try {
    const formData = new FormData();
    formData.append(UPLOAD_FIELD_NAME, fileInput.files[0]);
    const res = await uploadImage(formData);
    const imageUrl = res?.imageUrl || '';
    if (!imageUrl) return;

    if (refItem === MAIN_FILE_KEY) {
      newTempContent.value.imageUrl = imageUrl;
      return;
    }
    const index = Number(fileInput.dataset.num);

    if (!Number.isInteger(index) || !newTempContent.value.imagesUrl?.[index]) {
      return;
    }
    newTempContent.value.imagesUrl[index].imageUrl = imageUrl;
  } finally {
    loadingState.isLoading = false;
  }
};

const clearFileInputs = () => {
  if (mainFileRef.value) {
    mainFileRef.value.value = '';
  }
  Object.values(refFileElMap.value).forEach((inputEl) => {
    if (inputEl) {
      inputEl.value = '';
    }
  });
  refFileElMap.value = {};
};

const resetModalState = () => {
  applyFormState(createEmptyProduct());
  clearFileInputs();
};

const applyFormState = (sourceData) => {
  newTempContent.value = sourceData;
  hasValidationStarted.value = false;
  productFormRef.value?.resetForm({
    values: buildFormValues(sourceData)
  });
};

const syncFromProps = () => {
  clearFileInputs();
  applyFormState(cloneProduct(props.tempContent));
};

const handleSubmit = (values) => {
  emit('update-content', {
    ...newTempContent.value,
    ...values,
    origin_price: toNumberOrDefault(values.origin_price ?? newTempContent.value.origin_price),
    price: toNumberOrDefault(values.price ?? newTempContent.value.price)
  });
};

onMounted(() => {
  modalEl.value?.addEventListener('hidden.bs.modal', () => {
    // 關閉 modal 時重設資料與驗證狀態，避免下一次開啟殘留。
    resetModalState();
  });
  modalRef.value = new Modal(modalEl.value, {
    backdrop: 'static',
    keyboard: false
  });
});
const { modalRef, openModal, closeModal } = useModal();

const showModal = () => {
  syncFromProps();
  openModal();
};

defineExpose({
  show: showModal,
  hide: closeModal
});
</script>
