export const useModal = () => {
  const modalRef = ref(null);
  const openModal = () => modalRef.value?.show();

  const closeModal = () => modalRef.value?.hide();
  return {
    modalRef,
    openModal,
    closeModal
  };
};
