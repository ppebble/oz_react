import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { Module } from '@/data/modules';
import './style.css';

export const ModuleCard = ({ module }: { module: Module }): React.ReactElement => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(module.path);
	};
	return (
		<div className='module-card' onClick={handleClick}>
			{module.icon && <div className='module-icon'>{module.icon}</div>}
			<h3 className='module-title'>{module.title}</h3>
			<p className='module-description'>{module.desc}</p>
		</div>
	);
};
