import React from 'react';
import { useRef, useState, forwardRef } from 'react';
import './../css/Contact.css';
import MessageMe from './MessageMe';

const Contact = forwardRef((props,ref) => {
    // const comp = useRef(null);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageInput = useRef(null);
    const sendMessage = async () => {
        if((name==='')||(email==='')||(message===''))
        {
            setError('Please fill all fields!');
            setSuccess('');
        }
        else
        {
            Email.send({
                Host : "smtp.gmail.com",
                Username : process.env.REACT_APP_MY_EMAIL,
                Password : process.env.REACT_APP_MY_PASSWORD,
                To : process.env.REACT_APP_MY_EMAIL,
                From : process.env.REACT_APP_MY_EMAIL,
                Subject : `${name} sent you a message`,
                Body : `Name: ${name} <br/><br/> Email: ${email} <br/><br/> Message:<br/><br/> ${message}`
            }).then(
              message => {
                setName('');
                setEmail('');
                setMessage('');
                setSuccess('Thanks for your message! I will get back to you soon!');
                alert('Thanks for your message! I will get back to you soon!');
                setError('');
                nameInput.current.value = '';
                emailInput.current.value = '';
                messageInput.current.value = '';
              }
            ).catch(err => console.log(err));
            
        }
    }
    const [vis,setVis] = useState(0);
    const handleScroll = () => {
        if(ref.current !== null)
        {
            var pixelsScrolled = (window.pageYOffset - ref.current.offsetTop + window.innerHeight);
            var compHeight = ref.current.clientHeight;
            var percentScrolled = (pixelsScrolled/compHeight)*100;
            if(percentScrolled<40 && vis!==0) setVis(0);
            if(percentScrolled>=40 && vis!==1) setVis(1);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <div className='contactOuter' ref={ref}>
            <div className='container contact'>
                <h1 className="mainHeading">LET'S TALK</h1>
                <div className="gridCon">
                    <div className={ (vis===1) ? "gridConImg gridConImgAnimate" : "gridConImg"}>
                        <MessageMe />
                    </div>
                    <div className={ (vis===1) ? "gridConDesc gridConDescAnimate" : "gridConDesc" }>
                        <p>Want to discuss about your new project? Just leave me a message and I will get back to you!</p>
                        <div className="contactForm">
                            {
                                (error!=='') && 
                                <div className="contactFormInput">
                                    <p style={{
                                        color: 'orange'
                                    }}>{error}</p>
                                </div>
                            }
                            {
                                (success!=='') && 
                                <div className="contactFormInput">
                                    <p style={{
                                        color: '#99ffcc'
                                    }}>{success}</p>
                                </div>
                            }
                            <div className="contactFormInput">
                                <label htmlFor="contactName">Your Name</label>
                                <input type="text" id='contactName' name='contactName' placeholder='Enter Full Name'
                                onChange={ (e) => { setName(e.target.value) }} ref={nameInput} />
                            </div>
                            <div className="contactFormInput">
                                <label htmlFor="contactEmail">Your Email</label>
                                <input type="email" id='contactEmail' name='contactEmail' placeholder='Enter Email' 
                                onChange={ (e) => { setEmail(e.target.value) }} ref={emailInput} />
                            </div>
                            <div className="contactFormInput">
                                <label htmlFor="contactMessage">Your Message</label>
                                <textarea name="contactMessage" id="contactMessage" placeholder='Your message here'
                                onChange={ (e) => { setMessage(e.target.value) }} ref={messageInput} ></textarea>
                            </div>
                            <div className="contactFormInput">
                                <button className='btn' onClick={sendMessage}> <i className="fas fa-paper-plane"></i> Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contact
