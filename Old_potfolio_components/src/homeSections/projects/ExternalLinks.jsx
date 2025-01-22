/**
 * @file ExternalLinks.jsx
 * @module ExternalLinks
 * @desc React component that renders a list of external links with icons and labels.
 * Links can be either buttons that open PDFs or anchor tags that open external URLs.
 *
 * @component ExternalLinks
 * 
 * @param {Object[]} externalLinks - Array of link objects containing:
 *   @param {string} [link.pdf] - Optional path to a PDF file to be opened on button click.
 *   @param {string} [link.link] - URL to be opened in a new tab for anchor links.
 *   @param {React.Component} [link.icon] - Optional icon component to be displayed before the link name.
 *   @param {string} link.name - The text to display for the link.
 * 
 * @example
 * // Example usage of ExternalLinks component
 * import ExternalLinks from './ExternalLinks';
 * 
 * const links = [
 *   { name: 'My PDF', pdf: '/path/to/file.pdf', icon: SomeIconComponent },
 *   { name: 'External Site', link: 'https://example.com', icon: AnotherIconComponent }
 * ];
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ExternalLinks externalLinks={links} />
 *     </div>
 *   );
 * }
 * 
 * @exports ExternalLinks
 * 
 * @author Chace Nielson
 * @created 2024-08-06
 * @updated 2024-08-06
 * @since 2.1
 */
import React from 'react';
import { openPdf } from '../../functions/utils';

function ExternalLinks({ externalLinks }) {
  return (
    <div className="flex flex-wrap items-center text-lg">
      {externalLinks && externalLinks.length> 0 &&
        <>  
          {externalLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.pdf ? (
                <button
                  onClick={() => openPdf(link.pdf)}
                  className="m-2 text-primary text-opacity-80 hover:text-accent flex items-center"
                >
                  {link.icon && <link.icon className="inline-block mr-1" />}
                  {link.name}
                </button>
              ) : (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 text-primary text-opacity-80 hover:text-accent flex items-center"
                >
                  {link.icon && <link.icon className="inline-block mr-1" />}
                  {link.name}
                </a>
              )}
              {index < externalLinks.length - 1 && (
                <span className="text-accent text-2xl mx-1">/</span>
              )}
            </React.Fragment>
          ))}
        </>
      }
    </div>
  );
}

export default ExternalLinks;
