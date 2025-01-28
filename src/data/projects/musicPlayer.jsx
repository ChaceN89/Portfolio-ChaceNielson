/**
 * @file musicPlayer.js
 * @module musicPlayer
 * @desc Contains data for the Music Player project.
 * 
 * @name Music Player
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "A simple music player with dark/light mode, built with Vue and Tailwind..";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      This <span className="font-bold">Music Player</span> is a web application built with <span className="font-bold">Vue.js</span> and <span className="font-bold">Tailwind CSS</span>, allowing users to play music online with ease.
    </p>
    <p>
      The app features a clean, responsive design and supports <span className="font-bold">dark/light mode</span>, along with basic controls like volume adjustment. It is deployed using <span className="font-bold">Vercel</span> for seamless performance.
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
    IconLibrary.VUE,
    IconLibrary.TAILWIND,
  ],
  extendedStack: [
    IconLibrary.VERCEL,
    IconLibrary.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://music-player-chace-nielsons-projects.vercel.app/", icon: IconLibrary.MUSIC.icon },
    { name: "Code", link: "https://github.com/ChaceN89/music-player", icon: IconLibrary.GITHUB.icon },
  ],
};
