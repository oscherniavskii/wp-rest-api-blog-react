import { useEffect, useState, type FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo, logoDark } from '../../assets/img';
import { useTheme } from '../../hooks/useTheme';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.scss';

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { theme } = useTheme();

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
	}, [isMenuOpen]);

	return (
		<header className={`header ${theme}`}>
			<div className='header__container'>
				<div className='header__inner'>
					<Link className='header__logo' to={'/'}>
						<img src={theme === 'dark' ? logoDark : logo} />
					</Link>
					<div
						className={`header__actions ${theme} ${
							isMenuOpen ? 'active' : ''
						}`}
					>
						<nav className='header__menu menu'>
							<ul className='menu__list'>
								<li className='menu__item'>
									<NavLink
										to='/'
										className={({ isActive }) =>
											isActive ? 'active' : ''
										}
										onClick={() => setIsMenuOpen(false)}
									>
										Главная
									</NavLink>
								</li>
								<li className='menu__item'>
									<NavLink
										to='posts'
										className={({ isActive }) =>
											isActive ? 'active' : ''
										}
										onClick={() => setIsMenuOpen(false)}
									>
										Все посты
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className='header__switcher'>
							<ThemeSwitcher />
						</div>
					</div>
					<button
						className={`header__icon ${theme} ${
							isMenuOpen ? 'active' : ''
						}`}
						type='button'
						role='menu'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
