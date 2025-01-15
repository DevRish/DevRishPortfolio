import { MutableRefObject, useState } from 'react';
import './styles/Hero.css';
import DevSVG from './DevSVG';
import { FaArrowRight, FaBars, FaCode, FaFileAlt, FaInfo, FaLaptopCode, FaUser } from 'react-icons/fa';

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
    return (
        <header>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="container">
                <nav>
                    <div className="brand"><FaLaptopCode /> DevRish</div>
                    <button className="burgerMenu" onClick={() => setShowMenu(true)}><FaBars /></button>
                    <ul>
                        <li><button onClick={ () => { scrollToElement(projectRef) } }><FaCode /> Projects</button></li>
                        <li><button onClick={ () => { scrollToElement(aboutRef) } }><FaInfo /> About</button></li>
                        <li><button onClick={ () => { scrollToElement(contactRef) } }><FaUser /> Contact</button></li>
                        <li>
                            <button>
                                <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download><FaFileAlt /> Resume</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className={ showMenu ? "mob-menu show" : "mob-menu hide" }>
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
                <section className="hero">
                    <div className="heroimg">
                        <DevSVG />
                    </div>
                    <div className="herodesc">
                        <h1>Hi, I am Rishav Chattopadhya.</h1>
                        <p>I will make your ideas come alive on the internet with my web development skills. Get your website built now!</p>
                        <div className="cta">
                            <button className="btn primary" onClick={ () => { scrollToElement(contactRef) } }>Let's Talk</button>
                            <button className="btn secondary" onClick={ () => { scrollToElement(projectRef) } }>View Projects</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
