import React,{useRef} from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_gnl7qpq', 'template_lp2iso1', form.current, {
            publicKey: '4A6h464Rjs2kUenFq',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('email sent!!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg'name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                    <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                    <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
                    <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
