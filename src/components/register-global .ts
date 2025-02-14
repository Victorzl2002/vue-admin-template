/*
 * @Author: Victorzl
 * @Date: 2025-02-14 13:09:12
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-14 13:25:47
 * @Description: 自定义插件用来注册全局组件
 */
import SvgIcon from '@/components/SvgIcon.vue'
import type { App, Component } from 'vue' // 引入 Vue 相关类型

const allGlobalComponents: Record<string, Component> = {
  SvgIcon,
}

const globalComponent = {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}

export default globalComponent
