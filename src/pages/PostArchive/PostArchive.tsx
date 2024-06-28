import { useEffect, useState, type FC } from 'react';
import {
	Breadcrumbs,
	ButtonLink,
	Catalog,
	PageTitle,
	PostCardBig,
	Section
} from '../../components';
import { LoaderBigCard } from '../../components/loaders';
import { getAllPostCards } from '../../services/post.services';
import { PostCard } from '../../types/post.types';
import './PostArchive.scss';

const PostArchive: FC = () => {
	const perPage = 9;
	const [offset, setOffset] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [allPosts, setAllPosts] = useState<PostCard[]>([]);
	const [firstPost, setFirstPost] = useState<PostCard | undefined>(undefined);
	const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
	const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);

	useEffect(() => {
		getAllPostCards(`?per_page=1`)
			.then(data => {
				if (data && data.length > 0) {
					setFirstPost(data[0]);
				}
			})
			.catch(error => console.log(error))
			.finally(() => setIsFirstLoading(false));
	}, []);

	useEffect(() => {
		getAllPostCards(`?per_page=${perPage}&offset=${offset}`)
			.then(data => {
				if (data && data.length > 0) {
					setAllPosts(prev => [...prev, ...data]);
					if (data.length < perPage) {
						setAllPostsLoaded(true);
					}
				} else {
					setAllPostsLoaded(true);
				}
			})
			.catch(error => console.log(error))
			.finally(() => setIsLoading(false));
	}, [offset]);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Все посты' />
				<Breadcrumbs secondTitle='Все посты' />
				{isFirstLoading || !firstPost ? (
					<LoaderBigCard />
				) : (
					<PostCardBig postData={firstPost} variant='oncover' />
				)}
			</Section>
			<Section>
				<Catalog posts={allPosts} isLoading={isLoading} />
				<div className='post-archive-action'>
					{!allPostsLoaded && (
						<ButtonLink
							onClick={() => setOffset(prev => prev + perPage)}
						>
							Загрузить ещё
						</ButtonLink>
					)}
				</div>
			</Section>
		</>
	);
};

export default PostArchive;
