import { type FC } from 'react';

import { useParams } from 'react-router-dom';
import {
	Breadcrumbs,
	ButtonLink,
	Catalog,
	PageTitle,
	Section
} from '../../components';
import { useCategory } from '../../hooks/useCategory';
import { usePostCardsByCategory } from '../../hooks/usePostCardsByCategory';

const CategoryPostsPage: FC = () => {
	const { slug } = useParams();
	const { data, isLoading } = usePostCardsByCategory(slug);
	const { data: category } = useCategory(slug);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title={category?.name} />
				<Breadcrumbs
					secondTitle='Категории'
					secondLink='/categories'
					thirdTitle={category?.name}
				/>
				<Catalog posts={data} isLoading={isLoading} />
				<div className='button-block'>
					<ButtonLink to='/posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
};

export default CategoryPostsPage;
