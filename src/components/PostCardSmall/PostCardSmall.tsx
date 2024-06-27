import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { type PostCard } from '../../types/post.types';
import Categories from '../Categories/Categories';
import PostInfo from '../PostInfo/PostInfo';
import { LoaderPostCard } from '../loaders';
import './PostCardSmall.scss';

interface PostCardProps {
	postData: PostCard;
	isLoading: boolean;
}

const PostCardSmall: FC<PostCardProps> = ({ postData, isLoading }) => {
	const { theme } = useTheme();

	if (isLoading) return <LoaderPostCard />;

	return (
		<div className={`post-card ${theme}`}>
			<Link className='post-card__cover' to={`/posts/${postData?.slug}`}>
				<img src={postData?.image_url} alt={postData?.title} />
			</Link>
			<div className='post-card__content'>
				<div className='post-card__inner'>
					<div className='post-card__categories'>
						<Categories
							categories={postData?.categories}
							variant='light'
						/>
					</div>
					<Link
						className='post-card__title'
						to={`/posts/${postData?.slug}`}
					>
						<h3>{postData?.title}</h3>
					</Link>
				</div>
				<div className='post-card__info'>
					<PostInfo
						name={postData?.author_name}
						avatar={postData?.author_avatar}
						date={postData?.date}
						id={postData?.author}
					/>
				</div>
			</div>
		</div>
	);
};

export default PostCardSmall;
