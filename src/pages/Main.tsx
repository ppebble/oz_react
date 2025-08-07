import { ModuleCard } from '@/components/ModuleCard';
import { modules } from '@/data/modules';

export const Main = () => {
	return (
		<div>
			{modules.map((module) => (
				<ModuleCard key={module.id} module={module} />
			))}
		</div>
	);
};
