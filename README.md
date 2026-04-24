# hexschool-vue-composition-api-dashboard

![專案畫面](https://storage.googleapis.com/vue-course-api.appspot.com/ken100/1777038276981.png)

後台管理系統練習專案，使用 Vue 3 Composition API 開發，包含登入驗證與管理頁面常見 CRUD 流程。

Demo: [https://kenlee100.github.io/hexschool-vue-composition-api-dashboard](https://kenlee100.github.io/hexschool-vue-composition-api-dashboard)

## 功能

- 登入 / 登出
- 行程管理
- 文章管理
- 優惠券管理
- 訂單列表

## 專案技術與版號

### 核心框架

- Vue `3.2.45`
- Vue Router `4.1.6`
- Pinia `2.0.28`
- Vite `8.0.10`
- @vitejs/plugin-vue `4.0.0`

### API 與表單

- Axios `1.3.2`
- Vee-validate `4.7.4`
- @vee-validate/rules `4.7.4`
- @vee-validate/i18n `4.7.4`

### UI 與樣式

- Bootstrap `5.3.8`
- @popperjs/core `2.11.8`
- Bootstrap Icons `1.10.3`
- Vue Loading Overlay `6.0.2`
- SweetAlert2 `11.7.3`
- CKEditor5 Vue `4.0.1`
- CKEditor5 Classic Build `36.0.1`
- Sass `1.58.0`

### 開發工具

- ESLint `10.2.1`
- eslint-plugin-vue `10.9.0`
- @eslint/js `10.0.1`
- eslint-config-prettier `10.1.8`
- Prettier `2.7.1`
- unplugin-auto-import `21.0.0`
- unplugin-vue-components `32.0.0`

## 本機開發

### 1) 安裝套件

```sh
pnpm install
```

### 2) 設定環境變數

複製 `.env.example` 為 `.env` 後，填入實際值：

```sh
cp .env.example .env
```

### 3) 啟動開發環境

```sh
pnpm dev
```

開啟 `http://localhost:3001/`

## 常用指令

```sh
pnpm lint
pnpm format -- "src/**/*.{js,vue,scss}"
pnpm build
```

## 部署

部署參數由 `.env` 提供，確認 `DEPLOY_GITHUB_USER`、`DEPLOY_REPO_NAME` 後執行：

```sh
sh deploy.sh
```
