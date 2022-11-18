import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'@': pathResolve('./src'),
};

export default defineConfig(({ command, mode }) => {
  return {
    base:'/',
    resolve:{
      alias
    },
    plugins: [vue()]
  }
})
