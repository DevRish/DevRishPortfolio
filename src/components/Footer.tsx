import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footerOuter'>
                <div className="container footer">
                    <div className="infoSummary">
                        <h4>Rishav Chattopadhya</h4>
                        <p><a href="mailto:rishavchatterjee1546@gmail.com"><FaEnvelope />  rishavchatterjee1546@gmail.com</a></p>
                        <p><a href="tel:8902271148"><FaPhoneAlt />  8902271148</a></p>
                        <p><a 
                                href="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.6757521,88.0495348,10z/data=!3m1!4b1!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895"
                                target="_blank"
                            ><FaMapMarkerAlt />  Kolkata, India</a></p>
                        <p><a href="https://www.linkedin.com/in/rishav-chattopadhya-833850204/" target="_blank"><FaLinkedin /> LinkedIn</a></p>
                        <p><a href="https://github.com/DevRish" target="_blank"><FaGithub /> Github</a></p>
                    </div>
                    <div className="projectSummary">
                        <h4>Projects</h4>
                        <p><a href="https://martcartdevrish.herokuapp.com/" target="_blank">Martcart</a></p>
                        <p><a href="https://devrish.github.io/Framezy/" target="_blank">Framezy</a></p>
                        <p><a href="http://notesappdevrish.herokuapp.com/" target="_blank">NotesApp</a></p>
                    </div>
                    <div className="servicesSummary">
                        <h4>Services</h4>
                        <p>Web Development</p>
                        <p>Frontend Development</p>
                        <p>UI/UX Designing</p>
                        <p>Backend Development</p>
                    </div>
                </div>
            </div>
            <div className="copyright" style={{ backgroundColor: `gray`, fontSize: '1rem', padding: '0' }}>
                <h1>
                    Illustrations from 
                    <a href='https://www.freepik.com/' target='_blank' style={{ textDecoration: 'none', color: 'white', margin: '0 0.5rem' }}>Freepik</a>
                    and
                    <a href='https://undraw.co/' target='_blank' style={{ textDecoration: 'none', color: 'white', margin: '0 0.5rem' }}>Undraw</a>
                </h1>
            </div>
            <div className="copyright">
                <h1>Copyright &copy; 2022 Rishav Chattopadhya. All Rights Reserved</h1>
            </div>
        </>
    )
}

export default Footer
