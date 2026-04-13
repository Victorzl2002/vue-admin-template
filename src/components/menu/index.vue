<!--
 * @Author: Victorzl
 * @Date: 2025-02-18 19:04:06
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-19 14:30:06
 * @Description: 请填写简介
-->
<template>
  <div class="Menu">
    <template v-for="router in menuRouters" :key="router.path">
      <template v-if="!router.children">
        <el-menu-item v-if="router.meta.display" :index="router.path" @click="getRouter">
          <el-icon>
            <component :is="router.meta.icon"></component>
          </el-icon>
          <span>{{ router.meta.title }}</span>
        </el-menu-item>
      </template>

      <template v-else>
        <el-menu-item
          v-if="router.children.length == 1 && router.children[0].meta.display"
          :index="router.children[0].path"
          @click="getRouter"
        >
          <el-icon>
            <component :is="router.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ router.children[0].meta.title }}</span>
        </el-menu-item>

        <el-sub-menu v-if="router.children.length > 1 && router.meta.display" :index="router.path">
          <template #title>
            <el-icon>
              <component :is="router.children[0].meta.icon"></component>
            </el-icon>
            <span> {{ router.meta.title }}</span>
          </template>
          <Menu :menuRouters="router.children" />
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>
<script setup lang="ts" name="Menu">
import { useRouter } from 'vue-router'

defineProps(['menuRouters'])
const $router = useRouter()
const getRouter = (vc) => {
  $router.push(vc.index)
}
</script>
<style lang="scss" scoped></style>
