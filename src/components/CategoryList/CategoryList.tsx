import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';
import { LoaderList } from '../loaders';
import './CategoryList.scss';

const CategoryList: FC = () => {
	const { data, isLoading } = useCategories();

	if (isLoading || !data) return <LoaderList />;

	return (
		<ul className='category-list'>
			{data &&
				data.map(item => (
					<li key={item.id}>
						<Link to={`/category/${item.slug}`}>{item.name}</Link>
					</li>
				))}
		</ul>
	);
};

export default CategoryList;
