import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('@/views/AdminLayout.vue'),
    // 巢狀路由
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('@/views/ProductListView.vue'),
        meta: {
          showInNav: true,
          navName: '行程管理'
        }
      },
      {
        path: 'article',
        name: 'AdminArticle',
        component: () => import('@/views/ArticleView.vue'),
        meta: {
          showInNav: true,
          navName: '文章管理'
        }
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/CouponView.vue'),
        meta: {
          showInNav: true,
          navName: '優惠券管理'
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/OrderListView.vue'),
        meta: {
          showInNav: true,
          navName: '訂單列表'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404View.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
});

export default router;
