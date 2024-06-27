import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './ButtonLink.scss'; // Файл стилей для вашей кнопки

interface ButtonLinkProps {
	to?: string;
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
	to,
	onClick,
	children,
	disabled = false
}) => {
	const { theme } = useTheme();

	if (to) {
		return (
			<Link
				to={to}
				className={`button-link ${theme} ${disabled ? 'disabled' : ''}`}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			onClick={onClick}
			className={`button-link ${theme}`}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default ButtonLink;
