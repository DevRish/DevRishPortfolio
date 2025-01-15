import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const scrollToTheTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const [vis,setVis] = useState(false);
    const handleScroll = () => {
        if((window.scrollY > window.innerHeight) && (!vis)) setVis(true);
        if((window.scrollY <= window.innerHeight) && (vis)) setVis(false);
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <button 
            onClick={ () => { scrollToTheTop() }} 
            className={`fixed bottom-[5vh] right-[5vw] bg-[rgb(5,22,29)] border-0 rounded-full h-[7rem] w-[7rem] cursor-pointer z-20 ${vis ? 'block' : 'hidden'}`}
        >
            <FaArrowUp className='m-auto text-white text-[3rem]' />
        </button>
    )
}

export default ScrollToTop
