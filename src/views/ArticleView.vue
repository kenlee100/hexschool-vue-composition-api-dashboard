<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary" type="button" @click="openModal('new')">建立新的文章</button>
  </div>
  <div class="mt-4 mb-4 p-3 bg-white shadow-sm">
    <div class="table-responsive">
      <table class="table table-striped table-hover mb-0">
        <thead class="table-light">
          <tr>
            <th style="width: 200px">標題</th>
            <th style="width: 100px">作者</th>
            <th style="width: 200px">描述</th>
            <th style="width: 100px">建立時間</th>
            <th style="width: 100px">是否公開</th>
            <th style="width: 120px">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in articles" :key="item.id">
            <td>
              <p class="mb-0 line-clamp-2">{{ item.title }}</p>
            </td>
            <td>{{ item.author }}</td>
            <td>
              <p class="mb-0 line-clamp-2">{{ item.description }}</p>
            </td>
            <td>{{ date(item.create_at) }}</td>
            <td>
              <!-- 要更新狀態，需取得單一商品，才取的到content內容。要打article/id api -->
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  :id="item.id"
                  v-model="item.isPublic"
                  @change="switchUpdate(item)"
                />
                <label class="form-check-label" :for="item.id"
                  ><span class="text-success" v-if="item.isPublic">公開</span>
                  <span class="text-danger" v-else>不公開</span></label
                >
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="getArticleItem(item.id)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
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
  <ArticleModal
    :ref="articleModalRef"
    :temp-content="temp"
    :is-new="isNew"
    @update-content="updateArticle"
  />
  <DelModal :ref="deleteModalRef" :item="temp" @delete-item="deleteItem" />
  <PaginationComponent :pages="pagination" @change-page="getArticles" />
</template>
<script setup>
import {
  getArticles as getArticlesApi,
  getArticleItem as getArticleItemApi,
  updateArticleItem as updateArticleApi,
  deleteArticleItem as deleteArticleApi
} from '@/apis/article';

const loadingState = useLoadingState();
const { date } = useFilters();
const articles = ref([]);
const isNew = ref(false);
const pagination = ref({});

const tempInit = {
  isPublic: false,
  create_at: new Date().getTime() / 1000,
  tag: []
};
const temp = ref({ ...tempInit });

const getArticles = async (num = 1) => {
  loadingState.isLoading = true;
  try {
    const res = await getArticlesApi(num);
    articles.value = res.articles;
    pagination.value = res.pagination;
  } finally {
    loadingState.isLoading = false;
  }
};

getArticles();

const {
  modalRef: articleModal,
  openModal: openArticleModal,
  closeModal: closeArticleModal
} = useModal();
const {
  modalRef: deleteModal,
  openModal: openDeleteModal,
  closeModal: closeDeleteModal
} = useModal();

const articleModalRef = (element) => {
  articleModal.value = element;
};

const deleteModalRef = (element) => {
  deleteModal.value = element;
};

const openModal = (openMethod, item) => {
  if (openMethod === 'new') {
    isNew.value = true;
    openArticleModal();

    temp.value = { ...tempInit };
  } else if (openMethod === 'edit') {
    isNew.value = false;
    temp.value = JSON.parse(JSON.stringify(item));
    openArticleModal();
  } else if (openMethod === 'delete') {
    temp.value = JSON.parse(JSON.stringify(item));
    openDeleteModal();
  }
};
const updateArticle = async (content) => {
  loadingState.isLoading = true;
  let url = `admin/article`;
  let method = 'post';
  // // // 判斷 isNew 是否為 新增
  if (!isNew.value) {
    url = `admin/article/${content.id}`;
    method = 'put';
  }
  try {
    await updateArticleApi(
      method,
      url,
      {
        data: content
      },
      {
        successMsg: isNew.value ? '已新增文章' : '已更新文章'
      }
    );
    await getArticles(pagination.value?.current_page || 1);
    closeArticleModal();
    isNew.value = false;
  } finally {
    loadingState.isLoading = false;
  }
};
const deleteItem = async (id) => {
  loadingState.isLoading = true;
  try {
    await deleteArticleApi(id, {
      successMsg: `已刪除文章:${temp.value.title}`
    });
    await getArticles(pagination.value?.current_page || 1);
    closeDeleteModal();
  } finally {
    loadingState.isLoading = false;
  }
};
const getArticleItem = async (id) => {
  loadingState.isLoading = true;
  try {
    const res = await getArticleItemApi(id);
    openModal('edit', res.article);
  } finally {
    loadingState.isLoading = false;
  }
};

const switchUpdate = async (content) => {
  loadingState.isLoading = true;
  try {
    const articleItem = await getArticleItemApi(content.id);
    const updateContent = {
      ...articleItem.article,
      isPublic: content.isPublic
    };
    await updateArticle(updateContent);
  } finally {
    loadingState.isLoading = false;
  }
};
</script>
