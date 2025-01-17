import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const data: {
    heading: string;
    items: {
        icon?: any;
        text: string;
        link?: string;
    }[];
}[] = [
    {
        heading: 'Rishav Chattopadhyay',
        items: [
            {
                icon: <FaEnvelope />,
                text: 'rishavchatterjee1546@gmail.com',
                link: 'mailto:rishavchatterjee1546@gmail.com',
            },
            {
                icon: <FaMapMarkerAlt />,
                text: 'Kolkata, India',
                link: 'https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.6757521,88.0495348,10z/data=!3m1!4b1!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895',
            },
            {
                icon: <FaLinkedin />,
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/in/rishav-chattopadhya-833850204/',
            },
            {
                icon: <FaGithub />,
                text: 'Github',
                link: 'https://github.com/DevRish',
            },
        ]
    },
    {
        heading: 'Projects',
        items: [
            {
                text: 'Martcart',
                link: 'https://martcartdevrish.netlify.app/',
            },
            {
                text: 'Framezy',
                link: 'https://devrish.github.io/Framezy/',
            },
        ]
    },
    {
        heading: 'Services',
        items: [
            { text: 'Design To Code' },
            { text: 'Landing Page Development' },
            { text: 'Web Application Development' },
            { text: 'Web Application Enhancement' },
        ]
    }
];

const Footer = () => {
    return (
        <>
            <div className='w-[100vw] bg-[#0B2935] py-[3rem]'>
                <div className={
                    "w-full max-w-[1100px] mx-auto sm:block md:grid grid-cols-3 justify-items-center items-start md:py-[3rem] sm:pt-[3rem] " + 
                    "text-[rgb(204,204,204)] text-[1.6rem] sm:text-[1.8rem]"
                }>
                    {
                        data.map((section, i) => (
                            <div className='sm:mb-[5rem] sm:*:w-full sm:*:text-center sm:mx-auto' key={i}>
                                <h4 className='font-bold'>{section.heading}</h4>
                                {
                                    section.items.map((item, i) => (
                                        <p className='no-underline text-[rgb(204,204,204)] mt-[1rem]' key={i}>
                                            {
                                                item.link ?
                                                <a 
                                                    href={item.link} 
                                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                                    className='flex items-center gap-[1rem] sm:flex sm:justify-center sm:items-center'
                                                >
                                                    {item.icon} {item.text}
                                                </a> :
                                                <span className='flex items-center gap-[1rem] sm:flex sm:justify-center sm:items-center'>{item.icon} {item.text}</span>
                                            }
                                        </p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full bg-gray-500 text-[1rem] p-0">
                <h1 className='text-white text-[1.6rem] font-medium py-[1rem] text-center no-underline'>
                    Illustrations from 
                    <a href='https://www.freepik.com/' target='_blank' className='mx-[0.5rem]'>Freepik</a>
                    and
                    <a href='https://undraw.co/' target='_blank' className='mx-[0.5rem]'>Undraw</a>
                </h1>
            </div>
            <div className="w-full bg-black text-[1rem] p-0">
                <h1 className='text-white text-[1.6rem] font-medium py-[1rem] text-center'>
                    Copyright &copy; {(new Date()).getFullYear()} Rishav Chattopadhyay. All Rights Reserved
                </h1>
            </div>
        </>
    )
}

export default Footer
