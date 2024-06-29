import { type FC } from 'react';

import { useParams } from 'react-router-dom';
import {
	AuthorInfo,
	ButtonLink,
	Catalog,
	PostsNotFound,
	Section,
	SectionTitle
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
				{!!user && <AuthorInfo user={user} isLoading={isUserLoading} />}
				<SectionTitle title='Посты автора' />
				{data && data?.length === 0 ? (
					<PostsNotFound />
				) : (
					<Catalog posts={data} isLoading={isLoading} />
				)}
				<div className='button-block'>
					<ButtonLink to='/posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
};

export default UserPostsPage;
