import { useState, forwardRef, useEffect, HTMLProps, JSX } from 'react';
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
    <div className='w-[80%] my-[2rem] mx-auto grid grid-cols-4 gap-[2rem] sm:grid-cols-3 sm:gap-[2.5rem]' {...props}>
        {
            iconData.map((icon, i) => (
                <a href={icon.linkTo} target="_blank" key={i}>
                    <img className='max-w-full max-h-full'  src={icon.imgLink} alt={icon.imgAlt} />
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
                        key={i}
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
                                key={i}
                            >
                                <CarouselHeading>{slide.heading}</CarouselHeading>
                                {slide.content}
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Control Buttons */}
            <div className='flex-and-center relative w-full h-[10%] sm:mt-[1rem]'>
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
        <p className='text-[2rem] sm:text-[1.8rem] text-[#0B2935] w-full my-[2rem] mx-0'>
            I am a passionate full stack developer crafting dynamic and high-performing websites.
            I thrive in collaborative environments and approach challenges with a focus on efficiency and scalability,
            to deliver quality solutions that enhance user engagement and business growth.
            <br /><br />
            Let&apos;s connect!
        </p>
        <div className="flex items-center">
            <SocialLink href="mailto:rishavchatterjee1546@gmail.com"><FaEnvelope /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/rishav-chattopadhyay-833850204/" target="_blank"><FaLinkedin /></SocialLink>
            <SocialLink href="https://github.com/DevRish" target="_blank"><FaGithub /></SocialLink>
            <SocialLink href="https://drive.google.com/file/d/1k9WNmRv1O97aXYz8BN5NpUy5maRMokqH/view?usp=sharing" target="_blank"
                className='text-[2rem] sm:text-[1.5rem] no-underline bg-[#0B2935] text-white p-[1rem] rounded-[10px] flex-and-center'
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
        linkTo: 'https://nextjs.org/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg',
        imgAlt: 'NextJS',
    },
    {
        linkTo: 'https://tailwindcss.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
        imgAlt: 'TailwindCSS',
    },
    {
        linkTo: 'https://www.typescriptlang.org/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        imgAlt: 'Typescript',
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
    {
        linkTo: 'https://spring.io/projects/spring-boot',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
        imgAlt: 'SpringBoot',
    },
    {
        linkTo: 'https://www.java.com/en/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        imgAlt: 'Java',
    },
];

const toolsIconData = [
    {
        linkTo: 'https://www.gnu.org/software/bash/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg',
        imgAlt: 'Bash',
    },
    {
        linkTo: 'https://git-scm.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg',
        imgAlt: 'Git',
    },
    {
        linkTo: 'https://www.mongodb.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
        imgAlt: 'MongoDB',
    },
    {
        linkTo: 'https://www.postgresql.org/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
        imgAlt: 'Postgresql',
    },
    {
        linkTo: 'https://www.docker.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
        imgAlt: 'Docker',
    },
    {
        linkTo: 'https://www.rabbitmq.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original.svg',
        imgAlt: 'RabbitMQ',
    },
    {
        linkTo: 'https://aws.amazon.com/',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        imgAlt: 'AWS',
    },
    {
        linkTo: 'https://www.figma.com',
        imgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
        imgAlt: 'Figma',
    },
];

const infoData = [
    'Graduated with a B.Tech. in Computer Science & Engineering in 2024',
    'Skilled in problem-solving and DSA with 1500+ rating on Leetcode and 1600+ rating on Codechef',
    'Contributed to Open Source Projects in events like HacktoberFest and GirlScript Summer of Code',
];

const MoreInfo = ({ data }: { data: string[] }) => (
    <ul className='w-full ml-[5%] list-disc'>
        {
            data.map((d, i) => (
                <li className='text-[2rem] sm:text-[1.8rem] text-[#0B2935] w-full my-[2rem] mx-0' key={i}>{d}</li>
            ))
        }
    </ul>
);

const About = forwardRef<HTMLDivElement, any>((_, ref) => {

    const [vis,setVis] = useState(0);

    useEffect(() => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const [imgVis,setImgVis] = useState('opacity-0 scale-0');
    const [descVis,setDescVis] = useState('opacity-0 translate-y-[50%]');
    useEffect(() => {
        setImgVis(vis ? 'opacity-100 scale-100' : 'opacity-0 scale-0');
        setDescVis(vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50%]');
    }, [vis]);

    return (
        <div className='w-[100vw] overflow-x-hidden' ref={ref}>
            <div className='w-container flex-and-center flex-col mx-auto py-[3rem] sm:overflow-hidden sm:px-[2rem]'>
                <h1 className='w-full text-center text-[3.6rem] font-bold text-[#0B2935]'>ABOUT ME</h1>
                <div className='w-full sm:block md:grid grid-cols-5 my-[3rem]'>
                    <div className={
                        `col-span-2 flex-and-center z-10 ${imgVis} transition-all duration-1000 ease-linear sm:mb-[7.5rem] ` +
                        // before: for styling top left rectangle
                        "before:absolute before:top-0 before:left-0 before:content-[''] " + 
                        "before:border-[8px] before:border-[#4d7a963d] before:rounded-[20px] " +
                        "before:h-[18rem] before:w-[18rem] before:translate-y-[-50%] " +
                        // after: for styling botton right rectangle
                        "after:absolute after:bottom-0 after:right-0 after:content-[''] " + 
                        "after:border-[5px] after:border-[#7fadc99f] after:rounded-[20px] " +
                        "after:h-[10rem] after:w-[10rem] after:translate-y-[50%] after:translate-x-[-20%]"
                    }>
                        <img 
                            className={'block relative m-auto sm:h-[40vh] h-[60vh] rounded-[10px] border-[#0B2935] border-[8px] z-10'}
                            src={Me.src} alt='MyImage'
                        />
                    </div>
                    <div className={
                        `col-span-3 z-10 ${descVis} transition-all duration-1000 ease-linear sm:flex sm:flex-col sm:justify-center sm:items-center ` +
                        'border-[0.5rem] border-[#0b29355e] rounded-[20px] p-[5%] h-[60vh] relative ' +
                        // after: bottom right rectangle
                        "after:absolute after:bottom-0 after:right-0 after:content-[''] " +
                        "after:border-[5px] after:border-[#7fadc99f] after:rounded-[20px] " +
                        "after:h-[10rem] after:w-[10rem] after:translate-y-[50%] after:translate-x-[50%]"
                    }>
                        <Carousel 
                            slides={[
                                {
                                    heading: 'Hi! I am Rishav Chattopadhyay',
                                    content: <Introduction />
                                },
                                {
                                    heading: 'Some libraries and languages I use',
                                    content: <IconSet iconData={skillsIconData} />
                                },
                                {
                                    heading: 'Familiar Tools & Technologies',
                                    content: <IconSet iconData={toolsIconData} />
                                },
                                {
                                    heading: 'More about me',
                                    content: <MoreInfo data={infoData} />
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

About.displayName = 'About';

export default About
