/*
 * @Author: Victorzl
 * @Date: 2025-02-18 12:49:23
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 13:00:50
 * @Description: 请填写简介
 */

export const gainTime = (): string => {
  const hours: number = new Date().getHours()
  let message: string = ''
  if (hours <= 9) {
    message = '早上'
  } else if (hours <= 12) {
    message = '中午'
  } else if (hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
