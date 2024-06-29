import { type FC } from 'react';
import { Link } from 'react-router-dom';
import './AuthorCard.scss';

interface AuthorCardProps {
	name: string | undefined;
	avatar: string | undefined;
	id: number | string | undefined;
}

const AuthorCard: FC<AuthorCardProps> = ({ name, avatar, id }) => {
	return (
		<Link className='author-card' to={`/users/${id}`}>
			<div className='author-card__icon'>
				<img src={avatar} alt={name} />
			</div>
			<div className='author-card__name'>{name}</div>
		</Link>
	);
};

export default AuthorCard;
