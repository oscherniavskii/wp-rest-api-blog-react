import { type FC } from 'react';
import './PageTitle.scss';

interface PageTitleProps {
	title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
	return <h1 className='page-title'>{title}</h1>;
};

export default PageTitle;
