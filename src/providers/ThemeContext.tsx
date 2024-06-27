import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { Theme, ThemeContextProps } from '../types/theme.types';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('theme');
		return (savedTheme as Theme) || 'light';
	});

	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		document.body.classList.remove('light', 'dark');
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
