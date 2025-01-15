import { useRef } from 'react';
import Hero from './components/Hero'
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
