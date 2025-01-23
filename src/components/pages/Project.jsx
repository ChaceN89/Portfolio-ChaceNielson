import React from 'react';

export default function Project({projectName}) {


  return (
    <div className="text-black">
      <h1>Project</h1>
      <p>Project Name: {projectName || 'No project selected'}</p>
    </div>
  );
}
