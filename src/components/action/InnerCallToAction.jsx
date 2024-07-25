import React from 'react';
import ImageComponent from '../common/layout/ImageComponent';
import Button from '../common/uiElements/Button';
import { callToActionData } from '../../data/callToAction';

function InnerCallToAction() {
  return (
    <div className="border-2 border-secondary text-secondary bg-primary bg-opacity-65 rounded-xl w-full h-full
      grid grid-cols-1 md:grid-cols-3 px-4  max-w-sm sm:max-w-md md:max-w-3xl 
    ">
      <div className="col-span-1 flex items-center justify-center">
        <ImageComponent
          src={callToActionData.img}
          lowResSrc={callToActionData.lowResImg}
          alt="Call to Action Logo"
          className="object-contain w-56 h-72" // Adjust width and height as needed
        /> 
      </div>
      <div className="col-span-2 flex flex-col h-full justify-center items-start p-4">
        <h2>{callToActionData.top}</h2>
        <h4 className="mt-2">{callToActionData.bottom}</h4>
        <div className="mt-6 flex justify-start md:justify-start space-x-">
          {callToActionData.buttons.map((button) => (
            <Button key={button.id} to={button.id}>
              {button.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerCallToAction;
