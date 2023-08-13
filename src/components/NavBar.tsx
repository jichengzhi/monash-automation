import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import classNames from "classnames";
import {FiMenu, FiMoon, FiSun} from "react-icons/fi";

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

function Menu({closeMenu}) {
    return (
        <div className='h-full max-h-screen overflow-y-scroll no-bg-scrollbar bg-white dark:bg-[#23272f]'>
            <div className='py-10 h-full w-full flex flex-col gap-3'>
                {routes.map(route => (
                    <Link to={route.href} key={route.name}
                          className='w-full hover:bg-gray-200 dark:hover:bg-gray-700 py-2'
                          onClick={closeMenu}>
                        <span className='font-medium px-10 dark:text-white'>{route.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function MonashAutomationLogo({mode}: { mode: string }) {

    return (
        mode === 'dark'
            ? <img src='/ma-logo-lettermark-white-blue.png' alt='Monash Automation Logo'
                   className='h-8 w-8'/>
            : <img src='/ma-logo-lettermark-black-blue.png' alt='Monash Automation Logo'
                   className='h-8 w-8'/>
    )
}

// TODO: gray background #f3f4f6 monash blue #006DAE
export default function NavBar({theme, toggleTheme}) {

    const [showMenu, setShowMenu] = useState(false);

    function ThemeSwitch() {
        return (
            <button
                className='w-12 h-12 flex justify-center items-center rounded-full active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700'
                onClick={() => toggleTheme()}
            >
                {theme === 'light' ? <FiMoon/> : <FiSun className='stroke-white'/>}
            </button>
        );
    }

    return (
        <div className={classNames('sticky top-0 bg-gray-50', {
            'z-20': !showMenu,
            'h-screen z-50': showMenu
        })}>
            <nav className='flex flex-row justify-between items-center py-2 px-5 dark:bg-[#23272f]'>

                <div className='flex flex-row justify-center items-center gap-5'>
                    <button
                        className='lg:hidden flex justify-center items-center w-12 h-12 rounded-full active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700'
                        onClick={() => setShowMenu(x => !x)}>
                        <FiMenu className='dark:stroke-white'/>
                    </button>

                    <Link to='/' className='flex flex-row justify-center items-center gap-5'>
                        <MonashAutomationLogo mode={theme}/>
                        <span className='font-medium dark:text-white'>Monash Automation</span>
                    </Link>

                </div>

                <div className='hidden lg:flex flex-row gap-5'>
                    {routes.map(route => (
                        <NavLink to={route.href} key={route.name} className={({isActive}) => {
                            if (isActive) return 'text-[#006DAE] dark:text-[#006DAE] bg-gray-200 dark:bg-gray-700 py-2 px-3 rounded-3xl font-medium';
                            else return 'dark:text-white dark:hover:bg-gray-700 py-2 px-3 rounded-3xl';
                        }}>
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