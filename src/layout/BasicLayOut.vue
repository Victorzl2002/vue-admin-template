<!--
 * @Author: Victorzl
 * @Date: 2025-02-18 14:57:32
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 19:44:48
 * @Description: 请填写简介
-->
<template>
  <div class="layout_container">
    <!-- 侧边栏 -->
    <el-container>
      <Aside />
      <!-- 顶部导航栏和主要内容区域 -->
      <el-container class="main">
        <!-- 顶部导航栏 -->
        <Header />
        <!-- 主要内容区域 -->
        <Content />
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts" name="BasicLayOut">
import Aside from '@/layout/aside/index.vue'
import Header from '@/layout/header/index.vue'
import Content from '@/layout/content/index.vue'
</script>
<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: $max_height;
  .main {
    display: flex;
    flex-direction: column;
  }
}
</style>
