<!--
 * @Author: Victorzl
 * @Date: 2025-02-21 20:19:23
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 20:22:07
 * @Description: 请填写简介
-->
<template>
  <el-header class="header" style="padding: 0px">
    <HeaderContent />
  </el-header>
</template>
<script setup lang="ts" name="Header">
import HeaderContent from '@/components/header/index.vue'
</script>
<style lang="scss" scoped>
.header {
  height: $tobbar_height;
  width: 100%;
  border-bottom: 1px solid grey;
}
</style>
