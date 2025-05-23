/**
 * @file youtubePlayerUtils.js
 * @module Utils/YouTubePlayer
 * @desc Utility functions for managing embedded YouTube player behavior across components.
 *
 * @features
 * - Pauses all other YouTube iframes except a target video.
 * - Safely pauses a specific video by ref.
 * - Plays a video with retry logic if the YouTube player is not yet ready.
 *
 * @exports
 * - pauseOtherVideos
 * - pauseThisVideo
 * - playYouTubeVideo
 *
 * @author Chace Nielson
 * @created Apr 12, 2025
 * @updated Apr 12, 2025
 */

export const pauseOtherVideos = (excludeVideoSrc = "") => {
  const allIframes = document.querySelectorAll("iframe.yt-frame");

  allIframes.forEach((iframe) => {
    if (excludeVideoSrc && iframe.src.includes(excludeVideoSrc)) return;

    try {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: [],
        }),
        "*"
      );
    } catch (err) {
      console.warn("🛑 Failed to postMessage to iframe:", err);
    }
  });
};

export function unmountYouTubePlayer(playerRef) {
  if (!playerRef?.current) return;

  try {
    if (typeof playerRef.current.pauseVideo === "function") {
      playerRef.current.pauseVideo();
    }
  } catch (err) {
    console.warn("🎬 Failed to pause video on unmount:", err);
  }

  playerRef.current = null;
}
