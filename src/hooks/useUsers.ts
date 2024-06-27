import { useEffect, useState } from 'react';
import { getAllUsers } from '../services/user.services';
import { User } from '../types/user.types';

export const useUsers = () => {
	const [users, setUsers] = useState<User[] | undefined>(undefined);
	const [isUsersLoading, setIsUsersLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsUsersLoading(true);
		getAllUsers()
			.then(data => setUsers(data))
			.finally(() => setIsUsersLoading(false))
			.catch(error => console.log(error));
	}, []);

	return { users, isUsersLoading };
};
