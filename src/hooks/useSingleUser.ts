import { useEffect, useState } from 'react';
import { getUserById } from '../services/user.services';
import { User } from '../types/user.types';

export const useSingleUser = (id: number) => {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [isUserLoading, setIsUserLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsUserLoading(true);
		getUserById(id)
			.then(data => setUser(data))
			.finally(() => setIsUserLoading(false))
			.catch(error => console.log(error));
	}, []);

	return { user, isUserLoading };
};
