<template>
  <div class="content">
    <div class="login-left">
      <div class="title">
        <h1>Nest-Vue-Admin</h1>
        <h4>一款快速开发后台权限管理系统</h4>
      </div>
      <div class="login-left-bg"></div>
    </div>
    <div class="login-right">
      <div class="login-form">
        <div class="login-title">
          <h1>Nest-Vue-Admin</h1>
          <h4>vue3+ts+vite+pinia+element-plus后台管理系统</h4>
        </div>
        <div class="switch">
          <div
            v-for="(item, index) in switchList"
            :key="item.id"
            :class="index == current ? 'checked' : ''"
            @click="clickSwitch(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="form" v-if="current == 0">
          <el-form
            size="large"
            :model="loginForm"
            ref="loginFormRef"
            :rules="loginRules"
          >
            <el-form-item class="login-animation" prop="username">
              <el-input
                type="text"
                placeholder="请输入用户名"
                v-model="loginForm.username"
                clearable
              >
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="login-animation" prop="password">
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
              >
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="login-animation" prop="captCha">
              <el-col :span="18">
                <el-input
                  type="text"
                  maxlength="4"
                  placeholder="请输入验证码"
                  v-model="loginForm.captCha"
                  clearable
                >
                  <template #prefix>
                    <el-icon><Position /></el-icon>
                  </template>
                </el-input>
              </el-col>
              <el-col :span="6">
                <img :src="captChaUrl" class="captCha" @click="captCha" />
              </el-col>
            </el-form-item>
            <el-form-item class="login-animation">
              <el-button
                color="#7b3de0"
                type="primary"
                class="login-button"
                round
                :loading="loading"
                @click="submitForm(loginFormRef)"
              >
                <span v-if="!loading">登录</span>
                <span v-else>登录中</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-phone" v-if="current == 1"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { getCaptCha, login } from "@/api/auth";
import { userStore } from "@/pinia/modules/user";
import { useRouter } from "vue-router"
const current = ref(0);
const captChaUrl = ref("");
const loading = ref(false)
const loginFormRef = ref<FormInstance>();
const loginRules = reactive<FormRules>({
  username: [{ required: true, message: "用户名不能为空！", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空！", trigger: "blur" }],
  captCha: [
    { required: true, message: "验证码不能为空！", trigger: "blur" },
    { min: 4, max: 4, message: "请输入四位验证码！", trigger: "blur" },
  ],
});
const router = useRouter()

const switchList = ref([
  {
    id: 0,
    name: "账号登录",
  },
  {
    id: 1,
    name: "手机登录",
  },
]);

const loginForm = ref({
  username: "admin",
  password: "admin",
  captCha: "",
  captChaId: "",
});
const clickSwitch = (index:number) => {
  current.value = index;
};

const captCha = async () => {
  getCaptCha().then((res) => {
    captChaUrl.value = res.data.data;
    loginForm.value.captChaId = res.data.captChaId;
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      login(loginForm.value).then( res => {
        window.localStorage.setItem('token',res.data);
        router.push({
          path:'/index'
        })
      }).catch( err =>{
        console.log(err)
         loading.value = false;
         captCha()
      })
    }
  });
};
captCha();
</script>
<style scoped lang="scss">
@import "@/styles/login.scss";
</style>