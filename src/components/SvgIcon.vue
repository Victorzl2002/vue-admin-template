<!--
 * @Author: Victorzl
 * @Date: 2025-02-14 12:45:03
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-14 13:05:03
 * @Description: 请填写简介
-->

<template>
  <svg :style="{ width: size, height: size }">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '16px',
  },
})
</script>
