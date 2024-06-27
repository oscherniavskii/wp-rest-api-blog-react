import { BASE_API_URL, CUSTOM_POST_URL } from '../constants';
import { Category } from '../types/category.types';

export const getAllCategories = async (): Promise<Category[] | undefined> => {
	try {
		const response = await fetch(`${BASE_API_URL}/categories`);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getCategoryBySlug = async (
	slug: string
): Promise<Category | undefined> => {
	try {
		const response = await fetch(`${CUSTOM_POST_URL}/category/${slug}`);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
