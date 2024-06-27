import { type FC } from 'react';
import { PostCard } from '../../types/post.types';
import PostCardSmall from '../PostCardSmall/PostCardSmall';
import { LoaderCatalog } from '../loaders';
import './Catalog.scss';

interface CatalogProps {
	posts: PostCard[] | undefined;
	isLoading: boolean;
}

const Catalog: FC<CatalogProps> = ({ posts, isLoading }) => {
	return (
		<div className='catalog'>
			{isLoading || !posts ? (
				<LoaderCatalog />
			) : (
				posts?.map((item: PostCard) => (
					<PostCardSmall
						key={item.id}
						postData={item}
						isLoading={isLoading}
					/>
				))
			)}
		</div>
	);
};

export default Catalog;
