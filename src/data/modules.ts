export interface Module {
	id: string;
	title: string;
	desc: string;
	path: string;
	icon?: string;
}
export interface WorkModule extends Module {
	type: 'work';
}

export const modules: WorkModule[] = [
	{
		id: '080701',
		title: 'JSX과제',
		desc: '0807 1번 과제 : JSX 에러 해결',
		path: '/work080701',
		type: 'work',
	},
	{
		id: '080702',
		title: 'Map, Filter',
		desc: '0807 2번 과제 : map filter를 활용한 반복 렌더링',
		path: '/work080702',
		type: 'work',
	},
];
