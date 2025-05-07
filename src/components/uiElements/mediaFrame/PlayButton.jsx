/**
 * @file PlayButton.jsx
 * @module UI/Media/PlayButton
 * @desc A styled overlay play button used to trigger YouTube video playback inside the MediaFrame component.
 *
 * @features
 * - Visually indicates video is ready to play.
 * - Triggers a playback handler when clicked.
 * - Fully responsive and animated.
 *
 * @props
 * @param {boolean} videoLoaded - Whether the video iframe is ready.
 * @param {Function} handlePlayClick - Function to call when the button is clicked.
 *
 * @dependencies
 * - react-icons (FaPlay)
 *
 * @author Chace Nielson
 * @created Apr 12, 2025
 * @updated May 7th, 2025
 */

import { FaPlay, FaCloudDownloadAlt } from "react-icons/fa";

export default function PlayButton({ videoLoaded, handlePlayClick, canPlayVideo, preload }) {
  const isDisabled = canPlayVideo && !videoLoaded; // ✅ only disable while loading

  return (
    <div className={`absolute inset-0 `} >
      <div
        className={`p-4 flex items-end justify-start inset-0 z-30 h-full w-full group
          ${isDisabled ? 'hover:cursor-progress  bg-secondary-alt/40' : 'hover:cursor-pointer hover:bg-primary-alt/10'}
        `}
        onClick={isDisabled ? undefined : handlePlayClick} // ✅ block click while loading
      >
        <div className={`
          bg-white/10 group-hover:bg-black/50 text-black group-hover:text-white 
          border-black/40 group-hover:border-white/20
          backdrop-blur-lg px-6 py-3 rounded-full font-semibold shadow-lg transition border 
          ${isDisabled && 'pointer-events-none' }
          ${preload && videoLoaded ? "opacity-100" : preload && !videoLoaded ? "opacity-0" : "opacity-100"}
         `}>
          
        
          <div className="text-sm md:text-base lg:text-lg">
            
            {canPlayVideo ? ( // ✅ can play video
              videoLoaded ? ( // Video is ready to play and has loaded
                <span className="flex items-center gap-2">
                  Play Video <FaPlay />
                </span>
              ) : ( // Video can be plaued but has't loaded yet
                <span className="flex items-center gap-2 animate-pulse click">
                  Loading Video... <FaCloudDownloadAlt />
                </span>
              )

            ) : ( // not allwoed to play video yet
              <span className="flex items-center gap-2">
                Load Video <FaCloudDownloadAlt />
              </span>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
