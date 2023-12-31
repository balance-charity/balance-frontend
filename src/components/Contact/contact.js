import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1nilr79', 'template_6rk7gia', form.current, 'mKNI0dlH0E-cBuPsU')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below for more information.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        {/* <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" /> */}
                        <a href="https://www.youtube.com/@Balance_charity" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/the_balance_888/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;