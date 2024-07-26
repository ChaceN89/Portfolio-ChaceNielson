import { FaMusic } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const short = "A music player application built with Vue and Tailwind.";
const long = (
  <div className='space-y-2'>
    <p>
      This is a music player application built using Vue.js and Tailwind CSS. The application allows users to play and manage their music collections.
    </p>
    <p>
      It features a clean and responsive UI, providing a seamless user experience for music playback. The application is deployed using Vercel.
    </p>
    <p>
      The project showcases the integration of modern web technologies to build a functional and visually appealing music player.
    </p>
  </div>
);

export const musicPlayer = {
  starred: true,
  id: "music-player",
  name: "Music Player",
  tag: "Frontend",
  Blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "musicPlayer1.jpg", blurhash: "" },
    { src: "musicPlayer2.jpg", blurhash: "" },
  ],
  techStack: [
    "Vue",
    "Tailwind",
    "Vercel"
  ],
  externalLinks: [
    { name: "Website", link: "https://music-player-chace-nielsons-projects.vercel.app/", icon: FaMusic },
    { name: "Code", link: "https://github.com/ChaceN89/music-player", icon: BsGithub },
  ],
};
