import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Category } from '../../types/category.types';
import './CategoryItem.scss';

interface CategoryItemProps {
	category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
	const { theme } = useTheme();
	return (
		<Link
			className={`category-item ${theme}`}
			to={`/categories/${category.slug}`}
		>
			<h3 className='category-item__title'>{category.name}</h3>
			<div className='category-item__count'>
				Постов: <span>{category.count}</span>
			</div>
		</Link>
	);
};

export default CategoryItem;
