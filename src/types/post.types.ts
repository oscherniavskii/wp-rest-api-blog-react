import { Category } from './category.types';

export interface PostCard {
	id: number;
	date: string;
	modified: string;
	slug: string;
	title: string;
	author: number;
	categories: Category[];
	author_name: string;
	image_url: string;
	author_avatar: string;
	status: string;
}

export interface SinglePost {
	id: number;
	title: string;
	categories: Category[];
	author_name: string;
	content: string;
	date: string;
	dmodified: string;
	image_url: string;
	author_avatar: string;
	author_id: number;
	slug: string;
}
