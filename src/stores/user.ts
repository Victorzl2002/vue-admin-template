/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 12:50:12
 * @Description: 创建用户相关的小仓库
 */
import { defineStore } from 'pinia'

import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/types/'
import type { UserState } from '@/types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/localStore'
const useUserStore = defineStore('User', {
  //存储数据的地方
  state(): UserState {
    return {
      token: GET_TOKEN(), //用户唯一标识token
    }
  },
  //异步｜逻辑
  actions: {
    //用户登录
    async userLogin(loginData: loginForm) {
      const result: loginResponseData = await reqLogin(loginData)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'login success'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
