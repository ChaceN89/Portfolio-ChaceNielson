/**
 * @file YoutubeEmbed.jsx
 * @module GameTrailer
 * @desc Component to display a YouTube trailer for a game.
 * 
 * @author Chace Nielson
 * @created 2024-07-12
 * @updated Jan 26, 2025
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
    <div className="pb-4">
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
