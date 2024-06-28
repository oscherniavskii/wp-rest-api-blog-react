import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { LoaderList } from '../loaders';
import './AuthorList.scss';

const AuthorList: FC = () => {
	const { data, isLoading } = useUsers();

	if (isLoading || !data) return <LoaderList />;

	return (
		<ul className='author-list'>
			{data &&
				data.map(item => (
					<li key={item.id}>
						<Link to={`/users/${item.id}`}>{item.name}</Link>
					</li>
				))}
		</ul>
	);
};

export default AuthorList;
