import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
	secondTitle: string;
	secondLink?: string;
	thirdTitle?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
	secondLink,
	secondTitle,
	thirdTitle
}) => {
	const { theme } = useTheme();
	return (
		<div className={`breadcrubs ${theme}`}>
			<div className='breadcrubs__item'>
				<Link to='/'>Главная</Link>
			</div>
			<div
				className={`breadcrubs__item ${
					!secondLink ? 'not-active' : ''
				}`}
			>
				{!!thirdTitle && secondLink ? (
					<Link to={secondLink}>{secondTitle}</Link>
				) : (
					<span>{secondTitle}</span>
				)}
			</div>
			{!!thirdTitle && (
				<div className='breadcrubs__item not-active'>
					<span>{thirdTitle}</span>
				</div>
			)}
		</div>
	);
};

export default Breadcrumbs;
