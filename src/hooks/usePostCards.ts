import { useQuery } from '@tanstack/react-query';
import { getAllPostCards } from '../services/post.services';

export const usePostCards = (params: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get post cards', params],
		queryFn: () => getAllPostCards(params),
		select: data => data
	});

	return { data, isLoading };
};
