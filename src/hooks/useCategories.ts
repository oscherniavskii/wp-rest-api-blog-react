import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../services/category.services';

export const useCategories = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => getAllCategories(),
		select: data => data
	});

	return { data, isLoading };
};
