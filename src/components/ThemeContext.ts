import {createContext} from "react";

type Theme = 'dark' | 'light';

function themeName(isDark: boolean): Theme {
    return isDark ? 'dark' : 'light';
}

function loadThemeFromLocalStorage(): Theme {
    if ('theme' in localStorage) {
        return themeName(localStorage.theme === 'dark');
    }
    return themeName(window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export const ThemeContext = createContext({
    theme: loadThemeFromLocalStorage(),
    toggleTheme: () => {}
});