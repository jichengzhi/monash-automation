import {BsGear, BsRobot} from "react-icons/bs";
import {AiOutlineExperiment, AiOutlineTool} from "react-icons/ai";
import {HiOutlineCode} from "react-icons/hi";

export default function Teams() {
    return <>
        {/* universal padding */}
        <div className='py-24 lg:pt-24 px-10 lg:px-32 bg-gray-100 dark:bg-[#191b22]'>
            <section className='flex gap-10 lg:gap-24 flex-col lg:flex-row justify-between items-center'>

                <article className='flex-1'>
                    <BsRobot className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold pt-6'>Robotics Team</h1>

                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        The Robotics team is at the forefront of automating 3D printing services, programming and
                        managing various robotic systems, including KUKA iiwa LBRs, KMRs, and a range of end effectors.
                        They are responsible for transporting items to designated locations, and are actively engaged in
                        research and development, exploring new avenues for robotic 6D printing.
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
                    <AiOutlineTool className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold pt-6'>Manufacturing Team</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        The Manufacturing team is dedicated to automating and optimising 3D printing processes through
                        applications of LEAN. They work on preparing 3D printers, such as Prusa XLs, for automation and
                        are responsible for designing and implementing smart storage systems to hold completed jobs.
                        They are also involved in the design and development of custom components and tools, enhancing
                        the efficiency and sustainability of 3D printing services.
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
                    <HiOutlineCode className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold pt-6'>Software Team</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        The Software team is focused on improving user experience and operational efficiency. They
                        operate the Manufacturing Execution System (MES) responsible for automation of all systems. They
                        develop end-user applications that allow customers to monitor and receive updates about their 3D
                        printing jobs, and implement AI tools, including a warping detection system. They are also at
                        the helm of developing AR and VR digital twin experiences and applications, aiming to pioneer
                        new ways of visualising and interacting with manufacturing processes.
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
                    <AiOutlineExperiment className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold pt-6'>Research Team</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        The Research team is dedicated to advancing the field of manufacturing and automation through
                        academic research. Utilising the resources of the Digital Twin Manufacturing Lab, they strive to
                        publish in reputable journals and conferences. The subteam serves as a hub for innovation,
                        offering students the opportunity to engage in meaningful research projects and contribute to
                        the cutting-edge work of Monash Automation.
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
                    <BsGear className='text-5xl'/>
                    <h1 className='text-4xl text-black dark:text-white font-bold pt-6'>Operations Team</h1>
                    <p className='text-xl text-gray-600 dark:text-slate-300 pt-6'>
                        The Operations team is the backbone of Monash Automation, ensuring the visibility and
                        sustainability of the team’s various initiatives. They handle marketing, creating captivating
                        outreach materials and managing social media platforms to showcase the team's projects and
                        achievements. The finance department is responsible for budgeting, seeking donation and
                        sponsorship opportunities, and developing sustainable funding strategies for the team's
                        ambitious projects.
                    </p>
                </article>

                <div className='flex-1'>
                    <img src='/lab-old.jpg' alt='lab' className='rounded-2xl'/>
                </div>
            </section>
        </div>
    </>;
}