import { type FC } from 'react';

import { ButtonLink, Section } from '../../components';
import './NotFoundPage.scss';

const NotFoundPage: FC = () => {
	return (
		<Section vaiant='top'>
			<div className='page-not-found'>
				<h1 className='page-not-found__title'>404</h1>
				<div className='page-not-found__text'>
					Запрошенная страница не найдена
				</div>
				<div className='button-block'>
					<ButtonLink to='/'>На главную</ButtonLink>
				</div>
			</div>
		</Section>
	);
};

export default NotFoundPage;
