import { type FC } from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from '../../hooks/useTheme';

const LoaderPostCard: FC = () => {
	const { theme } = useTheme();
	const bgColor =
		theme === 'dark' ? 'var(--bg-color-dark)' : 'var(--bg-color)';
	const fgColor = theme === 'dark' ? '#5f5f5f' : '#c9c9c9';

	return (
		<ContentLoader
			viewBox='0 0 500 280'
			height={480}
			width={'100%'}
			backgroundColor={bgColor}
			foregroundColor={fgColor}
		>
			<rect x='3' y='3' rx='10' ry='10' width='390' height='180' />
			<rect x='6' y='190' rx='0' ry='0' width='380' height='20' />
			<rect x='4' y='215' rx='0' ry='0' width='330' height='20' />
			<rect x='4' y='242' rx='0' ry='0' width='360' height='20' />
		</ContentLoader>
	);
};

export default LoaderPostCard;
