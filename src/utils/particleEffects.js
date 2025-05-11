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
  particleCount = 30,
  particleSizeRange = 8,
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
  scheduleParticleBurst(origin, parent, particleCount);

  if (backgroundPulse && target) {
    target.classList.add('bg-flash');
    setTimeout(() => target.classList.remove('bg-flash'), 300);
  }
}



function scheduleParticleBurst(origin, parent, count, index = 0) {
  if (index >= count) return;

  requestAnimationFrame(() => {
    createParticle(origin.x, origin.y, parent);
    scheduleParticleBurst(origin, parent, count, index + 1);
  });
}



function createParticle(x, y, parent) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = `${Math.random() * 8 + 4}px`;
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

  parent.appendChild(particle);
  setTimeout(() => particle.remove(), 1200);
}
