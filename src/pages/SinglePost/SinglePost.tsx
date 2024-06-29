import { type FC } from 'react';

import { useParams } from 'react-router-dom';
import { Categories, PostInfo, PostTitleBig, Section } from '../../components';
import { LoaderBigCard } from '../../components/loaders';
import { useSinglePost } from '../../hooks/useSinglePost';
import './SinglePost.scss';

const SinglePost: FC = () => {
	const { slug } = useParams();
	const { data, isLoading } = useSinglePost(slug);

	return (
		<Section vaiant='top' container='small'>
			{isLoading ? (
				<LoaderBigCard />
			) : (
				<div className='single-post'>
					<Categories categories={data?.categories} />
					<div className='single-post__title'>
						<PostTitleBig title={data?.title} />
					</div>
					<PostInfo
						name={data?.author_name}
						avatar={data?.author_avatar}
						date={data?.date}
						id={data?.author_id}
					/>
					<div className='single-post__cover'>
						<img src={data?.image_url} alt={data?.title} />
					</div>
					{!!data?.content && (
						<div
							className='single-post__content'
							dangerouslySetInnerHTML={{ __html: data?.content }}
						/>
					)}
				</div>
			)}
		</Section>
	);
};

export default SinglePost;
