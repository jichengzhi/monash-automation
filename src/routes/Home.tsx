import Logo from "../components/Logo.tsx";

export default function Home() {
    return <>
        <section className='h-1/2 py-16 px-4  flex flex-col justify-center items-center'>
            <Logo theme={'dark'} className='h-32'/>

            <p className='text-5xl font-semibold leading-snug text-center pt-12'>Monash Automation</p>
            <p className='text-3xl text-center pt-5'>Discovery endless possibilities of AI and robots</p>

            <div className='w-full py-10 flex flex-col lg:flex-row justify-center items-stretch gap-2'>
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

        <section className='px-4 h-full py-10 flex flex-col lg:flex-row justify-center items-center gap-5'>

            <p className='text-center text-xl w-auto lg:w-1/3'>
                Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa. Amet
                commodo nostrud amet in eiusmod cupidatat id laborum eu aliquip proident adipisicing dolor nostrud.
                Labore laborum occaecat culpa culpa aliquip. Sint fugiat voluptate enim voluptate dolore ut veniam.
            </p>

            <img src='/lab-old.jpg' alt='lab' className='shrink w-auto lg:w-1/3'/>
        </section>

        <section className='px-4 h-full py-10 flex flex-col lg:flex-row justify-center items-center gap-5'>

            <img src='/lab-old.jpg' alt='lab' className='shrink w-auto lg:w-1/3'/>

            <p className='text-center text-xl w-auto lg:w-1/3'>
                Laboris sint tempor laborum consequat Lorem id excepteur aliqua nisi anim dolore ut. Pariatur mollit
                excepteur ipsum. Tempor esse in dolore minim voluptate aliquip dolor laborum incididunt sit culpa. Amet
                commodo nostrud amet in eiusmod cupidatat id laborum eu aliquip proident adipisicing dolor nostrud.
                Labore laborum occaecat culpa culpa aliquip. Sint fugiat voluptate enim voluptate dolore ut veniam.
            </p>
        </section>
    </>;
}