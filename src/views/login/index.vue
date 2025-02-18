<!--
 * @Author: Victorzl
 * @Date: 2025-02-15 12:01:29
 * @LastEditors: Victorzl
 * @LastEditTime: 2025-02-18 13:01:05
 * @Description: 请填写简介
-->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录 -->
      <div class="login_form">
        <el-form>
          <h1>Hello👋</h1>
          <h2>欢迎来到Vue3后台管理系统</h2>

          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="username"
              type="text"
              placeholder="请输入账户"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              v-model="password"
              type="password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button :loading="isLoading" @click="login" class="login_button" type="primary"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="Login">
import { reactive, ref, toRefs } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//引入河获取当前时间的工具
import { gainTime } from '@/utils/time'

const userStore = useUserStore()

const router = useRouter()

const loginData = reactive({
  username: 'admin',
  password: '111111',
})
const { username, password } = toRefs(loginData)

//控制登录加载变量
const isLoading = ref(false)

const login = async () => {
  isLoading.value = true
  try {
    await userStore.userLogin(loginData)
    router.push('/')
    ElNotification({
      type: 'success',
      title: '欢迎回来',
      message: 'Hello,' + gainTime() + '好',
    })
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/background.jpg') no-repeat center center;
  background-size: cover;

  .login_box {
    width: 40%;
    height: 50%;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex; /* 添加 flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    backdrop-filter: blur(10px); /* 应用毛玻璃效果 */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* 阴影效果 */
    padding: 20px; /* 内边距 */

    .login_form {
      width: 60%; /* 适当调整宽度 */
      padding: 40px;
      h1 {
        color: whitesmoke;
        font-size: 40px;
        font-weight: 400;
      }
      h2 {
        color: #fff;
        margin: 20px 0;
      }
      .login_button {
        width: 100%;
      }
    }
  }
}
</style>
