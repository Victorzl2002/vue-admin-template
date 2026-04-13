/*
 * @Author: Victorzl
 * @Date: 2025-02-21 14:11:44
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 20:37:30
 * @Description: 请填写简介
 */
import { defineStore } from 'pinia'
import type { SettingState } from '@/types/index'

const useLayOutSettingStore = defineStore('SettingStore', {
  state(): SettingState {
    return {
      fold: false,
      refresh: false,
    }
  },
})
export default useLayOutSettingStore
