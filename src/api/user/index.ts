/*
 * @Author: Victorzl
 * @Date: 2025-02-14 20:52:12
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-14 21:19:38
 * @Description: 用户请求接口
 */
import request from '@/api/request'

enum UserApi {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '.user/info',
}

export const reqLogin = (data: object) => {
  request({
    url: UserApi.LOGIN_URL,
    method: 'post',
    data,
  })
}
