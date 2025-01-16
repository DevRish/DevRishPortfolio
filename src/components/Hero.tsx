import { HTMLProps, MutableRefObject, useState } from 'react';
// import './styles/Hero.css';
import DevSVG from './DevSVG';
import { FaArrowRight, FaBars, FaCode, FaFileAlt, FaInfo, FaLaptopCode, FaUser } from 'react-icons/fa';

const NavMdLi = ({children, ...props}: HTMLProps<HTMLLIElement>) => (
    <li className='py-[2rem] px-[2.5rem] h-full flex items-center text-white text-[1.6rem]' {...props}>{children}</li>
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
        <header className='w-[100vw] min-h-[100vh] bg-hero-gradient relative overflow-hidden z-50 animate-seeDown' >
            <div className={bgBoxClass + 'h-[200vh] w-[200vh] top-[67.5%] border-[15px] border-[#24506B] animate-box1'}></div>
            <div className={bgBoxClass + 'top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] h-[70vh] w-[70vh] border-[15px] border-[#1F465E] z-[2] animate-box2'}></div>
            <div className={bgBoxClass + 'h-[200vh] w-[200vh] bottom-[50%] border-[15px] border-[#0E3750] animate-box3'}></div>
            <div className='w-container flex-and-center flex-col mx-auto z-[5]'>
                <nav className='w-full flex justify-between items-center py-0 px-[5rem] z-[5]'>
                    <div className='text-white text-[2.8rem] font-semibold flex-and-center'>
                        <FaLaptopCode className='text-[3.6rem] mr-[1rem]' /> DevRish
                    </div>
                    <button className='hidden h-[100%] bg-transparent border-none text-[3rem]' onClick={() => setShowMenu(true)}><FaBars /></button>
                    <ul className='flex'>
                        <NavMdLi><button className='flex-and-center' onClick={ () => { scrollToElement(projectRef) } }><FaCode className='text-[1.8rem] mr-[0.25rem]' /> Projects</button></NavMdLi>
                        <NavMdLi><button className='flex-and-center' onClick={ () => { scrollToElement(aboutRef) } }><FaInfo className='mr-[0.25rem]' /> About</button></NavMdLi>
                        <NavMdLi><button className='flex-and-center' onClick={ () => { scrollToElement(contactRef) } }><FaUser className='mr-[0.25rem]' /> Contact</button></NavMdLi>
                        <NavMdLi>
                            <button
                                className='border-none text-white text-[1.6rem] font-normal bg-transparent cursor-pointer p-0'
                            >
                                <a 
                                    className='no-underline text-white text-[1.6rem] font-normal flex-and-center'
                                    href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf"
                                    download
                                ><FaFileAlt className='mr-[0.25rem]' /> Resume</a>
                            </button>
                        </NavMdLi>
                    </ul>
                </nav>
                {/* <div className={ 'hidden ' + (showMenu ? "mob-menu show" : "mob-menu hide") }> */}
                <div className={'hidden'}>
                    <button onClick={ () => { setShowMenu(false); }} ><FaArrowRight /></button>
                    <button onClick={ () => { scrollToElement(projectRef); setShowMenu(false); } }><FaCode /> Projects</button>
                    <button onClick={ () => { scrollToElement(aboutRef); setShowMenu(false); } }><FaInfo /> About</button>
                    <button onClick={ () => { scrollToElement(contactRef); setShowMenu(false); } }><FaUser /> Contact</button>
                    <button>
                        <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        ><FaFileAlt /> Resume</a>
                    </button>
                </div>
                <section className='w-full grid grid-cols-2 mt-[12.5vh] z-[5]'>
                    <div className='order-2 animate-fadein'>
                        <DevSVG className='w-[80%] block mx-auto' />
                    </div>
                    <div className='order-1 py-[10%] px-[5rem] animate-fadein'>
                        <h1 className='text-[2.8rem] mb-[2rem] text-white font-bold'>Hi, I am Rishav Chattopadhya.</h1>
                        <p className='text-[1.8rem] mb-[2.5rem] text-[rgb(218,218,218)]'>I will make your ideas come alive on the internet with my web development skills. Get your website built now!</p>
                        <div className='flex flex-row text-[1.8rem] font-semibold'>
                            <button className="hover:scale-110 border-none rounded-[10px] cursor-pointer py-[1.5rem] px-[2rem] bg-[#00131F] text-white mr-[2rem]" onClick={ () => { scrollToElement(contactRef) } }>Let's Talk</button>
                            <button className="hover:scale-110 rounded-[10px] cursor-pointer p-[1rem] bg-transparent text-[#8FB0C3] border-[5px] border-[#8FB0C3]" onClick={ () => { scrollToElement(projectRef) } }>View Projects</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
