import { useQuery } from '@tanstack/react-query';
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

const PostArchive: FC = () => {
	const [offset, setOffset] = useState<number>(0);
	const [allPosts, setAllPosts] = useState<PostCard[]>([]);
	const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);
	const [isMoreLoading, setIsMoreLoading] = useState<boolean>(false);

	const currentPerPage = offset === 0 ? POSTS_PER_PAGE + 1 : POSTS_PER_PAGE;

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: [
			'get all post cards',
			`?per_page=${currentPerPage}&offset=${offset}`
		],
		queryFn: () =>
			getAllPostCards(`?per_page=${currentPerPage}&offset=${offset}`),
		select: data => data,
		refetchOnWindowFocus: false
	});

	const firstPost = allPosts && allPosts.length > 0 ? allPosts[0] : undefined;
	const remainingPosts = allPosts ? allPosts.slice(1) : [];

	useEffect(() => {
		if (isSuccess) {
			if (data && data.length > 0) {
				setAllPosts(prev => [...prev, ...data]);
				if (data.length < currentPerPage) {
					setAllPostsLoaded(true);
				}
			} else {
				setAllPostsLoaded(true);
			}
			setIsMoreLoading(false);
		}
	}, [isSuccess, offset]);

	return (
		<>
			<Section vaiant='top'>
				<PageTitle title='Все посты' />
				<Breadcrumbs secondTitle='Все посты' />
				{isLoading && allPosts.length === 0 ? (
					<LoaderBigCard />
				) : (
					<PostCardBig postData={firstPost} variant='oncover' />
				)}
			</Section>
			<Section>
				<Catalog
					posts={remainingPosts}
					isLoading={isLoading && allPosts.length === 0}
				/>
				<div className='button-block'>
					{!allPostsLoaded && (
						<ButtonLink
							onClick={() => {
								setIsMoreLoading(true);
								setOffset(
									prev =>
										prev +
										(offset === 0
											? POSTS_PER_PAGE + 1
											: POSTS_PER_PAGE)
								);
							}}
							disabled={isMoreLoading}
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
