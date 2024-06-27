import { useEffect, useState } from 'react';
import { getAllPostCards } from '../services/post.services';
import { PostCard } from '../types/post.types';

export const usePostCards = (params: string) => {
	const [data, setData] = useState<PostCard[] | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		getAllPostCards(params)
			.then(data => setData(data))
			.finally(() => setIsLoading(false))
			.catch(error => console.log(error));
	}, [params]);

	return { data, isLoading };
};
