import request from "@/utils/request";

interface login {
    username: string,
    password: string,
    captCha: string,
    captChaId: string
}

/**
 * @description 获取验证码
 * @returns 
 */
export function getCaptCha() {
    return request({
        url: '/auth/captCha',
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

/**
 * @description 登录接口
 * @param params 
 * @returns 
 */
export function login(params: login) {
    return request({
        url: '/auth/login',
        headers: {
            isToken: false
        },
        method: 'post',
        data: params
    })
}
/**
 * @description 获取用户个人信息
 * @returns 
 */
export function userInfo(){
    return request({
        url:'/auth/profile',
        method:'get'
    })
}