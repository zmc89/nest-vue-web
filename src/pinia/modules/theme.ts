import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('theme',() => {

    const themeConfig = ref({
        // 是否开启菜单水平折叠效果
		isCollapse: true,
    })

    const changeCollapse = () => {
        themeConfig.value.isCollapse = !themeConfig.value.isCollapse
    }

    return {
        themeConfig,
        changeCollapse
    }
})