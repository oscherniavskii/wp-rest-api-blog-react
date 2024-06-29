import { type FC } from 'react';
import { PostCard } from '../../types/post.types';
import PostCardSmall from '../PostCardSmall/PostCardSmall';
import { LoaderCatalog, LoaderCatalogShort } from '../loaders';
import './Catalog.scss';

interface CatalogProps {
	posts: PostCard[] | undefined;
	isLoading: boolean;
	preloader?: 'default' | 'short';
}

const Catalog: FC<CatalogProps> = ({
	posts,
	isLoading,
	preloader = 'default'
}) => {
	return (
		<div className='catalog'>
			{isLoading || !posts ? (
				preloader === 'short' ? (
					<LoaderCatalogShort />
				) : (
					<LoaderCatalog />
				)
			) : (
				posts?.map((item: PostCard) => (
					<PostCardSmall key={item.id} postData={item} />
				))
			)}
		</div>
	);
};

export default Catalog;
