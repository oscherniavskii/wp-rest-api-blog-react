import { type FC } from 'react';
import './PostTitleBig.scss';

interface PostTitleBigProps {
	title: string | undefined;
	variant?: 'default' | 'oncover';
}

const PostTitleBig: FC<PostTitleBigProps> = ({
	title,
	variant = 'default'
}) => {
	return (
		<h1 className={`post-title ${variant === 'oncover' ? 'oncover' : ''}`}>
			{title}
		</h1>
	);
};

export default PostTitleBig;
