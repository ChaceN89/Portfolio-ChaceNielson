/**
 * Triggers a particle burst or background pulse.
 * @param {object} opts
 * @param {MouseEvent} [opts.event] - Mouse event for positioning. Position takes precedence over target.
 * @param {HTMLElement} [opts.target] - DOM node to center the effect on.
 * @param {HTMLElement} [opts.parent=document.body] - Container to append particles to.
 * @param {boolean} [opts.backgroundPulse=false] - Whether to flash the background instead of or with particles.
 * * @param {number} [opts.particleCount=30] - Number of particles to create.
 */
export function popEffect({
  event,
  target,
  parent = document.body,
  backgroundPulse = false,
  backgroundPulseColor = '#000',
  backgroundPulseDuration = 300,
  particleCount = 30,
  particleColor = '#fff',
  particleOpacity = 1,
  particleSizeRange = {min: 4, max: 12},
  particleDuration = 1200,
} = {}) {
  const origin = { x: 0, y: 0 };

  // If event, use the mouse position
  if (event) {
    origin.x = event.clientX;
    origin.y = event.clientY;

  // if target get center of target 
  } else if (target) {
    const rect = target.getBoundingClientRect();
    origin.x = rect.left + rect.width / 2;
    origin.y = rect.top + rect.height / 2;
  }else{
    console.warn("No event or target provided for popEffect! Defaulting to (0, 0) screen position.");
  }

  // Schedule the particles over the next few animation frames
  scheduleParticleBurst(
    origin, 
    parent, 
    particleCount,
    particleColor,
    particleOpacity,
    particleSizeRange,
    particleDuration
  );


  pulseBackground(backgroundPulseDuration, backgroundPulseColor || particleColor, target, backgroundPulse);


}

/**
 * Creates a fading overlay inside the target element for a background flash effect.
 * @param {number} duration - Duration of the pulse in ms.
 * @param {string} color - Background color (hex, rgb, CSS var).
 * @param {HTMLElement} target - The element to flash.
 * @param {boolean} enabled - Whether to perform the pulse.
 */
export function pulseBackground(duration, color, target, enabled = true) {
  if (!enabled || !target) return;

  // Ensure the target has relative positioning (non-destructive)
  const originalPosition = getComputedStyle(target).position;
  if (originalPosition === 'static') {
    target.style.position = 'relative';
  }

  const overlay = document.createElement('div');
  overlay.className = 'bg-flash-overlay';
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.pointerEvents = 'none';
  overlay.style.backgroundColor = color;
  overlay.style.animation = `flash-fade ${duration}ms ease-out forwards`;
  overlay.style.zIndex = -1; // behind particles (which should be z-index 9999 or similar)
  overlay.style.borderRadius = getComputedStyle(target).borderRadius;
  overlay.style.overflow = 'hidden';

  target.appendChild(overlay);

  setTimeout(() => overlay.remove(), duration);
}






function scheduleParticleBurst(
  origin, 
  parent, 
  count, 
  color,
  opacity,
  sizeRange,
  duration,
  index = 0
) {
  if (index >= count) return;

  requestAnimationFrame(() => {
    createParticle(origin.x, origin.y, parent, sizeRange, duration, color, opacity);
    scheduleParticleBurst(origin, parent, count, color, opacity, sizeRange, duration, index + 1);
  });
}



function createParticle(
  x, y, 
  parent,
  sizeRange,
  duration,
  color,
  opacity
) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  particle.style.background = color;
  particle.style.setProperty('--particle-opacity', opacity);



  const { min, max } = sizeRange;
  const sizeValue = Math.random() * (max - min) + min;
  const size = `${sizeValue}px`;
  particle.style.width = size;
  particle.style.height = size;

  // Fix: only subtract parent offset if not using document.body
  let offsetX = x, offsetY = y;
  if (parent !== document.body) {
    const rect = parent.getBoundingClientRect();
    offsetX = x - rect.left;
    offsetY = y - rect.top;
  }

  particle.style.left = `${offsetX}px`;
  particle.style.top = `${offsetY}px`;

  const destinationX = (Math.random() - 0.5) * 100;
  const destinationY = (Math.random() - 0.5) * 100;

  particle.style.setProperty('--x', `${destinationX}px`);
  particle.style.setProperty('--y', `${destinationY}px`);
  particle.style.setProperty('--particle-duration', `${duration}ms`);

  parent.appendChild(particle);
  setTimeout(() => particle.remove(), duration);
}
