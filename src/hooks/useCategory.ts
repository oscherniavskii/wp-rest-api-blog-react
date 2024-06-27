import { useEffect, useState } from 'react';
import { getCategoryBySlug } from '../services/category.services';
import { Category } from '../types/category.types';

export const useCategory = (slug: string) => {
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [isCategoryLoading, setIsCategoryLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsCategoryLoading(true);
		getCategoryBySlug(slug)
			.then(data => setCategory(data))
			.finally(() => setIsCategoryLoading(false))
			.catch(error => console.log(error));
	}, [slug]);

	return { category, isCategoryLoading };
};
