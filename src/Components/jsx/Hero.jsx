import React from 'react';
import { useState } from 'react';
import './../css/Hero.css';
import DevSVG from './DevSVG';

const Hero = (props) => {
    const scrollToElement = (ele) => {
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
                    <div className="brand"><i className="fas fa-laptop-code"></i> DevRish</div>
                    <button className="burgerMenu" onClick={() => setShowMenu(true)}><i className="fas fa-bars"></i></button>
                    <ul>
                        <li><button onClick={ () => { scrollToElement(props.projectRef) } }><i className="fas fa-code"></i> Projects</button></li>
                        <li><button onClick={ () => { scrollToElement(props.aboutRef) } }><i className="fas fa-info"></i> About</button></li>
                        <li><button onClick={ () => { scrollToElement(props.contactRef) } }><i className="fas fa-user"></i> Contact</button></li>
                        <li>
                            <button>
                                <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download><i className="far fa-file-alt"></i> Resume</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className={ showMenu ? "mob-menu show" : "mob-menu hide" }>
                    <button onClick={ () => { setShowMenu(false); }} ><i className="fas fa-arrow-right"></i></button>
                    <button onClick={ () => { scrollToElement(props.projectRef); setShowMenu(false); } }><i className="fas fa-code"></i> Projects</button>
                    <button onClick={ () => { scrollToElement(props.aboutRef); setShowMenu(false); } }><i className="fas fa-info"></i> About</button>
                    <button onClick={ () => { scrollToElement(props.contactRef); setShowMenu(false); } }><i className="fas fa-user"></i> Contact</button>
                    <button>
                        <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        ><i className="far fa-file-alt"></i> Resume</a>
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
                            <button className="btn primary" onClick={ () => { scrollToElement(props.contactRef) } }>Let's Talk</button>
                            <button className="btn secondary" onClick={ () => { scrollToElement(props.projectRef) } }>View Projects</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Hero
