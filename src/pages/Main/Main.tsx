import {
	ButtonLink,
	Catalog,
	PostCardBig,
	Section,
	SectionTitle
} from '../../components';
import { LoaderBigCard } from '../../components/loaders';
import { usePostCards } from '../../hooks/usePostCards';
import './Main.scss';

function Main() {
	const { data, isLoading } = usePostCards('?per_page=10');

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
				<SectionTitle title='Latest post' />
				<Catalog posts={remainingPosts} isLoading={isLoading} />
				<div className='main-action'>
					<ButtonLink to='posts'>Все посты</ButtonLink>
				</div>
			</Section>
		</>
	);
}

export default Main;
