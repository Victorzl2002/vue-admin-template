/*
 * @Author: Victorzl
 * @Date: 2025-02-15 12:13:12
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 20:08:16
 * @Description: 路由配置
 */
export const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      display: false,
    },
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout/BasicLayOut.vue'),
    meta: {
      title: '',
      display: true,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          display: true,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      display: false,
    },
  },
  {
    name: 'any',
    path: '/:parthMatch(.*)*',
    redirect: '/404',
    meta: {
      title: '任意路由',
      display: false,
    },
  },
  {
    name: 'screen',
    path: '/screen',
    meta: {
      title: '数据大屏',
      display: true,
      icon: 'Monitor',
    },
    component: () => import('@/views/screen/index.vue'),
  },
  {
    name: 'acl',
    path: '/acl',
    meta: {
      title: '权限管理',
      display: true,
      icon: 'Lock',
    },
    redirect: '/acl/user',
    component: () => import('@/layout/BasicLayOut.vue'),
    children: [
      {
        name: 'user',
        path: '/acl/user',
        meta: {
          title: '用户管理',
          display: true,
          icon: 'User',
        },
        component: () => import('@/views/acl/user/index.vue'),
      },
      {
        name: 'role',
        path: '/acl/role',
        meta: {
          title: '角色管理',
          display: true,
          icon: 'UserFilled',
        },
        component: () => import('@/views/acl/role/index.vue'),
      },
      {
        name: 'menus',
        path: '/acl/menus',
        meta: {
          title: '菜单管理',
          display: true,
          icon: 'View',
        },
        component: () => import('@/views/acl/menus/index.vue'),
      },
    ],
  },
  {
    name: 'product',
    path: '/product',
    meta: {
      title: '商品管理',
      display: true,
      icon: 'Goods',
    },
    redirect: '/product/brand',
    component: () => import('@/layout/BasicLayOut.vue'),
    children: [
      {
        name: 'brand',
        path: '/product/brand',
        meta: {
          title: '品牌管理',
          display: true,
          icon: 'ShoppingBag',
        },
        component: () => import('@/views/product/brand/index.vue'),
      },
      {
        name: 'stat',
        path: '/product/stat',
        meta: {
          title: '属性管理',
          display: true,
          icon: 'Star',
        },
        component: () => import('@/views/product/stat/index.vue'),
      },
      {
        name: 'spu',
        path: '/product/spu',
        meta: {
          title: 'spu管理',
          display: true,
          icon: 'FirstAidKit',
        },
        component: () => import('@/views/product/spu/index.vue'),
      },
      {
        name: 'sku',
        path: '/product/sku',
        meta: {
          title: 'sku管理',
          display: true,
          icon: 'FirstAidKit',
        },
        component: () => import('@/views/product/sku/index.vue'),
      },
    ],
  },
]
