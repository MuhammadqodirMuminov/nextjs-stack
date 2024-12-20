'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState('');

	const handleThemeChange = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setMode('dark');
			document.documentElement.classList.add('dark');
		} else {
			setMode('light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		handleThemeChange();
	}, [mode]);

	return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
