import { useQuery } from '@tanstack/react-query';
import { getPostCardsByUserId } from '../services/post.services';

export const usePostCardsByUser = (id: number | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get post cards by user', id],
		queryFn: () => getPostCardsByUserId(id),
		select: data => data
	});

	return { data, isLoading };
};
