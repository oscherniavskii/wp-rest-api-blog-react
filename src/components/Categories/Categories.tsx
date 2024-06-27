import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Category } from '../../types/category.types';
import './Categories.scss';

interface CategoriesProps {
	categories: Category[] | undefined;
	variant?: 'default' | 'light';
}

const Categories: FC<CategoriesProps> = ({
	categories,
	variant = 'default'
}) => {
	const { theme } = useTheme();

	const categoriesList =
		categories?.map(item => (
			<Link to={`/category/${item.slug}`} key={item.id}>
				{item.name}
			</Link>
		)) || undefined;

	return (
		<div
			className={`categories ${theme} ${
				variant === 'light' ? 'light-variant' : ''
			}`}
		>
			{categoriesList ? categoriesList : <span>Нет категории</span>}
		</div>
	);
};

export default Categories;
