import React from 'react';
import {useRef, useState, forwardRef} from 'react';
import './../css/Project.css';
import MartCartImg from './../../Assets/MartcartMockups.png';
import FramezyImg from './../../Assets/FramezyMockups.png';
import NotesAppImg from './../../Assets/NotesAppMockups.png';

const Projects = forwardRef((props, ref) => {
    // const comp = useRef(null);
    const [vis,setVis] = useState(0);
    //var flag = 0; // I will use it to check if animation has been played once
    const handleScroll = () => {
        if(ref.current !== null)
        {
            var pixelsScrolled = (window.pageYOffset - ref.current.offsetTop + window.innerHeight);
            var compHeight = ref.current.clientHeight;
            // console.log(window.pageYOffset - comp.current.offsetTop + window.innerHeight);
            var percentScrolled = (pixelsScrolled/compHeight)*100;
            // console.log(percentScrolled);
            if(percentScrolled<20 && vis!==0) setVis(0);
            if(percentScrolled>=20 && percentScrolled<50 && vis!==1) setVis(1);
            if(percentScrolled>=50 && percentScrolled<80 && vis!==2) setVis(2);
            if(percentScrolled>80 && vis!==3) setVis(3);
            // console.log(vis);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <div style={{ width: '100vw', overflowX: 'hidden', overflowY: 'visible'}}>
            <div ref={ref} className='container projects'>
                <h1 className='mainHeading'>MY PROJECTS</h1>
                <div className="projectbgbox1"></div>
                <div className="projectbgbox2"></div>
                <div className="projectbgbox3"></div>
                <div className="gridCon project">
                    <div className={ (vis>=1) ? "gridConImg gridConImgAnimate" : "gridConImg" }>
                        <img src={MartCartImg} alt="MartcartProjectImage"/>
                    </div>
                    <div className={ (vis>=1) ? "gridConDesc gridConDescAnimate" : "gridConDesc" }>
                        <h2>MartCart</h2>
                        <p>An ecommerce website where you can buy items</p>
                        <ul>
                            <li>99% responsive design</li>
                            <li>Single Page Application using React RouterDOM</li>
                            <li>Lightweight website with compressed images</li>
                            <li>Data stored in real-time MongoDB database</li>
                        </ul>
                        <div className="projectButtons">
                            <a href='https://martcartdevrish.herokuapp.com/' className="projbtnprim" target="_blank"> <i className="fas fa-eye"></i> Visit </a>
                            <a href='https://github.com/DevRish/martcart' className="projbtnsec" target="_blank"> <i className="fab fa-github"></i> Github Repo </a>
                        </div>
                    </div>
                </div>
                <div className="gridCon project">
                    <div className={ (vis>=2) ? "gridConImg gridConImgAnimate" : "gridConImg" }>
                        <img src={FramezyImg} alt="MartcartProjectImage"/>
                    </div>
                    <div className={ (vis>=2) ? "gridConDesc gridConDescAnimate" : "gridConDesc" }>
                        <h2>Framezy</h2>
                        <p>An ecommerce website where you can buy items</p>
                        <ul>
                            <li>99% responsive design</li>
                            <li>Lightweight website with compressed images</li>
                            <li>Focussed on making UX following recent trends</li>
                            <li>Enhanced mobile experience</li>
                        </ul>
                        <div className="projectButtons">
                            <a href='https://devrish.github.io/Framezy/' className="projbtnprim" target="_blank"> <i className="fas fa-eye"></i> Visit </a>
                            <a href='https://github.com/DevRish/Framezy' className="projbtnsec" target="_blank"> <i className="fab fa-github"></i> Github Repo </a>
                        </div>
                    </div>
                </div>
                <div className="gridCon project">
                    <div className={ (vis>=3) ? "gridConImg gridConImgAnimate" : "gridConImg" }>
                        <img src={NotesAppImg} alt="MartcartProjectImage"/>
                    </div>
                    <div className={ (vis>=3) ? "gridConDesc gridConDescAnimate" : "gridConDesc" }>
                        <h2>NotesApp</h2>
                        <p>A CRUD app where a user can take notes</p>
                        <ul>
                            <li>99% responsive design</li>
                            <li>Single Page Application using React RouterDOM</li>
                            <li>Restricted routes protected using JWT</li>
                            <li>Data stored in real-time MongoDB database</li>
                        </ul>
                        <div className="projectButtons">
                            <a href='http://notesappdevrish.herokuapp.com/' className="projbtnprim" target="_blank"> <i className="fas fa-eye"></i> Visit </a>
                            <a href='https://github.com/DevRish/notes-app' className="projbtnsec" target="_blank"> <i className="fab fa-github"></i> Github Repo </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Projects
