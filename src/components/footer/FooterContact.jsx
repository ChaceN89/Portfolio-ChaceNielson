/**
 * @file FooterContact.jsx
 * @module UI/FooterContact
 * @desc Compact contact block used in footers or sidebars.
 *
 * @props {boolean} [noTitle=false] - If true, hides the "Let's Connect" title.
 * @props {boolean} [address=true] - If false, hides the physical mailing address.
 *
 * @example
 * <FooterContact />
 * <FooterContact noTitle />
 * <FooterContact address={false} />
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated May 9, 2025
 */

import React from 'react';

export default function FooterContact({ noTitle = false, address = true }) {
  return (
    <div className="space-y-1">
      {!noTitle && <h4 className="text-xl font-semibold">Let's Connect</h4>}

      <p className="mt-2">© Chace Nielson - {new Date().getFullYear()}</p>
      <p>Software Engineer: <b>Chace Nielson</b></p>

      {address && (
        <p>
          Location: Alberta, Canada {/* You can customize or remove this line */}
        </p>
      )}

      <p>
        Email:{' '}
        <a
          href="mailto:chacen@shaw.ca"
          className="text-tertiary-alt hover:underline"
        >
          chacen@shaw.ca
        </a>
      </p>
    </div>
  );
}
