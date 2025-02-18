/*
 * @Author: Victorzl
 * @Date: 2025-02-15 12:13:12
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-15 12:15:44
 * @Description: 路由配置
 */
export const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    name: 'any',
    path: '/:parthMatch(.*)*',
    redirect: '/404',
  },
]
