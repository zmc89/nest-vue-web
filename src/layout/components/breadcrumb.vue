<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
    .breadcrumb {
        height: 100%;
        line-height: 42px;
        display: inline-block;

    }
</style>