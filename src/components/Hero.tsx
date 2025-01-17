import { ButtonHTMLAttributes, HTMLProps, MutableRefObject, useState } from 'react';
import DevSVG from './DevSVG';
import { FaArrowRight, FaBars, FaCode, FaFileAlt, FaInfo, FaLaptopCode, FaUser } from 'react-icons/fa';

const NavItemMd = ({children, ...props}: HTMLProps<HTMLLIElement>) => (
    <li className='py-[2rem] px-[2.5rem] h-full flex items-center text-white text-[1.6rem]' {...props}>{children}</li>
);

const NavItemSm = ({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={
        'w-full bg-white text-[#00131F] text-[4vh] flex-and-center py-[4vh] border-0 border-b-[2px] border-black'
    } {...props}>{children}</button>
);

interface IHeroProps {
    projectRef: MutableRefObject<any>;
    aboutRef: MutableRefObject<any>;
    contactRef: MutableRefObject<any>;
}

const Hero = ({ projectRef, aboutRef, contactRef  }: IHeroProps) => {
    const scrollToElement = (ele: MutableRefObject<any>) => {
        ele.current.scrollIntoView({ behavior: 'smooth' });
    }
    const [showMenu,setShowMenu] = useState(false);
    const bgBoxClass = 'absolute bg-transparent rounded-[30px] z-[1] ';
    return (
        <header className='w-[100vw] min-h-[100vh] bg-hero-gradient relative overflow-hidden z-50 sm:animate-seeDownSm md:animate-seeDown' >
            <div className={bgBoxClass + 'h-[200vh] w-[200vh] top-[67.5%] border-[15px] border-[#24506B] animate-box1'}></div>
            <div className={
                bgBoxClass + 
                'top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] h-[70vh] w-[70vh] ' + 
                'border-[15px] border-[#1F465E] z-[2] animate-box2'
            }></div>
            <div className={bgBoxClass + 'h-[200vh] w-[200vh] bottom-[50%] border-[15px] border-[#0E3750] animate-box3'}></div>
            <div className='w-container flex-and-center flex-col mx-auto z-[5]'>
                <nav className={
                    'w-full flex justify-between items-center py-0 px-[5rem] z-[5] ' + 
                    'sm:pt-[1.5rem] sm:pl-[5%] sm:pr-[5%]'
                }>
                    <div className='text-white text-[2.8rem] font-semibold flex-and-center'>
                        <FaLaptopCode className='text-[3.6rem] mr-[1rem]' /> DevRish
                    </div>
                    <button className='md:hidden sm:block h-[100%] bg-transparent border-none text-[3rem] text-white' onClick={() => setShowMenu(true)}><FaBars /></button>
                    <ul className='flex sm:hidden'>
                        <NavItemMd><button className='flex-and-center' onClick={ () => { scrollToElement(projectRef) } }><FaCode className='text-[1.8rem] mr-[0.25rem]' /> Projects</button></NavItemMd>
                        <NavItemMd><button className='flex-and-center' onClick={ () => { scrollToElement(aboutRef) } }><FaInfo className='mr-[0.25rem]' /> About</button></NavItemMd>
                        <NavItemMd><button className='flex-and-center' onClick={ () => { scrollToElement(contactRef) } }><FaUser className='mr-[0.25rem]' /> Contact</button></NavItemMd>
                        <NavItemMd>
                            <button
                                className='border-none text-white text-[1.6rem] font-normal bg-transparent cursor-pointer p-0'
                            >
                                <a 
                                    className='no-underline text-white text-[1.6rem] font-normal flex-and-center'
                                    href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf"
                                    download
                                ><FaFileAlt className='mr-[0.25rem]' /> Resume</a>
                            </button>
                        </NavItemMd>
                    </ul>
                </nav>
                <div className={
                    'md:hidden fixed flex flex-col top-0 right-0 h-[100vh] w-[100vw] bg-white z-[999] transition-transform duration-1000 ease-linear ' +
                    (showMenu ? 'translate-x-0' : 'translate-x-[100%]')
                }>
                    <NavItemSm onClick={ () => { setShowMenu(false); }} ><FaArrowRight /></NavItemSm>
                    <NavItemSm onClick={ () => { scrollToElement(projectRef); setShowMenu(false); } }><FaCode className='mr-[1rem]' /> Projects</NavItemSm>
                    <NavItemSm onClick={ () => { scrollToElement(aboutRef); setShowMenu(false); } }><FaInfo className='mr-[1rem]' /> About</NavItemSm>
                    <NavItemSm onClick={ () => { scrollToElement(contactRef); setShowMenu(false); } }><FaUser className='mr-[1rem]' /> Contact</NavItemSm>
                    <NavItemSm>
                        <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download
                            className='no-underline text-inherit flex-and-center'
                        ><FaFileAlt className='mr-[1rem]' /> Resume</a>
                    </NavItemSm>
                </div>
                <section className='w-full sm:block sm:mt-[5rem] md:grid grid-cols-2 mt-[12.5vh] z-[5]'>
                    <div className='order-2 animate-fadein'>
                        <DevSVG className='w-[80%] block mx-auto' />
                    </div>
                    <div className='order-1 py-[10%] px-[5rem] animate-fadein sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-[10%] sm:pb-[20%]'>
                        <h1 className='text-[2.8rem] mb-[2rem] text-white font-bold sm:text-center'>Hi, I am Rishav Chattopadhyay.</h1>
                        <p className='text-[1.8rem] mb-[2.5rem] text-[rgb(218,218,218)] sm:text-center'>I will make your ideas come alive on the internet with my web development skills. Get your website built now!</p>
                        <div className='flex flex-row text-[1.8rem] font-semibold sm:flex-col sm:w-full sm:justify-center sm:items-center'>
                            <button className="sm:w-full sm:mr-0 sm:mb-[1.5rem] hover:scale-110 border-none rounded-[10px] cursor-pointer py-[1.5rem] px-[2rem] bg-[#00131F] text-white mr-[2rem]" onClick={ () => { scrollToElement(contactRef) } }>Let's Talk</button>
                            <button className="sm:w-full hover:scale-110 rounded-[10px] cursor-pointer p-[1rem] bg-transparent text-[#8FB0C3] border-[5px] border-[#8FB0C3]" onClick={ () => { scrollToElement(projectRef) } }>View Projects</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
