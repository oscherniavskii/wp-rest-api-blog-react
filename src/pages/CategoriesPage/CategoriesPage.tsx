import { type FC } from 'react';

import {
	Breadcrumbs,
	ButtonLink,
	Catalog,
	CategoryItem,
	PageTitle,
	Section,
	SectionTitle
} from '../../components';
import { LoaderCategories } from '../../components/loaders';
import { useCategories } from '../../hooks/useCategories';
import { usePostCards } from '../../hooks/usePostCards';
import './CategoriesPage.scss';

const CategoriesPage: FC = () => {
	const { data: categories, isLoading: isCategoryLoading } = useCategories();
	const { data: posts, isLoading: isPostsLoading } =
		usePostCards(`?per_page=3`);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Категории' />
				<Breadcrumbs secondTitle='Категории' />
				<div className='categories-list'>
					{isCategoryLoading ? (
						<LoaderCategories />
					) : (
						!!categories &&
						categories.map(item => (
							<CategoryItem key={item.id} category={item} />
						))
					)}
				</div>
			</Section>
			<Section>
				<SectionTitle title='Свежие посты' />
				<Catalog
					posts={posts}
					isLoading={isPostsLoading}
					preloader='short'
				/>
				<div className='button-block'>
					<ButtonLink to='/posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
};

export default CategoriesPage;
