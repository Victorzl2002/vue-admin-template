<!--
 * @Author: Victorzl
 * @Date: 2025-02-18 15:31:13
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-21 17:59:51
 * @Description: 请填写简介
-->
<template>
  <div class="logo">
    <SvgIcon name="weblogo" size="40px" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts" name="Logo">
import { ref } from 'vue'
import SvgIcon from '../SvgIcon.vue'
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<style lang="scss" scoped>
.logo {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  box-sizing: border-box;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  flex-wrap: nowrap;
}
</style>
