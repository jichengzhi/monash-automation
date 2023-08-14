export default function Logo({theme, className = ''}: { theme: 'dark' | 'light', className: string }) {
    const url = theme === 'dark' ? '/ma-logo-lettermark-white-blue.png' : '/ma-logo-lettermark-black-blue.png';
    return (
        <img src={url} alt='Monash Automation Logo' className={className}/>
    );
}