/**
 * @file InnerCallToAction.jsx
 * @module InnerCallToAction
 * @desc React component that renders the inner content of the call-to-action section.
 * This component displays an image, text, and buttons based on data imported from callToActionData.
 * 
 * @component InnerCallToAction
 * 
 * @requires react
 * @requires callToActionData from '../../data/pageData/callToActionData'
 * @requires MyButton from '../../components/buttons/MyButton'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of InnerCallToAction in a parent component
 * import InnerCallToAction from './InnerCallToAction';
 * 
 * function ParentComponent() {
 *   return (
 *     <div>
 *       <InnerCallToAction />
 *     </div>
 *   );
 * }
 * 
 * @exports InnerCallToAction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { callToActionData } from '../../data/pageData/callToActionData';
// Components
import MyButton from '../../components/buttons/MyButton';
import ImageComponent from '../../wrappers/ImageComponent';

function InnerCallToAction() {
  return (
    <div className="inner-call-to-action bg-frosted-glass">
      <div className="col-span-1 hidden md:flex items-end justify-center">
        <ImageComponent
          src={callToActionData.img}
          lowResSrc={callToActionData.lowResImg}
          alt="Chace Hiking"
          className="object-contain w-40 h-56 md:w-56 md:h-72" // Adjust width and height as needed
        />
      </div>
      <div className="col-span-2 flex flex-col h-full justify-center items-start p-6">
        <h2>{callToActionData.top}</h2>
        <h4 className="mt-2">{callToActionData.bottom}</h4>
        <div className="mt-6 flex justify-start md:justify-start space-x-2 z-30">
          {callToActionData.buttons.map((button) => (
            <MyButton key={button.id} to={button.id}>
              {button.name}
            </MyButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerCallToAction;
