import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { LoaderList } from '../loaders';
import './AuthorList.scss';

const AuthorList: FC = () => {
	const { users, isUsersLoading } = useUsers();

	if (isUsersLoading || !users) return <LoaderList />;

	return (
		<ul className='author-list'>
			{users &&
				users.map(item => (
					<li key={item.id}>
						<Link to={`/users/${item.id}`}>{item.name}</Link>
					</li>
				))}
		</ul>
	);
};

export default AuthorList;
