import { useQuery } from '@tanstack/react-query';
import { getPostCardsByCategorySlug } from '../services/post.services';

export const usePostCardsByCategory = (slug: string | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get post cards by category', slug],
		queryFn: () => getPostCardsByCategorySlug(slug),
		select: data => data
	});

	return { data, isLoading };
};
