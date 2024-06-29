import { type FC } from 'react';
import {
	AuthorCard,
	Breadcrumbs,
	ButtonLink,
	Catalog,
	PageTitle,
	Section,
	SectionTitle
} from '../../components';
import { LoaderCategories } from '../../components/loaders';
import { usePostCards } from '../../hooks/usePostCards';
import { useTheme } from '../../hooks/useTheme';
import { useUsers } from '../../hooks/useUsers';
import './UsersPage.scss';

const UsersPage: FC = () => {
	const { theme } = useTheme();
	const { data: users, isLoading: isUsersLoading } = useUsers();
	const { data: posts, isLoading: isPostsLoading } =
		usePostCards(`?per_page=3`);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Авторы' />
				<Breadcrumbs secondTitle='Авторы' />
				<div className='users-list'>
					{isUsersLoading ? (
						<LoaderCategories />
					) : (
						!!users &&
						users.map(item => (
							<div
								className={`users-list__item ${theme}`}
								key={item.id}
							>
								<AuthorCard
									avatar={item.avatar_url}
									id={item.id}
									name={item.name}
								/>
							</div>
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

export default UsersPage;
