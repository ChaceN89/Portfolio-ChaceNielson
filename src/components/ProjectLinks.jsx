/**
 * Component to display the Porject links
 * has different settings for if its called in the modal or inner project card
 * links to pdfs and external links
 */
import React from 'react';
import { recordGAEvent } from '../functions/googleAnalytics'
import openPdf from '../functions/openPDF';

function ProjectLinks({ isModal = false, externalLinks }) {
    return (
        <div className={isModal ? 'flex flex-wrap' : 'flex flex-col sm:flex-row flex-wrap'}>
          {externalLinks.map((item, index) => (
            <a
            onClick={(event) => {
                if (item.pdf) {
                  event.preventDefault();
                  openPdf(item.pdf);
                  recordGAEvent("Click pdf", item.name, "Project list");
                } else {
                  recordGAEvent("Click Link", item.link, "Project list");
                }
              }}
              key={index}
              href={item.link || '#'}
              target={item.link ? '_blank' : '_self'}
              rel="noreferrer"
              className="flex justify-center items-center pr-4 mx-2 py-1 rounded-2xl text-white hover:scale-110 hover:text-slate-300 space-x-1 select-none"
            >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </a>
          ))}
        </div>
      );
}

export default ProjectLinks;
