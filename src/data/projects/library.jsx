/**
 * @file library.js
 * @module libary
 * @desc Contains data for the libaryr App project.
* 
 * @author Chace Nielson
 * @created Jan 28th, 2025
 * @updated Jan 29th, 2025
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "A full-stack library app with Google Sign-In, nested comments, and AWS integration.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <span className="font-bold">PageFlow Library</span> is a full-stack web app for browsing, uploading, and managing books. Built with <span className="font-bold">Django</span> and <span className="font-bold">Next.js</span> utilizing <span className="font-bold">AWS</span>. It supports both visitors and registered users.
    </p>
    <p>
      Visitors can search for books, view details, and download them freely. Registered users gain access to advanced features like uploading books, managing <span className="font-bold">favorite books</span>, and leaving comments using the app’s <span className="font-bold">nested comment system</span>. Deleted comments are replaced with <span className="font-bold">[deleted]</span> to keep discussions clean and structured.
    </p>
    <p>
      Users can update their profiles in the <span className="font-bold">Account Settings</span> section, while admins have access to a powerful <span className="font-bold">Admin Portal</span> to edit or remove books and users.
    </p>
    <p>
      The app is fully responsive and supports a <span className="font-bold">light/dark mode toggle</span>. It uses AWS services like <span className="font-bold">S3</span> for file storage and <span className="font-bold">RDS(PostgreSQL)</span> for data management, ensuring a modern and scalable library experience.
    </p>
  </div>
);

export const library = {
  id: "library",
  name: "PageFlow Library",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "library5.jpg", blurhash: "L8Pj4700D$?H004.D%Mx8_~q%MIV" },
    { src: "library0.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library1.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library2.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library3.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library4.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library6.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library7.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library9.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library10.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library11.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library12.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library13.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library14.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library15.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library16.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "library17.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
  ],
  mainStack: [
    IconLibrary.NEXT,
    IconLibrary.DJANGO,
    IconLibrary.S3,
    IconLibrary.RDS,
  ],
  extendedStack: [
    IconLibrary.AWS,
    IconLibrary.POSTGRESQL,
    IconLibrary.FULL_STACK,
    IconLibrary.AUTHENTICATION,
    IconLibrary.TAILWIND,
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.OAUTH,
    IconLibrary.RENDER,
    IconLibrary.VERCEL,
  ],
  externalLinks: [
    { name: "Application", link: "https://library-gold-three.vercel.app/", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/library", icon: IconLibrary.GITHUB.icon },
  ],
};
