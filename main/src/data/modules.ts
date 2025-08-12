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
		id: '01',
		type: 'work',
		desc: 'test data for display',
		path: '/test',
		title: 'psudo data',
		icon: '😜',
	},
];
