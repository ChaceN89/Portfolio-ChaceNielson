/**
 * Contact Form page for users to reach me

  Uses emailjs and requires and account
  Navigates to Copntact page if email send successfully
  giver alerta if it fails
 * 
 */
import DownloadCV from '../components/DownloadCV'
import SectionHeader from '../components/SectionHeader'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function ContactForm() {

  // add these to index.css later  
  const labelCSS = "block mb-2 text-sm font-medium text-gray-300"
  const inputCSS = "block w-full p-2.5 shadow-lg rounded-lg bg-gray-50 bg-opacity-10 backdrop-blur-xl "
  const buttonCSS= "bg-black text-white rounded-2xl bg-opacity-20 backdrop-blur-xl shadow-lg font-medium py-3 px-6 w-fit hover:bg-white hover:text-black"

  const navigate = useNavigate()
  const form = useRef();

  // fucntion to send email using services
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nc4nkbc', 'template_cshjzhq', form.current, 'G7UrU45Q--GNZEv3H')
      .then((result) => {
          navigate("/Contact")
      }, (error) => {
          alert("Error Sending Email")
      });
  };


  return(
    <section id="Contact" className='section'>
      <SectionHeader title={"Contact Me"} description={"Want to learn more about me? Interested in software? Send me a message."}/>
      <DownloadCV/>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 justify-center container mx-auto lg:max-w-3xl">

        <input type="hidden" name='to_name' value="Chace" />

        <div>
            <label className="contactLabel">Your Name</label>
            <input  type="text" name="from_name" className="contactInput"  placeholder="John Doe" required/>
        </div>

        <div>
            <label className="contactLabel">Your email</label>
            <input type="email" name="user_email" className="contactInput" placeholder="name@example.com" required/>
        </div>

        <div>
            <label className="contactLabel">Your Message</label>
            <textarea id="message" name="message" rows="5"  maxLength="1000"  className={inputCSS + " max-h-fit resize-none  no-scrollbar"} placeholder="Leave your thoughts here..." required></textarea>
        </div>

        <button type="submit" value="Send" className="contactButton"> Send Message </button>
      </form>

    </section>

  )

}

export default ContactForm