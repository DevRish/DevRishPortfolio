import React from 'react';
import { useState, useRef } from 'react';
import './App.css';
import Hero from './Components/jsx/Hero'
import Projects from './Components/jsx/Projects';
import Contact from './Components/jsx/Contact';
import About from './Components/jsx/About';
import Footer from './Components/jsx/Footer';
import ScrollToTop from './Components/jsx/ScrollToTop';

const App = () => {
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <>
            <ScrollToTop />
            <Hero projectRef={projectRef} aboutRef={aboutRef} contactRef={contactRef} />
            <Projects ref={projectRef} />
            <Contact ref={contactRef} />
            <About ref={aboutRef} />
            <Footer />
        </>
    )
}

export default App
