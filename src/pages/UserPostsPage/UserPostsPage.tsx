import { type FC } from 'react';

import { useParams } from 'react-router-dom';
import {
	AuthorInfo,
	Breadcrumbs,
	ButtonLink,
	Catalog,
	PageTitle,
	Section
} from '../../components';
import { usePostCardsByUser } from '../../hooks/usePostCardsByUser';
import { useSingleUser } from '../../hooks/useSingleUser';
import './UserPostsPage.scss';

const UserPostsPage: FC = () => {
	const { id } = useParams();
	const { data, isLoading } = usePostCardsByUser(id);
	const { data: user, isLoading: isUserLoading } = useSingleUser(id);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title={user?.name} />
				<Breadcrumbs
					secondTitle='Авторы'
					secondLink='/users'
					thirdTitle={user?.name}
				/>
				{!!user && <AuthorInfo user={user} isLoading={isUserLoading} />}
				<Catalog posts={data} isLoading={isLoading} />
				<div className='button-block'>
					<ButtonLink to='/posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
};

export default UserPostsPage;
