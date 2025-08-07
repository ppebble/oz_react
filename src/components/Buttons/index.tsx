import React from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	to?: string;
	type: 'button' | 'submit' | 'reset';
	className?: string;
};

export const Button = ({ children, onClick, to, type, className = '' }: ButtonProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (to) {
			navigate(to);
			return;
		}
		if (onClick) {
			onClick();
		}
	};
	return (
		<button type={type} className={className} onClick={handleClick}>
			{children}
		</button>
	);
};
