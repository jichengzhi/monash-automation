import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.ts";

function logoUrl(theme: 'dark' | 'light') {
    const opposite = theme === 'dark' ? 'white' : 'black';
    return `/ma-logo-lettermark-${opposite}-blue.png`
}

export default function Logo({className = ''}: { className: string }) {
    const {theme} = useContext(ThemeContext);
    return (
        <img src={logoUrl(theme)} alt='Monash Automation Logo' className={className}/>
    );
}