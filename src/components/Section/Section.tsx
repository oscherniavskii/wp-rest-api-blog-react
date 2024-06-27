import { PropsWithChildren, type FC } from 'react';

import './Section.scss';

interface SectionProps {
	container?: 'default' | 'small';
	vaiant?: 'default' | 'top';
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
	container = 'default',
	vaiant = 'default',
	children
}) => {
	return (
		<section className={`section ${vaiant === 'top' ? 'top' : ''}`}>
			<div
				className={
					container === 'small'
						? 'section____container-small'
						: 'section__container'
				}
			>
				<div className='section__inner'>{children}</div>
			</div>
		</section>
	);
};

export default Section;
