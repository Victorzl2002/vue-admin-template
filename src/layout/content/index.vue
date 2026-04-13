<!--
 * @Author: Victorzl
 * @Date: 2025-02-21 20:23:08
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 20:39:47
 * @Description: 请填写简介
-->
<template>
  <el-main class="content">
    <!-- 组件路由跳转过渡动画 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </el-main>
</template>
<script setup lang="ts" name="Content">
import useLayOutSettingStore from '@/stores/setting'
import { ref, watch, nextTick } from 'vue'

const LayOutSettingStore = useLayOutSettingStore()

const flag = ref(true)
watch(
  () => LayOutSettingStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<style lang="scss" scoped>
.content {
  margin: 25px;
  background-color: #fff;
  .fade-enter-from {
    opacity: 0;
    transform: scale(0);
  }

  .fade-enter-active {
    transition: opacity 2s ease;
  }
  .fade-enter-to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
