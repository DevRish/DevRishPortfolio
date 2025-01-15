import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const scrollToTheTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const [vis,setVis] = useState(0);
    const handleScroll = () => {
        if((window.scrollY > window.innerHeight) && (vis===0)) setVis(1);
        if((window.scrollY <= window.innerHeight) && (vis===1)) setVis(0);
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <button id='scrollToTopButton' onClick={ () => { scrollToTheTop() }} style={{
            position: 'fixed',
            bottom: '5vh',
            right: '5vw',
            color: 'white',
            backgroundColor: 'rgb(5, 22, 29)',
            borderStyle: 'none',
            borderRadius: '50%',
            fontSize: '3rem',
            height: '7rem',
            width: '7rem',
            textAlign: 'center',
            cursor: 'pointer',
            zIndex: '20',
            display: `${ (vis===1) ? 'block' : 'none' }`
        }}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop
