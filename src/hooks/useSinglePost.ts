import { useQuery } from '@tanstack/react-query';
import { getPostBySlug } from '../services/post.services';

export const useSinglePost = (slug: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get single post', slug],
		queryFn: () => getPostBySlug(slug),
		select: data => data
	});

	return { data, isLoading };
};
