/**
 * @file interestsData.js
 * @module interestsData
 * @desc Contains data for the interests section used in various parts of the application.
 * Each interest entry includes the name, description, and an icon representing the interest.
 * 
 * @requires ../iconSkills
 *  
 * @example
 * // Example usage of interests in a component
 * import { interests } from './interestsData';
 * 
 * function InterestsSection() {
 *   return (
 *     <div>
 *       {interests.map((interest, index) => (
 *         <div key={index}>
 *           <interest.icon size={32} />
 *           <h3>{interest.name}</h3>
 *           <p>{interest.description}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports interests
 * @exports interestsPageData
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

export const interestsPageData = {
  title: "Interests",
  description: "I have a variety of interests outside of programming. Here are a few of my favorites."
};

export const interests = [
  { 
    name: "Snowboarding", 
    description: "I picked up snowboarding in university and have been hooked ever since. It's my favorite winter activity.", 
    icon: IconSkills.SNOWBOARDING,
  },
  { 
    name: "Basketball",
    description: "I played basketball in high school and college, and I still play in local leagues when I can.",
    icon: IconSkills.BASKETBALL
  },
  { 
    name: "Music",
    description: "I have been playing guitar for the last 4 years. I enjoy playing songs and writing my own music.",
    icon: IconSkills.MUSIC
  },
  { 
    name: "Hiking",
    description: "I love the mountains and enjoy hiking and backpacking in the summer and winter.",
    icon: IconSkills.HIKING
  },
  { 
    name: "Climbing",
    description: "I have been climbing my whole life. I enjoy rock climbing, mountaineering, and ice climbing.",
    icon: IconSkills.MOUNTAIN_CLIMBING
  },
  { 
    name: "Swimming",
    description: "I recently picked up swimming as a way to stay in shape and enjoy the water.",
    icon: IconSkills.SWIMMING
  }
];
