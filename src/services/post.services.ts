import { BASE_API_URL, CUSTOM_POST_URL } from '../constants';
import { PostCard, SinglePost } from '../types/post.types';

export const getAllPostCards = async (
	params: string | ''
): Promise<PostCard[] | undefined> => {
	try {
		const response = await fetch(`${BASE_API_URL}/posts${params}`);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getPostCardsByCategorySlug = async (
	slug: string | undefined
): Promise<PostCard[] | undefined> => {
	if (slug) {
		try {
			const response = await fetch(
				`${CUSTOM_POST_URL}/category/${slug}/posts`
			);
			const data = response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
};

export const getPostCardsByUserId = async (
	id: number | undefined
): Promise<PostCard[] | undefined> => {
	if (id) {
		try {
			const response = await fetch(`${CUSTOM_POST_URL}/user/${id}/posts`);
			const data = response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
};

export const getPostBySlug = async (
	slug: string | undefined
): Promise<SinglePost | undefined> => {
	if (slug) {
		try {
			const response = await fetch(`${CUSTOM_POST_URL}/post/${slug}`);
			const data = response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
};
