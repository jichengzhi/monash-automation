import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import {ThemeContext} from "../components/ThemeContext.ts";
import {loadThemeFromLocalStorage, oppositeTheme, Theme} from "../lib/theme.ts";

export default function Root() {

    const [theme, setTheme] = useState<Theme>(loadThemeFromLocalStorage());

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(oppositeTheme(theme));
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    return <>
        <ThemeContext.Provider value={{theme: theme, toggleTheme: () => setTheme(oppositeTheme(theme))}}>
            <main className='bg-white dark:bg-[#23272f] text-black dark:text-white'>
                <NavBar/>

                <div className='max-h-screen overflow-y-scroll'>
                    <Outlet/>
                </div>
            </main>
        </ThemeContext.Provider>

    </>;
}