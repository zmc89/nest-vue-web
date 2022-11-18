<template>
  <div class="h100">
    <el-aside class="layout-aside" :class="[!themeConfig.isCollapse?'hidden-aside':'']">
      <Logo :collapse="themeConfig.isCollapse" />
      <el-scrollbar>
        <el-menu class="el-menu-vertical" :collapse="!themeConfig.isCollapse">
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <template #title>系统设置</template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>
<script lang="ts" setup>
import Logo from "@/layout/components/logo.vue";
import { useThemeStore } from "@/pinia/modules/theme";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore()
const { themeConfig } = storeToRefs(themeStore)
</script>
<style lang="scss" scoped>

.hidden-aside {
  width: 64px !important;
}

.el-menu {
  border-right: none;
}
.el-menu-vertical {
  .el-menu-item {
    &.is-active {
      color: #7a89fe;
    }
  }

  .el-menu-item:hover {
    background-color: rgba(122, 137, 254, .1);
  }
}
</style>
