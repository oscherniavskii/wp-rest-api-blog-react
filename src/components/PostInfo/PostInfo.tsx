import { type FC } from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import './PostInfo.scss';

interface PostInfoProps {
	name: string | undefined;
	avatar: string | undefined;
	date: string | undefined;
	id: number | string | undefined;
	variant?: 'default' | 'oncover';
}

const PostInfo: FC<PostInfoProps> = ({
	name,
	avatar,
	date,
	id,
	variant = 'default'
}) => {
	return (
		<div className={`post-info ${variant === 'oncover' ? 'oncover' : ''}`}>
			<AuthorCard name={name} avatar={avatar} id={id} />
			<div className='post-info__date'>{date}</div>
		</div>
	);
};

export default PostInfo;
