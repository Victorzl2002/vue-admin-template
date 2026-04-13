<!--
 * @Author: Victorzl
 * @Date: 2025-02-20 13:47:18
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-22 13:53:04
 * @Description: 请填写简介
-->

<template>
  <div class="Header">
    <div class="header_left">
      <BreadCrub />
    </div>
    <div class="header_right">
      <UserSettings />
    </div>
  </div>
</template>
<script setup lang="ts" name="HeaderContent">
import BreadCrub from '@/components/header/breadcrub/index.vue'
import UserSettings from '@/components/header/usersettings/index.vue'
</script>
<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgb(255, 251, 251), rgb(219, 212, 212));
  line-height: $tobbar_height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_left {
    display: flex;
    padding-left: 10px;
    flex-direction: row;
  }
  .header_right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    :deep(.el-tooltip__trigger:focus) {
      outline: none;
    }
  }
}
</style>
