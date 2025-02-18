/*
 * @Author: Victorzl
 * @Date: 2025-02-18 12:00:01
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 12:04:15
 * @Description: 请填写简介
 */
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
