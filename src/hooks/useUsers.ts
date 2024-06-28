import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../services/user.services';

export const useUsers = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get users'],
		queryFn: () => getAllUsers(),
		select: data => data
	});

	return { data, isLoading };
};
