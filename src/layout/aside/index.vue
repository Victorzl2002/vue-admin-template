<!--
 * @Author: Victorzl
 * @Date: 2025-02-20 15:25:39
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 18:20:25
 * @Description: 请填写简介
-->
<template>
  <el-aside class="aside" :class="{ fold: LayOutSettingStore.fold }">
    <div class="title" v-if="!LayOutSettingStore.fold"><Logo /></div>
    <el-scrollbar class="scrollbar">
      <el-menu
        background-color="#303d4f"
        text-color="#fff"
        :default-active="$route.path"
        :collapse="LayOutSettingStore.fold"
        :collapse-transition="false"
      >
        <!-- 根据路由动态生成菜单 -->
        <Menu :menuRouters="routes" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script setup lang="ts" name="Aside">
import { routes } from '@/router/routes'
import { useRoute } from 'vue-router'
import Menu from '@/components/menu/index.vue'
import Logo from '@/components/logo/index.vue'
const $route = useRoute()

//获取是否折叠fold
import useLayOutSettingStore from '@/stores/setting'
const LayOutSettingStore = useLayOutSettingStore()
</script>
<style lang="scss" scoped>
.aside {
  width: $aside_wide;
  height: $max_height;
  background-color: #303d4f;
  transition: all 0.3s;
  .title {
    height: $tobbar_height;
  }
  .scrollbar {
    width: 100%;
    height: calc(100vh - $tobbar_height);
    .el-menu {
      border-right: none;
    }
  }
  &.fold {
    width: 50px;
  }
}
</style>
