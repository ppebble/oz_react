import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

const assignmentDirs = fs
	.readdirSync(path.join(__dirname, 'packages'))
	.filter((dir) => dir.startsWith('oz_react_deepening_'));

// 프록시 설정 생성
const createProxyConfig = () => {
	const config = {};
	assignmentDirs.forEach((dir) => {
		const routePath = `/${dir.replace(/_/g, '-')}`;
		config[routePath] = {
			target: 'http://localhost:3000',
			rewrite: (path) => path.replace(routePath, `/dist/${dir}`),
			changeOrigin: true,
		};
		// 모든 과제의 assets 경로 처리
		config[`/${dir}/assets`] = {
			target: 'http://localhost:3000',
			rewrite: (path) => path.replace(`/${dir}/assets`, `/dist/${dir}/assets`),
			changeOrigin: true,
		};
	});
	return config;
};
export default defineConfig({
	// 메인 폴더를 기준으로 설정
	root: __dirname,
	// 빌드 출력 위치
	build: {
		outDir: 'dist/main',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				oz_react_deepening_04: resolve(__dirname, 'dist/oz_react_deepening_04/index.html'),
				oz_react_deepening_05: resolve(__dirname, 'dist/oz_react_deepening_05/index.html'),
			},
		},
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,

		proxy: createProxyConfig(),
	},
});
