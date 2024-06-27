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
	author: string;
	content: string;
	date_created: string;
	date_modified: string;
	image_url: string;
	author_avatar: string;
}
