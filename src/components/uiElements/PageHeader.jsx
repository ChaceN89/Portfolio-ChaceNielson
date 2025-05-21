import React from 'react'

export default function PageHeader({ name, description, pageTitle=null }) {


  // Set the page title if provided
  React.useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} - Chace Nielson`;
    }

    // Cleanup function to reset the title when the component unmounts
    return () => {
      document.title = 'Chace Nielson';
    };

  }, [pageTitle]);

  return (
    <div className="space-y-1">
      <h2 className="font-bold">{name}</h2>
      <p className="text-darken">{description}</p>
    </div>
  )
}
