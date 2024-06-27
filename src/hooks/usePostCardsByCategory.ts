import { useEffect, useState } from 'react';
import { getPostCardsByCategorySlug } from '../services/post.services';
import { PostCard } from '../types/post.types';

export const usePostCardsByCategory = (slug: string) => {
	const [data, setData] = useState<PostCard[] | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		getPostCardsByCategorySlug(slug)
			.then(data => setData(data))
			.finally(() => setIsLoading(false))
			.catch(error => console.log(error));
	}, [slug]);

	return { data, isLoading };
};
