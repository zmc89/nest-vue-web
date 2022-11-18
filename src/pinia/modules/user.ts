import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const userStore = defineStore('user',()=>{
    const user = reactive({
    })
   const token = ref(window.localStorage.getItem('token') || '');

    return {
        user,
        token
    }
})