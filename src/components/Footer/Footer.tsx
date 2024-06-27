import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { AuthorList, CategoryList } from '..';
import { logoFooter, logoFooterDark } from '../../assets/img';
import { useTheme } from '../../hooks/useTheme';
import './Footer.scss';

const Footer: FC = () => {
	const { theme } = useTheme();

	return (
		<footer className={`footer ${theme}`}>
			<div className='footer__container'>
				<div className='footer__inner'>
					<div className='footer__column'>
						<h3 className='footer__title'>О нас</h3>
						<p className='footer__text'>
							Вдохновляйтесь новыми идеями и погружайтесь в мир
							творчества на нашем блоге. Здесь вы найдете статьи о
							дизайне, технологиях и многом другом.
							Присоединяйтесь и развивайтесь вместе с нами!
						</p>
						<div className='footer__contacts'>
							<div className='footer__item'>
								<span>Email :</span>{' '}
								<a href='mailto:info@jstemplate.net'>
									info@template.net
								</a>
							</div>
							<div className='footer__item'>
								<span>Phone :</span>{' '}
								<a href='tel:+880123456789'>880 123 456 789</a>
							</div>
						</div>
					</div>
					<div className='footer__column'>
						<h3 className='footer__title'>Ссылки</h3>
						<nav className='footer__menu'>
							<ul className='footer__list'>
								<li className='footer__link'>
									<Link to='/'>Главная</Link>
								</li>
								<li className='footer__link'>
									<Link to='posts'>Все посты</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='footer__column'>
						<h3 className='footer__title'>Наши авторы</h3>
						<nav className='footer__menu'>
							<AuthorList />
						</nav>
					</div>
					<div className='footer__column'>
						<h3 className='footer__title'>Категории</h3>
						<nav className='footer__menu'>
							<CategoryList />
						</nav>
					</div>
				</div>
				<div className='footer__copy'>
					<div className='footer__wrapper'>
						<Link className='footer__logo' to={'/'}>
							<img
								src={
									theme === 'dark'
										? logoFooterDark
										: logoFooter
								}
							/>
						</Link>
						<div className='footer__block'>
							<div className='footer__logo-text'>
								Meta<span>Blog</span>
							</div>
							<div className='footer__copiright'>
								© 2024. All Rights Reserved.
							</div>
						</div>
					</div>
					<ul className='footer__terms'>
						<li>
							<Link to='/'>Условия</Link>
						</li>
						<li>
							<Link to='/'>Политика</Link>
						</li>
						<li>
							<Link to='/'>Файлы cookie</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
