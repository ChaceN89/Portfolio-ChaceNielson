/**
 * @file interestsData.js
 * @module interestsData
 * @desc Contains data for the interests section used in various parts of the application. Each interest includes a name, description, and an icon.
 * 
 * @exports interests
 * @exports interestsPageData
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated July 28, 2024
 */

import IconLibrary from "../iconLibrary";

export const interestsPageData = {
  title: "Interests",
  description: "I have a variety of interests outside of programming that inspire my creativity and fuel my passion for learning. Here are a few of my favorites."
};

export const interests = [
  { 
    name: "Snowboarding", 
    description: "I discovered snowboarding in university and have been hooked ever since. It's my favorite winter activity.", 
    icon: IconLibrary.SNOWBOARDING,
  },
  { 
    name: "Basketball",
    description: "I played basketball in high school and college, and now enjoy officiating games.",
    icon: IconLibrary.BASKETBALL
  },
  { 
    name: "Music",
    description: "I've been playing guitar for 5 years, enjoying both performing and writing my own music.",
    icon: IconLibrary.MUSIC
  },
  { 
    name: "Hiking",
    description: "The mountains are my favorite escape. I enjoy hiking and backpacking in all seasons.",
    icon: IconLibrary.HIKING
  },
  { 
    name: "Climbing",
    description: "From rock climbing to ice climbing and mountaineering, I've loved climbing my entire life.",
    icon: IconLibrary.MOUNTAIN_CLIMBING
  },
  { 
    name: "Swimming",
    description: "Swimming has become a recent passion — a great way to stay active and enjoy the water.",
    icon: IconLibrary.SWIMMING
  }
];
