/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 19:55:22
 * @Description: 创建用户相关的小仓库
 */
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { loginForm, loginResponseData } from '@/types/'
import type { UserState } from '@/types'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/localStore'
import { ElMessage } from 'element-plus'

const useUserStore = defineStore('User', {
  //存储数据的地方
  state(): UserState {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      username: '',
      avatar: '',
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
    //获取用户信息
    async getUserInfo() {
      try {
        const res = await reqUserInfo()
        if (res.code === 200) {
          this.username = res.data.checkUser.username
          this.avatar = res.data.checkUser.avatar
          return res.data
        } else {
          throw new Error('获取用户信息失败')
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    //退出登录清空
    userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})
export default useUserStore
