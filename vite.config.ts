/*
 * @Author: Victorzl
 * @Date: 2025-02-13 20:06:41
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 22:32:30
 * @Description: 请填写简介
 */
import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
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
export default defineConfig(({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  console.log('代理配置:', {
    target: 'http://kf.com',
    baseURL: '/dev-api',
  })
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
        enable: true,
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
    server: {
      proxy: {
        '/dev-api': {
          target: 'http://localhost:5174',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
          configure: (proxy, options) => {
            console.log('@', proxy, options)
          },
        },
      },
    },
  }
})
