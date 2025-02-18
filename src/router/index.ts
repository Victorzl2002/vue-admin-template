/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-15 12:32:57
 * @Description: 请填写简介
 */
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
