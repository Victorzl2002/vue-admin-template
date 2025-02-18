/*
 * @Author: Victorzl
 * @Date: 2025-02-15 11:20:03
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 11:55:31
 * @Description: 请填写简介
 */

//登录接口携带参数ts类型
export interface loginForm {
  username: string
  password: string
}

export interface dataType {
  token?: string
  message?: string
}

export interface loginResponseData {
  code: number
  data: dataType
}

export interface UserState {
  token: string | null
}
