/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-14 16:10:06
 * @Description: 请填写简介
 */
import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
//svg图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
//setup-name扩展
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
//mock数据
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      vueSetupExtend(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/style/variable.scss" as *;`,
        },
      },
    },
  }
})
