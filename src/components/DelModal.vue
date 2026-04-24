<template>
  <div ref="modalEl" class="modal fade">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ displayTitle }}</span>
          </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ displayTitle }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">取消</button>
          <button type="button" class="btn btn-danger" @click="handleDelete">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Modal from 'bootstrap/js/dist/modal';
const modalEl = ref(null);
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  itemTitle: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['delete-item']);
const displayTitle = computed(() => props.item?.title || props.itemTitle || props.item?.id || '-');
const handleDelete = () => emit('delete-item', props.item?.id);

const { modalRef, openModal, closeModal } = useModal();
onMounted(() => {
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
