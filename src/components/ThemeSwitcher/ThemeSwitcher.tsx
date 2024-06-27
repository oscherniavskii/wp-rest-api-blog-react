import { type FC } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeSwitcher.scss';

const ThemeSwitcher: FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className={`theme-switcher ${theme}`}
			type='button'
			role='theme switcher'
			onClick={toggleTheme}
		>
			<div className='theme-switcher__radio'>
				<svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
					<path
						d='M7 3.22656C6.84046 3.22656 6.68745 3.16318 6.57463 3.05037C6.46182 2.93755 6.39844 2.78454 6.39844 2.625V1.3125C6.39844 1.15296 6.46182 0.999946 6.57463 0.887131C6.68745 0.774316 6.84046 0.710938 7 0.710938C7.15954 0.710938 7.31255 0.774316 7.42537 0.887131C7.53818 0.999946 7.60156 1.15296 7.60156 1.3125V2.625C7.60156 2.78454 7.53818 2.93755 7.42537 3.05037C7.31255 3.16318 7.15954 3.22656 7 3.22656ZM7 13.2891C6.84046 13.2891 6.68745 13.2257 6.57463 13.1129C6.46182 13.0001 6.39844 12.847 6.39844 12.6875V11.375C6.39844 11.2155 6.46182 11.0624 6.57463 10.9496C6.68745 10.8368 6.84046 10.7734 7 10.7734C7.15954 10.7734 7.31255 10.8368 7.42537 10.9496C7.53818 11.0624 7.60156 11.2155 7.60156 11.375V12.6875C7.60156 12.847 7.53818 13.0001 7.42537 13.1129C7.31255 13.2257 7.15954 13.2891 7 13.2891ZM10.0937 4.50789C9.97472 4.50788 9.85845 4.4726 9.75954 4.40651C9.66064 4.34043 9.58354 4.24651 9.53801 4.13662C9.49247 4.02673 9.48054 3.9058 9.50371 3.78913C9.52688 3.67246 9.58413 3.56528 9.6682 3.48113L10.5962 2.55309C10.7096 2.44272 10.8618 2.38143 11.0199 2.38247C11.1781 2.38351 11.3295 2.44681 11.4413 2.55865C11.5532 2.6705 11.6165 2.82189 11.6175 2.98006C11.6186 3.13823 11.5573 3.29044 11.4469 3.40375L10.5189 4.3318C10.4631 4.3877 10.3968 4.43204 10.3238 4.46226C10.2509 4.49248 10.1727 4.50799 10.0937 4.50789ZM2.97828 11.6233C2.8593 11.6233 2.74299 11.588 2.64407 11.5218C2.54515 11.4557 2.46806 11.3618 2.42254 11.2518C2.37703 11.1419 2.36514 11.0209 2.38838 10.9042C2.41161 10.7875 2.46893 10.6804 2.55309 10.5962L3.48113 9.6682C3.53672 9.61113 3.60308 9.56567 3.67638 9.53446C3.74968 9.50325 3.82844 9.48691 3.90811 9.48638C3.98777 9.48586 4.06674 9.50116 4.14044 9.53141C4.21414 9.56165 4.2811 9.60623 4.33744 9.66256C4.39377 9.7189 4.43835 9.78586 4.46859 9.85956C4.49884 9.93326 4.51414 10.0122 4.51362 10.0919C4.51309 10.1716 4.49675 10.2503 4.46554 10.3236C4.43433 10.3969 4.38887 10.4633 4.3318 10.5189L3.40375 11.4469C3.34795 11.5029 3.28163 11.5473 3.20862 11.5776C3.1356 11.6078 3.05732 11.6234 2.97828 11.6233ZM12.6875 7.60156H11.375C11.2155 7.60156 11.0624 7.53818 10.9496 7.42537C10.8368 7.31255 10.7734 7.15954 10.7734 7C10.7734 6.84046 10.8368 6.68745 10.9496 6.57463C11.0624 6.46182 11.2155 6.39844 11.375 6.39844H12.6875C12.847 6.39844 13.0001 6.46182 13.1129 6.57463C13.2257 6.68745 13.2891 6.84046 13.2891 7C13.2891 7.15954 13.2257 7.31255 13.1129 7.42537C13.0001 7.53818 12.847 7.60156 12.6875 7.60156ZM2.625 7.60156H1.3125C1.15296 7.60156 0.999946 7.53818 0.887131 7.42537C0.774316 7.31255 0.710938 7.15954 0.710938 7C0.710938 6.84046 0.774316 6.68745 0.887131 6.57463C0.999946 6.46182 1.15296 6.39844 1.3125 6.39844H2.625C2.78454 6.39844 2.93755 6.46182 3.05037 6.57463C3.16318 6.68745 3.22656 6.84046 3.22656 7C3.22656 7.15954 3.16318 7.31255 3.05037 7.42537C2.93755 7.53818 2.78454 7.60156 2.625 7.60156ZM11.0217 11.6233C10.9427 11.6234 10.8644 11.6078 10.7914 11.5776C10.7184 11.5473 10.6521 11.5029 10.5962 11.4469L9.6682 10.5189C9.55784 10.4056 9.49655 10.2533 9.49759 10.0952C9.49863 9.93701 9.56192 9.78561 9.67377 9.67377C9.78561 9.56192 9.93701 9.49863 10.0952 9.49759C10.2533 9.49655 10.4056 9.55784 10.5189 9.6682L11.4469 10.5962C11.5311 10.6804 11.5884 10.7875 11.6116 10.9042C11.6349 11.0209 11.623 11.1419 11.5775 11.2518C11.5319 11.3618 11.4549 11.4557 11.3559 11.5218C11.257 11.588 11.1407 11.6233 11.0217 11.6233ZM3.90633 4.50789C3.82734 4.50805 3.74911 4.49256 3.67613 4.46234C3.60315 4.43212 3.53688 4.38775 3.48113 4.3318L2.55309 3.40375C2.44272 3.29044 2.38143 3.13823 2.38247 2.98006C2.38351 2.82189 2.44681 2.6705 2.55865 2.55865C2.6705 2.44681 2.82189 2.38351 2.98006 2.38247C3.13823 2.38143 3.29044 2.44272 3.40375 2.55309L4.3318 3.48113C4.41587 3.56528 4.47312 3.67246 4.49629 3.78913C4.51946 3.9058 4.50753 4.02673 4.46199 4.13662C4.41646 4.24651 4.33936 4.34043 4.24046 4.40651C4.14156 4.4726 4.02528 4.50788 3.90633 4.50789ZM7 9.78906C6.44838 9.78906 5.90914 9.62549 5.45048 9.31902C4.99182 9.01256 4.63434 8.57696 4.42324 8.06733C4.21214 7.55769 4.15691 6.99691 4.26453 6.45588C4.37215 5.91486 4.63778 5.41789 5.02783 5.02783C5.41789 4.63778 5.91486 4.37215 6.45588 4.26453C6.99691 4.15691 7.55769 4.21214 8.06733 4.42324C8.57696 4.63434 9.01256 4.99182 9.31902 5.45048C9.62549 5.90914 9.78906 6.44838 9.78906 7C9.78819 7.73944 9.49407 8.44834 8.97121 8.97121C8.44834 9.49407 7.73944 9.78819 7 9.78906Z'
						fill='#52535F'
					/>
				</svg>
			</div>
		</button>
	);
};

export default ThemeSwitcher;
