<!--
 * @Author: Victorzl
 * @Date: 2025-02-20 15:20:20
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 13:44:09
 * @Description: 请填写简介
-->

<template>
  <el-button :icon="Refresh" circle @click="updateRefresh" />
  <el-button :icon="FullScreen" circle @click="fullScreen" />
  <el-button :icon="Setting" circle />
  <el-avatar style="width: 50px; height: 50px; margin: 0px 10px" :src="userStore.avatar" />
  <el-dropdown>
    <span class="el-dropdown-link">
      <span>{{ userStore.username }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="exitLogin">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="UserSettings">
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/stores/setting'
import useUserStore from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()
const LayOutSettingStore = useLayOutSettingStore()
function updateRefresh() {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}
//全屏按钮
const fullScreen = () => {
  const full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const exitLogin = () => {
  userStore.userLogout()
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  })
}
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
