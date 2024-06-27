import { type FC } from 'react';
import { Link } from 'react-router-dom';
import './PostInfo.scss';

interface PostInfoProps {
	name: string | undefined;
	avatar: string | undefined;
	date: string | undefined;
	id: number | string | undefined;
}

const PostInfo: FC<PostInfoProps> = ({ name, avatar, date, id }) => {
	return (
		<div className='post-info'>
			<Link className='post-info__author' to={`/users/${id}`}>
				<div className='post-info__icon'>
					<img src={avatar} alt={name} />
				</div>
				<div className='post-info__name'>{name}</div>
			</Link>
			<div className='post-info__date'>{date}</div>
		</div>
	);
};

export default PostInfo;
