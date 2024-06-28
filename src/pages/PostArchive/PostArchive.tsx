import { type FC } from 'react';
import {
	Breadcrumbs,
	ButtonLink,
	Catalog,
	PageTitle,
	PostCardBig,
	Section
} from '../../components';
import { LoaderBigCard } from '../../components/loaders';
import { usePostCards } from '../../hooks/usePostCards';
import './PostArchive.scss';

const PostArchive: FC = () => {
	const { data, isLoading } = usePostCards('?per_page=7');

	const posts = data ? [...data] : [];
	const firstPost = posts.length > 0 ? posts[0] : undefined;
	const remainingPosts = posts.slice(1);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Все посты' />
				<Breadcrumbs secondTitle='Все посты' />
				{isLoading || !data ? (
					<LoaderBigCard />
				) : (
					<PostCardBig postData={firstPost} variant='oncover' />
				)}
			</Section>
			<Section>
				<Catalog posts={remainingPosts} isLoading={isLoading} />
				<div className='post-archive-action'>
					<ButtonLink>Загрузить ещё</ButtonLink>
				</div>
			</Section>
		</>
	);
};

export default PostArchive;
