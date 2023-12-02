/**
 * generic tooltip component to put inside a parent - will contain the content within this component( the value)
 */
import React, {useState} from "react";

function ToolTip({value, toolTipText}) {

  // toggle tooltip on and off
  const [showTooltip, setShowTooltip] = useState(false);

  // timer for reset
  let timer;

  // Set a delay of x milliseconds (adjust as needed)
  const x  = 700

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setShowTooltip(true);
    }, x);
  };

  // reset the timer
  const handleMouseLeave = () => {
    clearTimeout(timer);
    setShowTooltip(false);
  };


  return (
    <div
      className="relative"          
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value}
      {showTooltip && (
        <div className="absolute left-1/2 top-1/2 bg-black bg-opacity-50 backdrop-blur-2xl shadow-2xl rounded-md text-white p-2 text-xs w-fit whitespace-nowrap border border-white  transform translate-x-2">
          {toolTipText}
        </div>
      )}
    </div>
  )
}

export default ToolTip