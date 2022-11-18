<template>
  <div v-if="collapse" class="layout-logo" @click="changeCollapse">
    <img src="../../assets/images/logo.svg" />
    <h1>NEST-VUE-ADMIN</h1>
  </div>
  <div v-else class="layout-logo-small" @click="changeCollapse">
    <img src="../../assets/images/logo.svg" />
  </div>
</template>
<script lang="ts" setup>
import { useThemeStore } from "@/pinia/modules/theme";
defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
});
const themeStore = useThemeStore()
const { changeCollapse } = themeStore;
</script>

<style lang="scss" scoped>
.layout-logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: logoAnimation 0.3s ease-in-out;

  img {
    width: 24px;
    margin-right: 12px;
  }

  h1 {
    color: #7a89fe;
    animation: logoAnimation 0.3s ease-in-out;
  }
}

.layout-logo-small {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;

  img {
    width: 24px;
    margin: auto;
  }
}
@keyframes logoAnimation {
  0% {
    // transform: scale(0);
    opacity: 0;
  }
  80% {
    // transform: scale(1.2);
    opacity: 0.6;
  }
  100% {
    // transform: scale(1);
    opacity: 1;
  }
}
</style>
