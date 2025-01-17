import { useRef, useState, forwardRef, useEffect, HTMLProps, ButtonHTMLAttributes, ChangeEvent } from 'react';
import MessageMe from './MessageMe';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const InputWrapper = ({ children, ...props }: HTMLProps<HTMLDivElement>) => (
    <div className='flex flex-col mt-[1.5rem]' {...props}>{children}</div>
);

const Label = ({ children, ...props }: HTMLProps<HTMLLabelElement>) => (
    <label className='text-[1.6rem] text-white mb-[0.5rem] w-full' {...props}>{children}</label>
)

type InputProps = 
  | ({ variant: 'input' } & HTMLProps<HTMLInputElement>)
  | ({ variant: 'textarea' } & HTMLProps<HTMLTextAreaElement>)
  | ({ variant: 'button' } & HTMLProps<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>)

const Input = ({ variant, ...props }: InputProps) => {
    const commonStyles = 'text-[1.6rem] w-full px-[0.5rem] py-[0.25rem] rounded-[5px] border-[0.3rem] border-[#0C1E24] placeholder-gray-500 ';
    if (variant === 'input')
        return <input className={commonStyles + 'text-[#05151B]'} {...props as HTMLProps<HTMLInputElement>} />
    if (variant === 'textarea')
        return <textarea className={commonStyles + 'h-[8rem] text-[#05151B]'} {...props as HTMLProps<HTMLTextAreaElement>}></textarea>
    if (variant === 'button')
        return <button className='text-[1.8rem] bg-[#05151B] text-white py-[1.5rem] px-0 border-none rounded-[10px] cursor-pointer hover:scale-110 flex justify-center items-center' {...props as ButtonHTMLAttributes<HTMLButtonElement>}></button>
    return <></>;
}

const Contact = forwardRef<HTMLDivElement, any>((_,ref) => {
    const [isLoading,setIsLoading] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);
    const sendMessage = async () => {
        if((name==='')||(email==='')||(message===''))
        {
            setError('Please fill all fields!');
            setSuccess('');
        }
        else
        {
            try {
                setIsLoading(true);
                await axios.post('/api/send-message', {
                    name,
                    email,
                    message,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
                    }
                });
                setIsLoading(false);
                setName('');
                setEmail('');
                setMessage('');
                setSuccess('Thanks for your message! I will get back to you soon!');
                setError('');
                if (nameInput.current) nameInput.current.value = '';
                if (emailInput.current) emailInput.current.value = '';
                if (messageInput.current) messageInput.current.value = '';
            } catch (error) {
                console.log(error);
                setError('Sorry. Something went wrong. Please check your connection and try again.');
            }
        }
    }
    const [vis,setVis] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const divRef = ref as React.MutableRefObject<HTMLDivElement | null>
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
    })

    const [imgVis,setImgVis] = useState('opacity-0 scale-0');
    const [descVis,setDescVis] = useState('opacity-0 translate-y-[50%]');
    useEffect(() => {
        setImgVis(vis ? 'opacity-100 scale-100' : 'opacity-0 scale-0');
        setDescVis(vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50%]');
    }, [vis]);

    return (
        <div className='w-[100vw] bg-[rgb(18,50,63)]' ref={ref}>
            <div className='w-container flex-and-center flex-col mx-auto py-[3rem] text-white'>
                <h1 className='w-full text-center text-[3.6rem] font-bold'>LET&apos;S TALK</h1>
                <div className='w-full sm:block md:grid grid-cols-2 my-[4rem] gap-[5rem]'>
                    <div className={`flex-and-center order-2 z-10 ${imgVis} transition-2ms`}>
                        <MessageMe className='block w-[90%] sm:w-[80%] sm:mb-[5rem]' />
                    </div>
                    <div className={`z-10 ${descVis} transition-2ms px-[10%] sm:flex sm:flex-col sm:justify-center sm:items-center`}>
                        <p className='text-[1.6rem] font-semibold'>
                            Want to discuss about your new project? Just leave me a message and I will get back to you!
                        </p>
                        <div className="w-full">
                            {
                                (error!=='') && 
                                <InputWrapper>
                                    <p className='text-orange-400 text-[1.6rem] font-semibold'>{error}</p>
                                </InputWrapper>
                            }
                            {
                                (success!=='') && 
                                <InputWrapper>
                                    <p className='text-[#99ffcc] text-[1.6rem] font-semibold'>{success}</p>
                                </InputWrapper>
                            }
                            <InputWrapper>
                                <Label htmlFor="contactName">Your Name</Label>
                                <Input variant='input' type="text" id='contactName' name='contactName' placeholder='Enter Full Name'
                                onChange={ (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} ref={nameInput} />
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="contactEmail">Your Email</Label>
                                <Input variant='input' type="email" id='contactEmail' name='contactEmail' placeholder='Enter Email' 
                                onChange={ (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} ref={emailInput} />
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="contactMessage">Your Message</Label>
                                <Input variant='textarea' name="contactMessage" id="contactMessage" placeholder='Your message here'
                                onChange={ (e: ChangeEvent<HTMLTextAreaElement>) => { setMessage(e.target.value) }} ref={messageInput} ></Input>
                            </InputWrapper>
                            <InputWrapper>
                                <Input variant='button' onClick={sendMessage} disabled={isLoading}> 
                                    { isLoading ? <FaSpinner className='mr-[1rem] animate-spin' /> : <FaPaperPlane className='mr-[1rem]' /> } 
                                    Send Message
                                </Input>
                            </InputWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

Contact.displayName = 'Contact';

export default Contact
