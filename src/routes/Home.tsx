import Logo from "../components/Logo.tsx";
import {BsRobot} from "react-icons/bs";

export default function Home() {
    return <>
        <section className='h-1/2 py-16 px-4  flex flex-col justify-center items-center'>
            <Logo theme={'dark'} className='h-32'/>

            <p className='text-5xl font-semibold leading-snug text-center pt-12'>Monash Automation</p>
            <p className='text-3xl text-center pt-2'>Discover endless possibilities of AI and robots</p>

            <div className='w-full py-8 flex flex-col md:flex-row justify-center items-stretch gap-2'>
                <button
                    className='text-lg py-3 px-5 rounded-3xl font-medium dark:text-white bg-gray-200 hover:bg-opacity-80 dark:hover:bg-gray-700'>Current
                    Projects
                </button>
                <button
                    className='text-lg py-3 px-5 rounded-3xl font-medium dark:text-white bg-gray-200 hover:bg-opacity-80 dark:hover:bg-gray-700 shadow-gray-200'>Join
                    Us
                </button>
            </div>
        </section>

        {/* universal padding */}
        <div className='py-24 lg:pt-24 px-10 lg:px-32 bg-gray-100 dark:bg-[#191b22]'>
            <section className='flex gap-10 lg:gap-24 flex-col lg:flex-row justify-between items-center'>

                <article className='flex-1'>
                    <BsRobot className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold'>Title</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.
                    </p>
                </article>

                <div className='flex-1'>
                    <img src='/lab-old.jpg' alt='lab' className='rounded-2xl'/>
                </div>
            </section>
        </div>

        <div className='py-24 lg:pt-24 px-10 lg:px-32 bg-white dark:bg-[#23272f]'>
            <section className='flex gap-10 lg:gap-24 flex-col lg:flex-row-reverse justify-between items-center'>

                <article className='flex-1'>
                    <BsRobot className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold'>Title</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.
                    </p>
                </article>

                <div className='flex-1'>
                    <img src='/lab-old.jpg' alt='lab' className='rounded-2xl'/>
                </div>
            </section>
        </div>

        <div className='py-24 lg:pt-24 px-10 lg:px-32 bg-gray-100 dark:bg-[#191b22]'>
            <section className='flex gap-10 lg:gap-24 flex-col lg:flex-row justify-between items-center'>

                <article className='flex-1'>
                    <BsRobot className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold'>Title</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                        excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa.
                    </p>
                </article>

                <div className='flex-1'>
                    <img src='/lab-old.jpg' alt='lab' className='rounded-2xl'/>
                </div>
            </section>
        </div>
    </>;
}