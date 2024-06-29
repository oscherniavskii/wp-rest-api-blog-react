import { useQuery } from '@tanstack/react-query';
import { getCategoryBySlug } from '../services/category.services';

export const useCategory = (slug: string | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get category', slug],
		queryFn: () => getCategoryBySlug(slug),
		select: data => data
	});

	return { data, isLoading };
};
