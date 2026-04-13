<!--
 * @Author: Victorzl
 * @Date: 2025-02-20 15:16:53
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 20:05:18
 * @Description: 请填写简介
-->

<template>
  <el-icon @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb class="breadcrumb" separator=">">
    <el-breadcrumb-item
      v-for="(breadTip, index) in $route.matched"
      :key="index"
      :to="{ path: `${breadTip.path}` }"
      v-show="breadTip.meta.title"
    >
      <el-icon style="vertical-align: middle; margin-right: 5px">
        <component :is="breadTip.meta.icon"></component>
      </el-icon>
      <span>{{ breadTip.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts" name="BreadCrub">
import { useRoute } from 'vue-router'

import useLayOutSettingStore from '@/stores/setting'
const $route = useRoute()

//控制切换图标
const LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  margin-left: 20px;
}
</style>
