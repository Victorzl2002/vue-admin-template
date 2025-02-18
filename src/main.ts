/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-15 16:11:14
 * @Description: 请填写简介
 */

//注册App
import { createApp } from 'vue'
import App from './App.vue'

//引入pinia
import pinia from './stores/'

//引入路由
import router from './router'

//ElementPlus引入和国际化
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//svg插件配置且注册全局svg组件
import 'virtual:svg-icons-register'

//引入自定义插件来注册整个全局组件
import globalComponent from '@/components/register-global '

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.use(globalComponent)

//引入全局样式
import '@/style/index.scss'

//挂载app应用
app.mount('#app')
