/**
 * @file MediaFrame.jsx
 * @module UI/Media
 * @desc A video-only media component for embedding YouTube videos with a preview thumbnail and custom play button.
 *
 * @features
 * - Lazy loads the YouTube iframe only after scroll-in or preload flag.
 * - Uses a Blurhash-enabled thumbnail preview via `ImageComponent`.
 * - Displays a custom `PlayButton` overlay with load state feedback.
 * - Prevents double-play clicks by disabling interaction while loading.
 * - Cleans up YouTube player on unmount to avoid memory leaks or iframe conflicts.
 * - Pauses other videos on play via `pauseOtherVideos()`.
 *
 * @props
 * @param {string} videoId - The YouTube video ID (e.g., "dQw4w9WgXcQ").
 * @param {string} thumbnail - Thumbnail image URL to show before loading.
 * @param {string} alt - Alt text for the thumbnail image.
 * @param {string} [title] - Optional title to display above the video.
 * @param {string} [description] - Optional text to display below the video.
 * @param {string} [className="aspect-video"] - Tailwind utility classes for height/aspect ratio.
 * @param {boolean} [preload=false] - Whether to preload the YouTube iframe on mount.
 *
 * @dependencies
 * - YouTube Iframe API via `react-youtube`
 * - `ImageComponent` (with Blurhash and shimmer loading support)
 * - `PlayButton` (custom hover and load animations)
 * - `youtubePlayerUtils` (pause and teardown logic)
 * - `react-intersection-observer` (lazy load on scroll)
 *
 * @author Chace Nielson
 * @created May 7, 2025
 * @updated May 7, 2025
 */
import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import PlayButton from "./PlayButton";
import ImageComponent from "../images/ImageComponent";
import { useInView } from "react-intersection-observer";
import { pauseOtherVideos, unmountYouTubePlayer } from "../../../utils/youtubePlayerUtils";


// Utility function to extract the YouTube video ID from a URL
// export function extractYouTubeId(url) {
//   try {
//     const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
//     const match = url.match(regExp);
//     return match && match[1];
//   } catch {
//     return ""; // Return empty string if URL is invalid
//   }
// }


export default function MediaFrame({
  videoId,
  thumbnail,
  alt,
  title = "",
  description = "",
  className = "aspect-video",
  preload = false
}) {

  // Lazy load the YouTube iframe only when in view or if preload is true
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [canStartVidLoad, setCanStartVidLoad] = useState(preload);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoIsPlaying, setvideoIsPlaying] = useState(false);

  const playerRef = useRef(null);

  const handleVideoReady = (event) => {
    playerRef.current = event.target;
    
    // Delay setting videoLoaded to prevent premature clicks
    setTimeout(() => {
      setVideoLoaded(true);
    }, 300); // 100–150ms is usually enough; you can adjust as needed
  };

  const myOnPlay = () => {
    setvideoIsPlaying(true);
    pauseOtherVideos(videoId);
  };

  const playVideo = () => {

    if (!canStartVidLoad) setCanStartVidLoad(true);
    if (!playerRef.current) return;

    myOnPlay();

    if (typeof playerRef.current.playVideo === "function") {
      playerRef.current.playVideo();
    } else {
      setTimeout(() => {
        if (typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.stopVideo?.();  // Stop if it’s playing
          playerRef.current.destroy?.();    // YouTube API: fully destroy iframe
        } catch (err) {
          console.warn("Failed to cleanup YouTube player:", err);
        }
      }
  
      unmountYouTubePlayer(playerRef); // Optional: your existing util
    };
  }, []);



  if (!videoId) return null;

  return (
    <div className={`w-full max-w-2xl mx-auto space-y-2 text-inherit `}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div ref={ref} className={`relative overflow-hidden rounded-2xl ${className}`}>
        {(inView || preload) && (
          <>
            {thumbnail && (!videoLoaded || !videoIsPlaying) && (
              <ImageComponent
                src={thumbnail}
                alt={alt}
                className="w-full h-full "
              />
            )}

            {canStartVidLoad && (
              <YouTube
                videoId={videoId}
                onReady={handleVideoReady}
                loading="lazy"
                iframeClassName="yt-frame"
                onPlay={myOnPlay}
                opts={{ width: "100%", height: "100%" }}
                className={`w-full h-full transition duration-200 ${
                  videoIsPlaying || !thumbnail ? "opacity-100" : "opacity-0"
                }`}
              />
            )}

            {!videoIsPlaying && (
              <PlayButton
                videoLoaded={videoLoaded}
                handlePlayClick={playVideo}
                canPlayVideo={canStartVidLoad}
                preload={preload}
              />
            )}
          </>
        )}
      </div>

      {description && <div className="text-left pt-1.5">{description}</div>}
    </div>
  );
}
