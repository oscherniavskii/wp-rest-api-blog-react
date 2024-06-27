import { useEffect, useState } from 'react';
import { getPostBySlug } from '../services/post.services';
import { SinglePost } from '../types/post.types';

export const useSinglePost = (slug: string) => {
	const [post, setPost] = useState<SinglePost | undefined>(undefined);
	const [isPostLoading, setIsPostLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsPostLoading(true);
		getPostBySlug(slug)
			.then(data => setPost(data))
			.finally(() => setIsPostLoading(false))
			.catch(error => console.log(error));
	}, [slug]);

	return { post, isPostLoading };
};
