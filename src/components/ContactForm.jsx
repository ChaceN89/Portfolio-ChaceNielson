/**
 * Contact Form page for users to reach me
 * 
 * Uses Form Submit and will require that I cahnge the domain name later
 * Has two field t oporevent it going to formsubmit website
 * but will be susetible to spam 
 * !!!!1
        <input type="hidden" name="_next" value={myDomaion}/>
        <input type="hidden" name="_captcha" value="false"></input>

    Have a downlaod CV info option to get resume and 
 * 
 */
import React from 'react'
import DownloadCV from '../miniComponents/DownloadCV'
import SectionHeader from '../miniComponents/SectionHeader'

function ContactForm() {

  const myDomaion =  "http://localhost:3000/Contact"
  const myEmail ="chacen@shaw.ca"

  const labelCSS = "block mb-2 text-sm font-medium text-gray-300"
  const inputCSS = "block w-full p-2.5 shadow-lg rounded-lg bg-gray-50 bg-opacity-10 backdrop-blur-xl "
  const buttonCSS= "bg-black text-white rounded-2xl bg-opacity-20 backdrop-blur-xl shadow-lg font-medium py-3 px-6 w-fit hover:bg-white hover:text-black"



  return (
    <section id="Contact" className='hiddenClass sectionVert mx-20 min-h-screen'> 
      <SectionHeader title={"Contact Me"} description={"Want to learn more about me? Interested in software? Send me a message."}/>

      <DownloadCV/>

      <form method='POST' action={`https://formsubmit.co/${myEmail}`} className="flex flex-col justify-center mx-10 sm:mx-24 md:mx-32 lg:mx-auto max-w-3xl space-y-8 ">

        <input type="hidden" name="_next" value={myDomaion}/>
        <input type="hidden" name="_captcha" value="false"></input>

        <div>
            <label className={labelCSS}>Your Name</label>
            <input type="text" name='Name' className={inputCSS}  placeholder="John Doe" required/>
        </div>

        <div>
            <label className={labelCSS}>Your email</label>
            <input type="email" name='Email' className={inputCSS} placeholder="name@example.com" required/>
        </div>

        <div>
            <label className={labelCSS}>Your Message</label>
            <textarea id="message" name='Message' rows="5"  maxLength="1000"  className={inputCSS + " max-h-fit resize-none  no-scrollbar"} placeholder="Leave your thoughts here..." required></textarea>
        </div>
    
        <button type="submit" className={buttonCSS}> Send Message </button>
      </form>

    </section>
  )
}

export default ContactForm