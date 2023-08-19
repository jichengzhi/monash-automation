import {Link, NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import {FiMenu, FiMoon, FiSun} from "react-icons/fi";
import {twJoin} from "tailwind-merge";
import {cva} from "class-variance-authority";
import Logo from "./Logo.tsx";
import {ThemeContext} from "./ThemeContext.ts";

type Route = {
    name: string
    href: string,
};

const routes: Route[] = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '/projects',
        name: 'Projects',
    },
    {
        href: '/resources',
        name: 'Resources',
    },
    {
        href: '/teams',
        name: 'Teams',
    },
    {
        href: '/about-us',
        name: 'About Us',
    },
    {
        href: '/recruitment',
        name: 'Recruitment',
    },
    {
        href: '/more',
        name: 'More',
    },
];

function Menu({closeMenu}: { closeMenu: () => void }) {

    const navLink = cva(['w-full', 'py-2'], {
        variants: {
            text: {
                active: ['text-[#006DAE]', 'dark:text-[#006DAE]'],
                inactive: ['text-black', 'dark:text-white']
            },
            bg: {
                active: ['bg-gray-200', 'dark:bg-gray-700'],
                inactive: ['hover:bg-gray-200', 'dark:hover:bg-gray-700']
            }
        }
    });

    return (
        <div className='h-full max-h-screen overflow-y-scroll no-bg-scrollbar bg-white dark:bg-[#23272f]'>
            <div className='py-10 h-full w-full flex flex-col gap-3'>
                {routes.map(route => (
                    <NavLink to={route.href} key={route.name}
                             className={({isActive}) => navLink({
                                 text: isActive ? 'active' : 'inactive',
                                 bg: isActive ? 'active' : 'inactive'
                             })}
                             onClick={closeMenu}>
                        <span className='font-medium px-10 dark:text-white'>{route.name}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

// TODO: gray background #f3f4f6 monash blue #006DAE
export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const {theme, toggleTheme} = useContext(ThemeContext);

    function ThemeSwitch() {
        return (
            <button
                className='w-12 h-12 flex justify-center items-center rounded-full active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700'
                onClick={() => toggleTheme()}>
                {theme === 'light' ? <FiMoon/> : <FiSun className='stroke-white'/>}
            </button>
        );
    }


    return (
        <div className={twJoin('sticky top-0',
            showMenu ? 'h-screen z-50' : 'z-20'
        )}>
            <nav
                className='flex flex-row justify-between items-center py-2 px-5 bg-white dark:bg-[#23272f] border border-b-gray-200'>

                <div className='flex flex-row justify-center items-center gap-5'>
                    <button
                        className='lg:hidden flex justify-center items-center w-12 h-12 rounded-full active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700'
                        onClick={() => setShowMenu(!showMenu)}>
                        <FiMenu className='dark:stroke-white'/>
                    </button>

                    <Link to='/' className='flex flex-row justify-center items-center gap-5'>
                        <Logo className='h-8 w-8'/>
                        <span className='font-medium dark:text-white'>Monash Automation</span>
                    </Link>

                </div>

                <div className='hidden lg:flex flex-row gap-5'>
                    {routes.map(route => (
                        <NavLink to={route.href} key={route.name}
                                 className={({isActive}) => twJoin('py-2 px-3 rounded-3xl font-medium',
                                     isActive
                                         ? 'text-[#006DAE] dark:text-[#006DAE] bg-gray-200 dark:bg-gray-700'
                                         : 'dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700')}>
                            <span>{route.name}</span>
                        </NavLink>
                    ))}
                </div>

                <ThemeSwitch/>
            </nav>

            {showMenu && <Menu closeMenu={() => setShowMenu(false)}/>}
        </div>
    );
}