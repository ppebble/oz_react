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

export const modules: WorkModule[] = [];
