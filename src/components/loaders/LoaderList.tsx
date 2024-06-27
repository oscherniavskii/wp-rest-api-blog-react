import { type FC } from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from '../../hooks/useTheme';

const LoaderList: FC = () => {
	const { theme } = useTheme();
	const bgColor =
		theme === 'dark' ? 'var(--bg-color-dark)' : 'var(--bg-color)';
	const fgColor = theme === 'dark' ? '#5f5f5f' : '#c9c9c9';

	return (
		<ContentLoader
			viewBox='0 0 400 150'
			height={130}
			width={'100%'}
			backgroundColor={bgColor}
			foregroundColor={fgColor}
		>
			<circle cx='10' cy='20' r='8' />
			<rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
			<circle cx='10' cy='50' r='8' />
			<rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
			<circle cx='10' cy='80' r='8' />
			<rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
			<circle cx='10' cy='110' r='8' />
			<rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
		</ContentLoader>
	);
};

export default LoaderList;
