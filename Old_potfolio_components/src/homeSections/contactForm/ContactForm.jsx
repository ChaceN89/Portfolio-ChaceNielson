/**
 * @file ContactForm.jsx
 * @module ContactForm
 * @desc React component that renders the contact form section with a background image, title, subtitle, and form.
 *
 * @component ContactForm
 * 
 * @requires react
 * @requires contactPageData from '../../data/pageData/contactPageData'
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../wrappers/SectionWrapper'
 * @requires Form from './Form'
 * @requires Download from './DownloadCV'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires './ContactForm.css'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of ContactForm component
 * import ContactForm from './ContactForm';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ContactForm />
 *     </div>
 *   );
 * }
 * 
 * @exports ContactForm
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import React from 'react';
import { contactPageData } from '../../data/pageData/contactPageData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../wrappers/SectionWrapper';
import Form from './Form';
import ImageComponent from '../../wrappers/ImageComponent';
import './ContactForm.css';
import DownloadCV from './DownloadCV';

function ContactForm() {
  return (
    <BackgroundWrapper 
      id="ContactForm" 
      className='min-h-section-height'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range1-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range1-trim-small.png"}
      mobileSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range1.png"}
      bgOpacity={15}
      backgroundSize="cover"
    >
      <SectionWrapper
        title={contactPageData.title}
        subtitle={contactPageData.description}
      >
        <DownloadCV />
        <div className='flex flex-wrap md:flex-nowrap space-x-4'>
          <div className="w-full lg:w-3/5">
            <Form />
          </div>
          <div className="hidden w-2/5 h-full lg:flex justify-center items-center">
            <ImageComponent
              className='object-contain w-full h-full'
              alt="Contact Photo"
              src={`${process.env.PUBLIC_URL}/png-backgrounds/images/snowboard.png`}
              lowResSrc={`${process.env.PUBLIC_URL}/png-backgrounds/images/snowboard-small.png`}
            />
          </div>
        </div>
      </SectionWrapper>
    </BackgroundWrapper>
  );
}

export default ContactForm;
