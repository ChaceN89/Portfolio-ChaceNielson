import React from 'react'

export default function PercentLoader({ loadPercent }) {

  var percentText = loadPercent.toString();
  if (loadPercent === 0) {
    loadPercent = 1;
  }

  return (
    <div className="flex items-center justify-center  gap-2 px-4 w-screen">
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />

      {/* Percent */}
      <h3 className="whitespace-nowrap text-lg font-medium w-16">
        {percentText}
      </h3>

      {/* Right Line */}
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />
    </div>
  );
}

