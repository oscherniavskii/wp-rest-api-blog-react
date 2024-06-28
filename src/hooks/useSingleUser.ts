import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../services/user.services';

export const useSingleUser = (id: number) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get single user', id],
		queryFn: () => getUserById(id),
		select: data => data
	});

	return { data, isLoading };
};
