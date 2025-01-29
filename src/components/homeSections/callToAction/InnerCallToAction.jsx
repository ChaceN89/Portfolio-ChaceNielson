/**
 * @file InnerCallToAction.jsx
 * @module InnerCallToAction
 * @desc React component that renders the inner content of the call-to-action section.
 * This component displays an image, text, and buttons based on data imported from callToActionData.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 25 2025
 */
import React from 'react';
import { callToActionData } from '../../../data/pageData/callToActionData';
// Components
import MyButton from '../../buttons/MyButton';
import ImageComponent from '../../wrappers/ImageComponent';

function InnerCallToAction() {
  return (
    <div className="inner-call-to-action backdrop-blur-sm">
      {/* Image Positioned on the Left, Touching Bottom */}
      <div className="image-container">
        <ImageComponent
          src={callToActionData.img}
          lowResSrc={callToActionData.lowResImg}
          alt="Chace Hiking"
          className="object-contain h-full w-full"
        />
      </div>

      {/* Text and Button Section */}
      <div className="flex flex-col h-full justify-center items-start p-6 w-full md:w-3/4 lg:w-3/4 self-center">
        <h2 className="text-white font-bold">{callToActionData.top}</h2>
        <h4 className="mt-2 text-white">{callToActionData.bottom}</h4>
        <div className="mt-6 flex justify-start space-x-2">
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

