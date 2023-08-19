export type Theme = 'dark' | 'light';

export function oppositeTheme(theme: Theme) {
    return theme === 'dark' ? 'light' : 'dark';
}

export function loadThemeFromLocalStorage(): Theme {

    const themeName = (isDark: boolean) => isDark ? 'dark' : 'light';

    if ('theme' in localStorage) {
        return themeName(localStorage.theme === 'dark');
    }
    return themeName(window.matchMedia('(prefers-color-scheme: dark)').matches);
}