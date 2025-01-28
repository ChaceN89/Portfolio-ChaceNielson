/**
 * @file InnerCallToAction.jsx
 * @module InnerCallToAction
 * @desc React component that renders the inner content of the call-to-action section.
 * This component displays an image, text, and buttons based on data imported from callToActionData.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { callToActionData } from '../../../data/pageData/callToActionData';
// Components
import MyButton from '../../buttons/MyButton';
import ImageComponent from '../../wrappers/ImageComponent';

function InnerCallToAction() {
  return (
    <div className="inner-call-to-action bg-frosted-glass">
      <div className="col-span-2 hidden md:flex items-end justify-end">
        <ImageComponent
          src={callToActionData.img}
          lowResSrc={callToActionData.lowResImg}
          alt="Chace Hiking"
          className="object-contain max-w-40 h-56 md:max-w-56 md:h-72" // Adjust width and height as needed
        />
      </div>
      <div className="col-span-1 flex flex-col h-full justify-center items-start p-6">
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
