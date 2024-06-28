import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Categories, PostInfo, PostTitleBig } from '..';
import { useTheme } from '../../hooks/useTheme';
import { PostCard } from '../../types/post.types';
import './PostCardBig.scss';

interface PostCardBigProps {
	postData: PostCard | undefined;
	variant?: 'default' | 'oncover';
}

const PostCardBig: FC<PostCardBigProps> = ({
	postData,
	variant = 'default'
}) => {
	const { theme } = useTheme();
	return (
		<div
			className={`post-card-big ${
				variant === 'oncover' ? 'oncover' : ''
			}`}
		>
			<div className='post-card-big__cover'>
				<img src={postData?.image_url} alt={postData?.title} />
				<div className={`post-card-big__card ${theme}`}>
					<div className='post-card-big__categories'>
						<Categories categories={postData?.categories} />
					</div>
					<Link
						className='post-card-big__title'
						to={`/posts/${postData?.slug}`}
					>
						<PostTitleBig
							title={postData?.title}
							variant={
								variant === 'oncover' ? 'oncover' : 'default'
							}
						/>
					</Link>
					<div className='post-card-big__info'>
						<PostInfo
							name={postData?.author_name}
							avatar={postData?.author_avatar}
							date={postData?.date}
							id={postData?.author}
							variant={
								variant === 'oncover' ? 'oncover' : 'default'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCardBig;
