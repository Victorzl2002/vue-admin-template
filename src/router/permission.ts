/*
 * @Author: Victorzl
 * @Date: 2025-02-22 14:07:18
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 20:06:54
 * @Description: 请填写简介
 */
import router from '@/router/index'

//进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: false })

//引入pina
import pinia from '@/stores'

//引入用户仓库
import useUserStore from '@/stores/user'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

const userStore = useUserStore(pinia)

const { username } = storeToRefs(userStore)
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  //打开进度条
  nprogress.start()
  const isLogin = userStore.token
  if (isLogin) {
    if (to.path == '/login') {
      next('/ ')
    } else {
      //登录成功访问其他路由
      if (username.value) {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          await userStore.userLogout()
          ElMessage({
            type: 'error',
            message: 'token失效',
          })
          next({
            path: '/login',
            query: { redirect: to.path },
          })
        }
      } else {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          userStore.userLogout()
          next({
            path: '/login',
            query: { redirect: to.path },
          })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.path },
      })
    }
  }
})

//全局后置守卫
router.afterEach(() => {
  nprogress.done()
})
