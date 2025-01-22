/**
 * @file musicPlayer.js
 * @module musicPlayer
 * @desc Contains data for the Music Player project.
 * 
 * @name Music Player
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A music player application built with Vue and Tailwind.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This is a music player application built using Vue.js and Tailwind CSS. The application allows users to play music online.
    </p>
    <p>
      It features a clean and responsive UI, and dark/light mode and volume control settings. The application is deployed using Vercel.
    </p>
  </div>
);

export const musicPlayer = {
  starred: true,
  id: "music-player",
  name: "Music Player",
  tag: "UX/UI",
  blurb: short,
  description: long,
  images: [
    { src: "musicPlayer2.jpg", blurhash: "LANm]1_M?brt-;D*js%L~W%3RjD%" },
    { src: "musicPlayer.jpg", blurhash: "LADl{3~pIV00ROxvt7MxD*00xv?b" },
    { src: "musicPlayer1.jpg", blurhash: "LKMQ;at1-;-=t6IUof%2_4%NM{IT" },
  ],
  mainStack: [
    IconSkills.VUE,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.VERCEL,
    IconSkills.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://music-player-chace-nielsons-projects.vercel.app/", icon: IconSkills.MUSIC.icon },
    { name: "Code", link: "https://github.com/ChaceN89/music-player", icon: IconSkills.GITHUB.icon },
  ],
};
