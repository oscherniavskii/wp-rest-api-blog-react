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
import { POSTS_PER_PAGE } from '../../constants';
import { getAllPostCards } from '../../services/post.services';
import { PostCard } from '../../types/post.types';
import './PostArchive.scss';

const PostArchive: FC = () => {
	const [offset, setOffset] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [allPosts, setAllPosts] = useState<PostCard[]>([]);
	const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);
	const [isMoreLoading, setIsMoreLoading] = useState<boolean>(false);

	const firstPost = allPosts.length > 0 ? allPosts[0] : undefined;
	const remainingPosts = allPosts.slice(1);

	useEffect(() => {
		const currentPerPage =
			offset === 0 ? POSTS_PER_PAGE + 1 : POSTS_PER_PAGE;
		setIsMoreLoading(true);
		getAllPostCards(`?per_page=${currentPerPage}&offset=${offset}`)
			.then(data => {
				if (data && data.length > 0) {
					setAllPosts(prev => [...prev, ...data]);
					if (data.length < currentPerPage) {
						setAllPostsLoaded(true);
					}
				} else {
					setAllPostsLoaded(true);
				}
			})
			.catch(error => console.log(error))
			.finally(() => {
				setIsLoading(false);
				setIsMoreLoading(false);
			});
	}, [offset]);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Все посты' />
				<Breadcrumbs secondTitle='Все посты' />
				{isLoading || !firstPost ? (
					<LoaderBigCard />
				) : (
					<PostCardBig postData={firstPost} variant='oncover' />
				)}
			</Section>
			<Section>
				<Catalog posts={remainingPosts} isLoading={isLoading} />
				<div className='post-archive-action'>
					{!allPostsLoaded && (
						<ButtonLink
							onClick={() =>
								setOffset(
									prev =>
										prev +
										(offset === 0
											? POSTS_PER_PAGE + 1
											: POSTS_PER_PAGE)
								)
							}
						>
							{isMoreLoading ? 'Загружаем...' : 'Загрузить ещё'}
						</ButtonLink>
					)}
				</div>
			</Section>
		</>
	);
};

export default PostArchive;
