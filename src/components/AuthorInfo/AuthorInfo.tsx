import { type FC } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { User } from '../../types/user.types';
import { LoaderCategory } from '../loaders';
import './AuthorInfo.scss';

interface AuthorInfoProps {
	user: User;
	isLoading: boolean;
}

const AuthorInfo: FC<AuthorInfoProps> = ({ user, isLoading }) => {
	const { theme } = useTheme();

	if (isLoading) return <LoaderCategory />;

	return (
		<div className={`user-info ${theme}`}>
			<div className='user-info__header'>
				<div className='user-info__icon'>
					<img src={user.author_avatar} alt={user.name} />
				</div>
				<div className='user-info__title'>
					<div className='user-info__name'>{user.name}</div>
					<div className='user-info__role'>
						{user.role === 'administrator'
							? 'Админитратор, Автор постов'
							: 'Автор постов'}
					</div>
				</div>
			</div>
			<p className='user-info__text'>{user.description}</p>
		</div>
	);
};

export default AuthorInfo;
