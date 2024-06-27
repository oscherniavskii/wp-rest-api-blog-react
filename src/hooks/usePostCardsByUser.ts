import { useEffect, useState } from 'react';
import { getPostCardsByUserId } from '../services/post.services';
import { PostCard } from '../types/post.types';

export const usePostCardsByUser = (id: number) => {
	const [data, setData] = useState<PostCard[] | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		getPostCardsByUserId(id)
			.then(data => setData(data))
			.finally(() => setIsLoading(false))
			.catch(error => console.log(error));
	}, [id]);

	return { data, isLoading };
};
