<template>
  <div ref="modalEl" class="modal fade">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <Form ref="articleFormRef" v-slot="{ errors }" @submit="handleSubmit">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">
              <span v-if="isNew">新增貼文</span>
              <span v-else>編輯貼文</span>
            </h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <Field
                    type="text"
                    name="title"
                    label="標題"
                    class="form-control"
                    :class="{ 'is-invalid': errors['title'] }"
                    id="title"
                    rules="required"
                    v-model="newTempContent.title"
                    @input="startValidation"
                    @blur="startValidation"
                    placeholder="請輸入標題"
                  />
                  <ErrorMessage name="title" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="newTempContent.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                  <img class="img-fluid" :src="newTempContent.imageUrl" alt="" />
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label">作者</label>
                  <Field
                    type="text"
                    name="author"
                    label="作者"
                    class="form-control"
                    :class="{ 'is-invalid': errors['author'] }"
                    id="author"
                    rules="required"
                    v-model="newTempContent.author"
                    @input="startValidation"
                    @blur="startValidation"
                    placeholder="請輸入標題"
                  />
                  <ErrorMessage name="author" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="create_at">文章建立日期</label>
                  <input
                    type="date"
                    :min="create_at"
                    class="form-control"
                    id="create_at"
                    v-model="create_at"
                  />
                </div>
              </div>
              <div class="col-sm-8">
                <label for="tag" class="form-label">標籤</label>
                <div class="row gx-1 mb-3">
                  <div class="col-md-2 mb-1" v-for="(label, key) in newTempContent.tag" :key="key">
                    <div class="input-group input-group-sm">
                      <input
                        type="text"
                        class="form-control form-control"
                        :id="`tag-${key}`"
                        v-model="newTempContent.tag[key]"
                        placeholder="請輸入標籤"
                      />
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="newTempContent.tag.splice(key, 1)"
                      >
                        <i class="bi bi-x"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-auto mb-1"
                    v-if="
                      newTempContent.tag[newTempContent.tag.length - 1] ||
                      !newTempContent.tag.length
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      type="button"
                      @click="newTempContent.tag.push('')"
                    >
                      新增標籤
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">文章描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="newTempContent.description"
                    placeholder="請輸入文章描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">內容</label>
                  <Field
                    name="content"
                    rules="required"
                    type="hidden"
                    label="內容"
                    v-model="newTempContent.content"
                  />
                  <div
                    class="ckeditor-status-wrapper"
                    :class="{
                      'is-invalid': contentTouched && errors.content
                    }"
                  >
                    <Ckeditor
                      :editor="editor"
                      :config="editorConfig"
                      v-model="newTempContent.content"
                      @update:model-value="handleEditorChange"
                      @blur="handleEditorBlur"
                    />
                  </div>
                  <div v-if="contentTouched && errors.content" class="text-danger">
                    {{ errors.content }}
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-public"
                      v-model="newTempContent.isPublic"
                    />
                    <label class="form-check-label" for="switch-public"
                      ><span class="text-success" v-if="newTempContent.isPublic">公開</span>
                      <span class="text-danger" v-else>不公開</span></label
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
              {{ isNew ? '確認新增' : '確認修改' }}
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
const createEmptyArticle = () => ({
  title: '',
  imageUrl: '',
  author: '',
  description: '',
  content: '',
  isPublic: false,
  create_at: Math.floor(Date.now() / 1000),
  tag: []
});

const formatDateInput = (timestamp) => {
  const date = new Date(timestamp * 1000);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0];
  }
  return date.toISOString().split('T')[0];
};

const modalEl = ref(null);
const articleFormRef = ref(null);
const newTempContent = ref(createEmptyArticle());
const hasValidationStarted = ref(false);
const contentTouched = ref(false);

const create_at = ref(0);
const editor = ClassicEditor;
const editorConfig = {
  toolbar: ['heading', 'bold', 'italic', '|', 'link']
};

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

const normalizeEditorText = (html = '') =>
  html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, '')
    .trim();

const startValidation = () => {
  hasValidationStarted.value = true;
};

const handleEditorChange = (val) => {
  newTempContent.value.content = val;
  startValidation();
  articleFormRef.value?.validateField?.('content');
};

const handleEditorBlur = () => {
  startValidation();
  contentTouched.value = true;
  articleFormRef.value?.validateField?.('content');
};

const hasRequiredContent = computed(
  () =>
    Boolean(newTempContent.value.title?.trim()) &&
    Boolean(newTempContent.value.author?.trim()) &&
    Boolean(normalizeEditorText(newTempContent.value.content))
);

const isSubmitDisabled = (errors) => {
  if (!hasValidationStarted.value) return true;
  if (!hasRequiredContent.value) return true;
  return Boolean(errors.title || errors.author || errors.content);
};

watch(
  () => props.tempContent,
  (val) => {
    const source = val ? JSON.parse(JSON.stringify(val)) : {};
    newTempContent.value = {
      ...createEmptyArticle(),
      ...source,
      tag: Array.isArray(source.tag) ? source.tag : []
    };
    create_at.value = formatDateInput(newTempContent.value.create_at);
  },
  { immediate: true }
);

watch(create_at, (val) => {
  const timestamp = Math.floor(new Date(val).getTime() / 1000);
  if (!Number.isNaN(timestamp)) {
    newTempContent.value.create_at = timestamp;
  }
});

const handleSubmit = (values) => {
  emit('update-content', {
    ...newTempContent.value,
    ...values
  });
};

const { modalRef, openModal, closeModal } = useModal();

onMounted(() => {
  modalEl.value?.addEventListener('hidden.bs.modal', () => {
    // 關閉 modal 時重設暫存資料，避免殘留上一筆內容。
    newTempContent.value = createEmptyArticle();
    hasValidationStarted.value = false;
    contentTouched.value = false;
    create_at.value = formatDateInput(newTempContent.value.create_at);
    articleFormRef.value?.resetForm();
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
<style>
.ck-editor__editable_inline {
  min-height: 300px;
}

.ckeditor-status-wrapper.is-invalid .ck-editor__main .ck-editor__editable {
  border-color: var(--bs-form-invalid-border-color);
}
</style>
