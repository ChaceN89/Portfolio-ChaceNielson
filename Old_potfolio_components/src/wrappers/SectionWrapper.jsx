/**
 * @file SectionWrapper.js
 * @module SectionWrapper
 * @desc React component that wraps a section to provide consistent title formatting and content/children formatting.
 * This component uses the SlideTransition for animations and SectionHeader for the section header.
 *
 * @component SectionWrapper
 * 
 * @requires react
 * @requires SectionHeader from './SectionHeader'
 * @requires SlideTransition from '../../animations/SlideTransition'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of SectionWrapper component
 * import SectionWrapper from './SectionWrapper';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components
 *       <SectionWrapper title="My Title" subtitle="My Subtitle">
 *         <p>This is the content inside the section.</p>
 *       </SectionWrapper>
 *     </div>
 *   );
 * }
 * 
 * @exports SectionWrapper
 * 
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be wrapped inside the section.
 * @param {string} props.title - The title of the section.
 * @param {string} props.subtitle - The subtitle of the section.
 * 
 * @returns {JSX.Element} The rendered SectionWrapper component.
 * 
 * @since 2.1
 * @created 2024-07-29
 * @updated 2024-07-29
 */
import React from 'react';
import SectionHeader from '../components/uiElements/SectionHeader';
import SlideTransition from '../animations/SlideTransition';

/**
 * SectionWrapper component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped inside the section.
 * @param {string} props.title - The title of the section.
 * @param {string} props.subtitle - The subtitle of the section.
 * @returns {JSX.Element} The SectionWrapper component.
 */
function SectionWrapper({ children, title, subtitle }) {
  return (
    <div className='container mx-auto pb-10 px-2'>
      <SlideTransition>
        <div className='py-10 pb-8'>
          <SectionHeader title={title} subtitle={subtitle} />
        </div>
      </SlideTransition>
      <div className='px-4'>
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;
