<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="flex-center">
        <Header />
        <Main />
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Aside from "@/layout/components/aside.vue";
import Header from "@/layout/components/header.vue";
import Main from "@/layout/components/main.vue";
</script>
<style lang="scss" scoped>
</style>
