/**
 * @file GameTrailer.jsx
 * @module GameTrailer
 * @desc Component to display a YouTube trailer for a game.
 * 
 * @component GameTrailer
 * 
 * @requires react
 * 
 * @param {string} trailer - The URL of the trailer video.
 * @param {string} title - The title of the game for which the trailer is shown.
 * 
 * @returns {JSX.Element|null} The component displaying the game trailer, or null if no trailer URL is provided.
 * 
 * @example
 * // Example usage of GameTrailer component
 * const trailer = 'https://www.youtube.com/watch?v=exampleVideoId';
 * const title = 'Game Title';
 * 
 * <GameTrailer trailer={trailer} title={title} />
 * 
 * @author Chace Nielson
 * @created 2024-07-12
 * @updated 2024-07-12
 * @since 2.1
 */

import React from 'react';

function YouTubeEmbed({ youtubeEmbed }) {

  if (!youtubeEmbed) {
    return null;
  }

  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  };

  return (
    <div className="mb-6 mx-auto container w-2/3">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={getEmbedUrl(youtubeEmbed)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`${youtubeEmbed} video`}
          className="w-full h-full rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeEmbed;
