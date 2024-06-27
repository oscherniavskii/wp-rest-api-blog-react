import { type FC } from 'react';
import './PostTitleBig.scss';

interface PostTitleBigProps {
	title: string | undefined;
}

const PostTitleBig: FC<PostTitleBigProps> = ({ title }) => {
	return <h1 className='post-title'>{title}</h1>;
};

export default PostTitleBig;
