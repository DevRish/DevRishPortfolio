import React from 'react';
import { useState, useRef, forwardRef } from 'react';
import './../css/About.css';
import Me from './../../Assets/Me.jpeg';

const About = forwardRef((props,ref) => {
    const [caroIndex,setCaroIndex] = useState(0);
    // const comp = useRef(null);
    const [vis,setVis] = useState(0);
    const handleScroll = () => {
        if(ref.current !== null)
        {
            var pixelsScrolled = (window.pageYOffset - ref.current.offsetTop + window.innerHeight);
            var compHeight = ref.current.clientHeight;
            var percentScrolled = (pixelsScrolled/compHeight)*100;
            if(percentScrolled<40 && vis!==0) setVis(0);
            if(percentScrolled>=40 && vis!==1) setVis(1);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <div style={{ width: '100vw', overflowX: 'hidden'}}>
            <div className='container about' ref={ref}>
                <h1 className="mainHeading">ABOUT ME</h1>
                <div className="gridCon">
                    <div className={ (vis===1) ? "gridConImg gridConImgAnimate" : "gridConImg"}>
                        <img src={Me} alt="MyImage"/>
                    </div>
                    <div className={ (vis===1) ? "gridConDesc gridConDescAnimate" : "gridConDesc" }>
                        <div className="carousel">
                            <div className="caroTrackContainer">
                                <div className="caroTrack" style={{ transform: `translateX(-${caroIndex*25}%)` }}>
                                    <div className="personalInfo">
                                        <h2>Hi! I am Rishav Chattopadhya</h2>
                                        <p>
                                            I am a full stack web developer. I specialize in working with the MERN stack.
                                            I am currently pursuing B.Tech. in Computer Science and Engineering from 
                                            Heritage Institute Of Technology, Kolkata. I love to learn and try out new things.
                                            I am also a competetive programmer and have 3 star rating on Codechef. <br /><br />
                                            Thanks for visiting my website!
                                        </p>
                                        <div className="socialLinks">
                                            <a href="mailto:rishavchatterjee1546@gmail.com"><i className="fas fa-envelope"></i></a>
                                            <a href="https://www.linkedin.com/in/rishav-chattopadhya-833850204/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                            <a href="https://github.com/DevRish" target="_blank"><i className="fab fa-github"></i></a>
                                            <a href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download
                                                style={{ 
                                                    fontSize: '1.6rem', 
                                                    textDecoration: 'none',
                                                    backgroundColor: '#0B2935', 
                                                    color: 'white', 
                                                    padding: '1rem',
                                                    borderRadius: '10px'
                                                }}><i className="far fa-file-alt"></i> My Resume
                                            </a>
                                        </div>
                                    </div>
                                    <div className="Skills">
                                        <h2>Some languages and libraries I use</h2>
                                        <div className="skillIcons">
                                            <a href="https://reactjs.org/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS"/>
                                            </a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5"/>
                                            </a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3"/>
                                            </a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript"/>
                                            </a>
                                            <a href="https://getbootstrap.com/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap"/>
                                            </a>
                                            <a href="https://www.mongodb.com/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB"/>
                                            </a>
                                            <a href="https://expressjs.com/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="ExpressJS"/>
                                            </a>
                                            <a href="https://nodejs.org/en/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="Tools">
                                        <h2>Tools I usually work with</h2>
                                        <div className="toolIcons">
                                            <a href="https://code.visualstudio.com/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg" alt="VSCode" />
                                            </a>
                                            <a href="https://en.wikipedia.org/wiki/Windows_10" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg" alt="Windows" />
                                            </a>
                                            <a href="https://www.linux.org/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" />
                                            </a>
                                            <a href="https://git-scm.com/" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" alt="Git" />
                                            </a>
                                            <a href="https://www.figma.com" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Figma" />
                                            </a>
                                            <a href="https://www.adobe.com/in/products/photoshop.html" target="_blank">
                                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="achievements">
                                        <h2>Some of my Achievements</h2>
                                        <ul>
                                            <li>Achieved 3 star rating on Codechef.</li>
                                            <li>Participated in Hacktoberfest 2021 and successfully completed more than four contributions.</li>
                                            <li>Participated in Google 30 Days of Cloud and successfully completed both tracks.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="caroButtonContainer">
                                <button className='caroLeftBtn' onClick={ () => {
                                    if(caroIndex===0) setCaroIndex(3);
                                    else setCaroIndex(caroIndex-1);
                                } }><i className="fas fa-arrow-left"></i></button>
                                <button className='caroRightBtn' onClick={ () => {
                                    if(caroIndex===3) setCaroIndex(0);
                                    else setCaroIndex(caroIndex+1);
                                } }><i className="fas fa-arrow-right"></i></button>
                                <div className="caroIndexBtns">
                                    <button 
                                        className={ (caroIndex===0) ? 'caroIndexBtnActive' : 'caroIndexBtnInactive' }
                                        onClick={ () => { setCaroIndex(0) } 
                                    }><i className="fas fa-circle"></i></button>
                                    <button className={ (caroIndex===1) ? 'caroIndexBtnActive' : 'caroIndexBtnInactive' }
                                        onClick={ () => { setCaroIndex(1) } 
                                    }><i className="fas fa-circle"></i></button>
                                    <button className={ (caroIndex===2) ? 'caroIndexBtnActive' : 'caroIndexBtnInactive' }
                                        onClick={ () => { setCaroIndex(2) } 
                                    }><i className="fas fa-circle"></i></button>
                                    <button className={ (caroIndex===3) ? 'caroIndexBtnActive' : 'caroIndexBtnInactive' }
                                        onClick={ () => { setCaroIndex(3) } 
                                    }><i className="fas fa-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About
