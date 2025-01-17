import {useState, forwardRef, useEffect} from 'react';
import MartCartImg from '../assets/MartcartMockups.png';
import FramezyImg from '../assets/FramezyMockups.png';
import NotesAppImg from '../assets/NotesAppMockups.png';
import { FaEye, FaGithub } from 'react-icons/fa';

type ProjectData = {
    name: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
    keyPoints: string[];
    visitLink?: string;
    repoLink: string;
    shouldShow: boolean;
}

const ProjectSections = ({ projectData }: { projectData: ProjectData[] }) => (
    <>
    {
        projectData.map(({ name, desc, imgSrc, imgAlt, keyPoints, visitLink, repoLink, shouldShow  }, i) => (
            <div className="w-full sm:block md:grid grid-cols-2 gap-[5rem] mt-[5rem] project">
                <div className={
                    `flex-and-center z-20 transition-2ms sm:mb-[4vh] ` + 
                    (shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-0') + ' ' +
                    (i%2 === 0 ? '': 'order-2')
                }>
                    <img className='w-full sm:w-[80%]' src={imgSrc} alt={imgAlt} />
                </div>
                <div className={ 
                    `z-10 transition-2ms p-[10%] bg-transparent border-[5px] border-[#071a22] rounded-[20px] ` +
                    `sm:py-0 sm:px-[5%] sm:w-[80%] sm:m-auto sm:flex sm:flex-col sm:justify-center sm:items-center ` +
                    (shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50%]') + ' ' +
                    '*:relative *:z-10 ' +
                    "after:content-[''] after:h-[15rem] after:w-[15rem] after:absolute after:bottom-0 " +
                    (i%2 === 0 ? 'after:right-0' : 'after:right-[100%]') + ' ' +
                    'after:translate-x-[50%] after:translate-y-[50%] ' +
                    'after:border-[5px] after:border-[#7fadc99f] after:rounded-[20px] ' +
                    'sm:after:hidden'
                }>
                    <h2 className='text-[2.8rem] text-[#0B2935] mb-[1rem] font-bold sm:mt-[1rem]'>{name}</h2>
                    <p className='text-[1.6rem] text-[#071a22] mb-[1rem] font-semibold sm:px-[7.5%]'>{desc}</p>
                    <ul className='text-[1.6rem] text-[#071a22] mb-[1rem] font-semibold list-disc sm:px-[7.5%]'>
                        {
                            keyPoints.map((point) => (
                                <li>{point}</li>
                            ))
                        }
                    </ul>
                    <div className='mt-[2rem] flex sm:flex-col sm:w-full relative z-10 no-underline text-white text-[1.8rem]'>
                        {
                            visitLink &&
                            <a href={visitLink} className='sm:w-full flex-and-center text-center bg-[#0B2935] rounded-[10px] py-[1rem] px-[1.6rem] mr-[1.5rem] block hover:scale-110' target="_blank"> 
                                <FaEye className='mr-[1rem]' /> Visit 
                            </a>
                        }
                        <a href={repoLink} className='sm:w-full sm:my-[2rem] sm:mx-0 flex-and-center text-center bg-[#26424e] rounded-[10px] py-[1rem] px-[1.6rem] mr-[1.5rem] block hover:scale-110' target="_blank"> 
                            <FaGithub className='mr-[1rem]' /> Github Repo 
                        </a>
                    </div>
                </div>
            </div>
        ))
    }
    </>
);

const projectDataInit: ProjectData[] = [
    {
        name: 'MartCart',
        desc: 'An ecommerce website where you can buy items',
        imgSrc: MartCartImg,
        imgAlt: 'MartcartProjectImage',
        keyPoints: [
            '99% responsive design',
            'Single Page Application using React RouterDOM',
            'Lightweight website with compressed images',
            'Data stored in real-time MongoDB database'
        ],
        visitLink: 'https://martcartdevrish.netlify.app',
        repoLink: 'https://github.com/DevRish/martcart',
        shouldShow: false,
    },
    {
        name: 'Framezy',
        desc: 'A modern design landing page for an art framing service',
        imgSrc: FramezyImg,
        imgAlt: 'FramezyProjectImage',
        keyPoints: [
            '99% responsive design',
            'Lightweight website with compressed images',
            'Focussed on making UX following recent trends',
            'Enhanced mobile experience',
        ],
        visitLink: 'https://devrish.github.io/Framezy/',
        repoLink: 'https://github.com/DevRish/Framezy',
        shouldShow: false,
    },
    {
        name: 'NotesApp',
        desc: 'A CRUD app where a user can take notes',
        imgSrc: NotesAppImg,
        imgAlt: 'NotesAppProjectImage',
        keyPoints: [
            '99% responsive design',
            'Single Page Application using React RouterDOM',
            'Restricted routes protected using JWT',
            'Data stored in real-time MongoDB database',
        ],
        repoLink: 'https://github.com/DevRish/notes-app',
        shouldShow: false,
    },
]

const Projects = forwardRef<HTMLDivElement, any>((_, ref) => {

    const [projectData,setProjectData] = useState<ProjectData[]>(projectDataInit);

    // const comp = useRef(null);
    const [vis,setVis] = useState(-1);
    // let flag = 0; // will use it to check if animation has been played once
    const handleScroll = () => {
        const divRef = ref as React.MutableRefObject<HTMLDivElement | null>;
        if (divRef.current) {
            const pixelsScrolled = (window.pageYOffset - divRef.current.offsetTop + window.innerHeight);
            const compHeight = divRef.current.clientHeight;
            const percentScrolled = (pixelsScrolled / compHeight) * 100;
            const percentEachProject = Math.floor(100 / projectData.length);

            const expectedVis = (percentScrolled === 0) ? -1 : (percentScrolled / percentEachProject);
            if (vis != expectedVis) setVis(expectedVis);
        }
    }
    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        setProjectData(prev => prev.map((d, i) => ({
            ...d,
            shouldShow: (i <= vis),
        })));
    }, [vis]);

    return (
        <div className='w-[100vw] overflow-x-hidden overflow-y-visible'>
            <div ref={ref} className='w-container flex-and-center flex-col mx-auto pt-[2rem] pb-[8rem] sm:pb-[4vh] relative sm:overflow-hidden'>

                <h1 className='w-full text-center text-[3.6rem] font-bold text-[#0B2935]'>MY PROJECTS</h1>

                {/* Background Shapes */}
                <div className="absolute h-[100vh] w-[100vw] rounded-[50px] border-[10px] border-[#0b293515] top-[-45vh] left-[40%]"></div>
                <div className="absolute h-[60vh] w-[100vw] rounded-[50px] border-[10px] border-[#0b293515] bottom-[30vh] left-[40%]"></div>
                <div className="absolute h-[60vh] w-[100vw] rounded-[50px] border-[10px] border-[#6ac7fd3d] top-[40vh] right-[40%]"></div>

                {/* Projects */}
                <ProjectSections projectData={projectData} />
            </div>
        </div>
    )
})

export default Projects
