<template>
  <el-header class="layout-header">
    <el-row>
      <el-col :span="2">
        <div class="collapse" @click="changeCollapse">
          <div v-if="themeConfig.isCollapse" class="collapse-fold">
            <el-icon><Fold /></el-icon>
          </div>
          <div v-else class="collapse-expand">
            <el-icon><Expand /></el-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <breadcrumb />
      </el-col>
      <el-col :span="10">
        <div class="right-menu"></div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/pinia/modules/theme";
import breadcrumb from "./breadcrumb.vue";
import { reactive, ref } from "@vue/reactivity";
const themeStore = useThemeStore();
const { themeConfig } = storeToRefs(themeStore);
const { changeCollapse } = themeStore;

</script>

<style scoped lang="scss">
.collapse {
  font-size: 20px;
  color: #606266;
  padding: 0 18px;
  line-height: 50px;

  .collapse-fold {
    cursor: pointer;
  }

  .collapse-expand {
    cursor: pointer;
  }
}
</style>
