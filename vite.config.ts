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
const assignmentEntries = fs
	.readdirSync('packages')
	.filter((dir) => dir.startsWith('oz_react_deepening_'))
	.reduce(
		(acc, dir) => ({
			...acc,
			[dir]: path.resolve(__dirname, `packages/${dir}/index.html`),
		}),
		{},
	);

export default defineConfig({
	// 메인 폴더를 기준으로 설정
	root: __dirname,
	// 빌드 출력 위치
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				...assignmentEntries,
			},
			output: {
				entryFileNames: (chunkInfo) => {
					return assignmentDirs.includes(chunkInfo.name)
						? `${chunkInfo.name}/assets/[name]-[hash].js`
						: 'assets/[name]-[hash].js';
				},
				assetFileNames: (chunkInfo) => {
					const dir = assignmentDirs.find((dir) => chunkInfo.name?.includes(dir));
					return dir ? `${dir}/assets/[name]-[hash][extname]` : 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
	plugins: [
		react({
			jsxRuntime: 'automatic',
			jsxImportSource: 'react',
		}),
	],
	optimizeDeps: {
		include: ['react/jsx-runtime', 'react/jsx-dev-runtime'],
		esbuildOptions: {
			format: 'esm',
			target: 'esnext',
		},
	},
	esbuild: {
		jsx: 'automatic',
		jsxImportSource: 'react',
	},
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
