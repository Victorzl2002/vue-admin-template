/*
 * @Author: Victorzl
 * @Date: 2025-02-14 16:22:19
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-14 20:50:55
 * @Descriptiog('有接口请求了')
on: axios二次封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000, //超时时间设置
})
request.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，经常给服务端携带公共参数
  //
  // 检查请求头中的auth字段
  // if (config.headers.auth !== 'zl') {
  //   // 如果auth不等于'z1'，则弹出错误信息
  //   ElMessage({
  //     type: 'error',
  //     message: '权限不足，无法请求数据',
  //   })
  //   // 返回一个被拒绝的Promise，阻止继续请求
  //   return Promise.reject('权限不足，无法请求数据')
  // }
  return config
})
request.interceptors.response.use(
  (response) => {
    /**
     * 成功回调，简化数据
     */
    ElMessage({
      type: 'success',
      message: '接口请求成功',
    })
    return response.data
  },
  (error) => {
    //失败回调：处理http网络请求错误
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token已过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现错误'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
export default request
