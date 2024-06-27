import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Categories, PostInfo, PostTitleBig } from '..';
import { useTheme } from '../../hooks/useTheme';
import { PostCard } from '../../types/post.types';
import './PostCardBig.scss';

interface PostCardBigProps {
	postData: PostCard | undefined;
}

const PostCardBig: FC<PostCardBigProps> = ({ postData }) => {
	const { theme } = useTheme();
	return (
		<div className='post-card-big'>
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
						<PostTitleBig title={postData?.title} />
					</Link>
					<div className='post-card-big__info'>
						<PostInfo
							name={postData?.author_name}
							avatar={postData?.author_avatar}
							date={postData?.date}
							id={postData?.author}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCardBig;
