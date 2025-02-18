/*
 * @Author: Victorzl
 * @Date: 2025-02-14 20:52:12
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 12:50:31
 * @Description: 用户请求接口
 */
import request from '@/utils/request'
import type { loginForm, loginResponseData } from '@/types'

enum UserApi {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginForm) =>
  request.post<loginResponseData>(UserApi.LOGIN_URL, data)

export const reqUserInfo = () => request.get(UserApi.USERINFO_URL)
