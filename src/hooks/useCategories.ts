import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/category.services';
import { Category } from '../types/category.types';

export const useCategories = () => {
	const [categories, setCategories] = useState<Category[] | undefined>(
		undefined
	);
	const [isCategoriesLoading, setIsCategoriesLoading] =
		useState<boolean>(true);

	useEffect(() => {
		setIsCategoriesLoading(true);
		getAllCategories()
			.then(data => setCategories(data))
			.finally(() => setIsCategoriesLoading(false))
			.catch(error => console.log(error));
	}, []);

	return { categories, isCategoriesLoading };
};
