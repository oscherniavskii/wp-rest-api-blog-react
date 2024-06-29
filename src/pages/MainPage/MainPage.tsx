import {
	ButtonLink,
	Catalog,
	PostCardBig,
	Section,
	SectionTitle
} from '../../components';
import { LoaderBigCard } from '../../components/loaders';
import { POSTS_PER_PAGE } from '../../constants';
import { usePostCards } from '../../hooks/usePostCards';
import './MainPage.scss';

function MainPage() {
	const { data, isLoading } = usePostCards(`?per_page=${POSTS_PER_PAGE + 1}`);

	const posts = data ? [...data] : [];
	const firstPost = posts.length > 0 ? posts[0] : undefined;
	const remainingPosts = posts.slice(1);

	return (
		<>
			<Section vaiant='top'>
				{isLoading || !data ? (
					<LoaderBigCard />
				) : (
					<PostCardBig postData={firstPost} />
				)}
			</Section>
			<Section>
				<SectionTitle title='Свежие посты' />
				<Catalog posts={remainingPosts} isLoading={isLoading} />
				<div className='main-action'>
					<ButtonLink to='posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
}

export default MainPage;
