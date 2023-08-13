import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import {useState} from "react";


type Theme = 'dark' | 'light';

function themeName(isDark: boolean): Theme {
    return isDark ? 'dark' : 'light';
}

function initialTheme(): Theme {
    if ('theme' in localStorage) {
        return themeName(localStorage.theme === 'dark');
    }
    return themeName(window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export default function Root() {

    const [theme, setTheme] = useState<Theme>(initialTheme());

    function toggleTheme() {
        const newTheme = themeName(theme !== 'dark');
        setTheme(newTheme);
        // TODO: side effects in pure function
        localStorage.setItem('theme', newTheme);
        const root = window.document.documentElement;
        root.classList.remove(theme);
        root.classList.add(newTheme);
    }

    return <>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
        <Outlet/>
    </>;
}