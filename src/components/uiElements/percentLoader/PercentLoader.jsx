/**
 * @file PercentLoader.jsx
 * @module UI/PercentLoader
 * @desc Displays a horizontal loading indicator with a percentage label.
 *       Visually shows load progress using two flexible bars on either side of a numeric label.
 *
 * @features
 * - Symmetrical loading bar animation using flex-based scaling
 * - Displays percentage text at center
 * - Minimum visible fill at 0% to avoid collapse
 *
 * @example
 * <PercentLoader loadPercent={75} />
 *
 * @author Chace Nielson
 * @created May 23, 2025
 * @updated May 23, 2025
 */
export default function PercentLoader({ loadPercent }) {

  var percentText = loadPercent.toString();
  if (loadPercent === 0) {
    loadPercent = 3;
  }

  return (
    <div className="flex items-center justify-center  gap-2 px-4 w-screen text-">
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />

      {/* Percent */}
      <h3 className="whitespace-nowrap text-lg font-medium w-24 text-secondary">
        {percentText}
      </h3>

      {/* Right Line */}
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />
    </div>
  );
}

