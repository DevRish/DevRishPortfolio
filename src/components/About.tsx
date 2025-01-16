import { useState, forwardRef, useEffect, HTMLProps } from 'react';
// import './styles/About.css';
import Me from '../assets/Me.jpeg';
import { FaArrowLeft, FaArrowRight, FaCircle, FaEnvelope, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLink = ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <a className='text-[4rem] text-[#0B2935] mr-[2.5rem]' {...props}>{children}</a>
);

type IconData = {
    imgLink: string;
    imgAlt: string;
    linkTo: string;
}

const IconSet = ({ iconData, ...props }: { iconData: IconData[] } & HTMLProps<HTMLDivElement>) => (
    <div className='w-[80%] my-[2rem] mx-auto grid grid-cols-4 gap-[2rem]' {...props}>
        {
            iconData.map((icon) => (
                <a href={icon.linkTo} target="_blank">
                    <img className='max-w-full max-h-full' src={icon.imgLink} alt={icon.imgAlt} />
                </a>
            ))
        }
    </div>
);

type CarouselSlide = {
    heading: string;
    content: JSX.Element;
}

const Carousel = ({ slides, ...props }: { slides: CarouselSlide[] } & HTMLProps<HTMLDivElement>) => {
    const caroBtnStyle = 'absolute top-[50%] translate-y-[-50%] h-full border-none rounded-[10px] ' + 
                        'text-[2.4rem] text-white bg-[#0B2935] cursor-pointer z-10 px-[2rem] py-[1rem]';
    const CarouselHeading = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
        <h2 className='text-[2.4rem] text-[#0B2935] w-full text-center font-bold' {...props}>{children}</h2>
    );
    const CarouselIndexBtnSet = ({ ...props }: HTMLProps<HTMLDivElement>) => (
        <div {...props}>
            {
                [...Array(slides.length)].map((_, i) => (
                    <button 
                        className={
                            'bg-transparent border-none mx-[1rem] cursor-pointer ' +
                            (
                                (caroIndex===i) ?
                                'text-[1.8rem] text-[#0B2935]' :
                                'text-[1.6rem] text-[#3b7288]'
                            )
                        }
                        onClick={() => { setCaroIndex(i) }}
                    ><FaCircle /></button>
                ))
            }
        </div>
    );
    const [caroIndex,setCaroIndex] = useState(0);
    return (
        <div className='w-full h-full' {...props}>
            {/* Slides */}
            <div className='relative overflow-x-hidden w-full h-[90%]'>
                <div 
                    className={`relative h-full transition-all duration-1000 ease-linear`}
                    // Read: https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss
                    style={{
                        width: `${slides.length * 100}%`,
                        transform: `translateX(-${(caroIndex/slides.length) * 100}%)`,
                    }}
                >
                    {
                        slides.map((slide, i) => (
                            <div 
                                className={`absolute pb-[1rem] top-0 px-[2rem]`}
                                style={{
                                    width: `${100/slides.length}%`,
                                    left: `${(i/slides.length)*100}%`,
                                }}
                            >
                                <CarouselHeading>{slide.heading}</CarouselHeading>
                                {slide.content}
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Control Buttons */}
            <div className='flex-and-center relative w-full h-[10%]'>
                <button 
                    className={caroBtnStyle + ' left-0'}
                    onClick={() => {
                        if(caroIndex===0) setCaroIndex(slides.length - 1);
                        else setCaroIndex(caroIndex-1);
                    }}
                ><FaArrowLeft /></button>
                <button 
                    className={caroBtnStyle + ' right-0'} 
                    onClick={ () => {
                        if(caroIndex===(slides.length - 1)) setCaroIndex(0);
                        else setCaroIndex(caroIndex+1);
                    }}
                ><FaArrowRight /></button>
                <CarouselIndexBtnSet />
            </div>
        </div>
    );
}

const Introduction = () => (
    <>
        <p className='text-[2rem] text-[#0B2935] w-full my-[2rem] mx-0'>
            I am a full stack web developer. I specialize in working with the MERN stack.
            I am currently pursuing B.Tech. in Computer Science and Engineering from 
            Heritage Institute Of Technology, Kolkata. I love to learn and try out new things.
            I am also a competetive programmer and have 3 star rating on Codechef. <br /><br />
            Thanks for visiting my website!
        </p>
        <div className="flex items-center">
            <SocialLink href="mailto:rishavchatterjee1546@gmail.com"><FaEnvelope /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/rishav-chattopadhya-833850204/" target="_blank"><FaLinkedin /></SocialLink>
            <SocialLink href="https://github.com/DevRish" target="_blank"><FaGithub /></SocialLink>
            <SocialLink href="https://raw.githubusercontent.com/DevRish/DevRishResume/main/Resume.pdf" download
                className='text-[2rem] no-underline bg-[#0B2935] text-white p-[1rem] rounded-[10px] flex-and-center'
            >
                <FaFile className='mr-[1rem]' /> My Resume
            </SocialLink>
        </div>
    </>
);

const skillsIconData = [
    {
        linkTo: 'https://reactjs.org/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        imgAlt: 'ReactJS',
    },
    {
        linkTo: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        imgAlt: 'HTML5',
    },
    {
        linkTo: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        imgAlt: 'CSS3',
    },
    {
        linkTo: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        imgAlt: 'Javascript',
    },
    {
        linkTo: 'https://getbootstrap.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        imgAlt: 'Bootstrap',
    },
    {
        linkTo: 'https://www.mongodb.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
        imgAlt: 'MongoDB',
    },
    {
        linkTo: 'https://expressjs.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
        imgAlt: 'ExpressJS',
    },
    {
        linkTo: 'https://nodejs.org/en/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        imgAlt: 'NodeJS',
    },
];

const toolsIconData = [
    {
        linkTo: 'https://code.visualstudio.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg',
        imgAlt: 'VSCode',
    },
    {
        linkTo: 'https://en.wikipedia.org/wiki/Windows_10',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg',
        imgAlt: 'Windows',
    },
    {
        linkTo: 'https://www.linux.org/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        imgAlt: 'Linux',
    },
    {
        linkTo: 'https://git-scm.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg',
        imgAlt: 'Git',
    },
    {
        linkTo: 'https://www.figma.com',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
        imgAlt: 'Figma',
    },
    {
        linkTo: 'https://www.adobe.com/in/products/photoshop.html',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg',
        imgAlt: 'Photoshop',
    },
];

const achievementData = [
    'Achieved 3 star rating on Codechef.',
    'Participated in Hacktoberfest 2021 and successfully completed more than four contributions.',
    'Participated in Google 30 Days of Cloud and successfully completed both tracks.',
];

const Achievements = ({ data }: { data: string[] }) => (
    <ul className='w-full ml-[5%] list-disc'>
        {
            data.map((d) => (
                <li className='text-[2rem] text-[#0B2935] w-full my-[2rem] mx-0'>{d}</li>
            ))
        }
    </ul>
);

const About = forwardRef<HTMLDivElement, any>((_, ref) => {

    const [vis,setVis] = useState(0);
    const handleScroll = () => {
        const divRef = ref as React.MutableRefObject<HTMLDivElement | null>;
        if(divRef.current !== null)
        {
            const pixelsScrolled = (window.pageYOffset - divRef.current.offsetTop + window.innerHeight);
            const compHeight = divRef.current.clientHeight;
            const percentScrolled = (pixelsScrolled/compHeight)*100;
            if(percentScrolled<40 && vis!==0) setVis(0);
            if(percentScrolled>=40 && vis!==1) setVis(1);
        }
    }
    window.addEventListener('scroll', handleScroll);

    const [imgVis,setImgVis] = useState('opacity-0 scale-0');
    const [descVis,setDescVis] = useState('opacity-0 translate-y-[50%]');
    useEffect(() => {
        setImgVis(vis ? 'opacity-100 scale-100' : 'opacity-0 scale-0');
        setDescVis(vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50%]');
    }, [vis]);

    return (
        <div className='w-[100vw] overflow-x-hidden' ref={ref}>
            <div className='w-container flex-and-center flex-col mx-auto py-[3rem] about'>
                <h1 className='w-full text-center text-[3.6rem] font-bold text-[#0B2935]'>ABOUT ME</h1>
                <div className='w-full grid grid-cols-5 my-[3rem]'>
                    <div className={
                        `col-span-2 flex-and-center z-10 ${imgVis} transition-all duration-1000 ease-linear ` +
                        // before: for styling top left rectangle
                        "before:absolute before:top-0 before:left-0 before:content-[''] " + 
                        "before:border-[8px] before:border-[#4d7a963d] before:rounded-[20px] " +
                        "before:h-[18rem] before:w-[18rem] before:translate-y-[-50%] " +
                        // after: for styling botton right rectangle
                        "after:absolute after:bottom-0 after:right-0 after:content-[''] " + 
                        "after:border-[5px] after:border-[#7fadc99f] after:rounded-[20px] " +
                        "after:h-[10rem] after:w-[10rem] after:translate-y-[50%] after:translate-x-[-20%]"
                    }>
                        <img className={'block relative m-auto h-[60vh] rounded-[10px] border-[#0B2935] border-[8px] z-10'} src={Me} alt="MyImage"/>
                    </div>
                    <div className={
                        `col-span-3 z-10 ${descVis} transition-all duration-1000 ease-linear ` +
                        'border-[0.5rem] border-[#0b29355e] rounded-[20px] p-[5%] h-[60vh] relative ' +
                        // after: bottom right rectangle
                        "after:absolute after:bottom-0 after:right-0 after:content-[''] " +
                        "after:border-[5px] after:border-[#7fadc99f] after:rounded-[20px] " +
                        "after:h-[10rem] after:w-[10rem] after:translate-y-[50%] after:translate-x-[50%]"
                    }>
                        <Carousel 
                            slides={[
                                {
                                    heading: 'Hi! I am Rishav Chattopadhya',
                                    content: <Introduction />
                                },
                                {
                                    heading: 'Some languages and libraries I use',
                                    content: <IconSet iconData={skillsIconData} />
                                },
                                {
                                    heading: 'Tools I usually work with',
                                    content: <IconSet iconData={toolsIconData} />
                                },
                                {
                                    heading: 'Some of my Achievements',
                                    content: <Achievements data={achievementData} />
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About
