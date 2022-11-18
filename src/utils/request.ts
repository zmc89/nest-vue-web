import axios from 'axios'
import { ElMessage,ElMessageBox } from 'element-plus';

const request = axios.create({
    baseURL:import.meta.env.VITE_API_URL as any,
    timeout:30000,
    headers: { 'Content-Type': 'application/json' },
})

// 添加请求拦截器
request.interceptors.request.use(
	(config) => {
		// 是否需要token
        const isToken = (config.headers || {}).isToken === false;
        const token = window.localStorage.getItem('token')
		if (token && !isToken) {
			(<any>config.headers).common['Authorization'] = `'Bearer '${token}`;
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
request.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			// `token` 过期或者账号已在别处登录
			if (res.code === 401) {
				window.localStorage.clear() // 清除浏览器全部临时缓存
				window.location.href = '/'; // 去登录页
				ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
					.then(() => {})
					.catch(() => {});
			}
            ElMessage.error(response.data.message)
			return Promise.reject(request.interceptors.response);
		} else {
			return response.data;
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);



export default request;