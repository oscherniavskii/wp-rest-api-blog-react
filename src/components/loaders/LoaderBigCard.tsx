import { type FC } from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from '../../hooks/useTheme';

const LoaderBigCard: FC = () => {
	const { theme } = useTheme();
	const bgColor =
		theme === 'dark' ? 'var(--bg-color-dark)' : 'var(--bg-color)';
	const fgColor = theme === 'dark' ? '#5f5f5f' : '#c9c9c9';

	return (
		<ContentLoader
			speed={2}
			width={'100%'}
			height={'100%'}
			viewBox='0 0 1200 600'
			backgroundColor={bgColor}
			foregroundColor={fgColor}
		>
			<rect x='10' y='10' rx='16' ry='16' width='1190' height='590' />
		</ContentLoader>
	);
};

export default LoaderBigCard;
