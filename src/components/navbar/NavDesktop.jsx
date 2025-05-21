/**
 * @file NavDesktop.jsx
 * @module NavDesktop
 * @desc React component for rendering the desktop navigation links.
 *       Displays all navigation items with icons, hover effects, and active highlighting.
 *
 * @features
 * - Renders a responsive horizontal nav layout on large screens (`lg:flex-row`).
 * - Uses `LinkItem` components to scroll or route based on nav configuration.
 * - Displays optional icons with animated reveal on hover.
 * - Applies blur to non-hovered items for focused visual interaction.
 * - Tracks hover state to enhance UI feedback with smooth transitions.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import DarkModeButton from './DarkModeButton'
import LinkItem from './LinkItem'
import { navLinks } from '@/data/nav/navData'

export default function NavDesktop() {
 
  return (     
    <div className="z-10 items-center gap-4 flex flex-col w-screen justify-items-center lg:flex-row lg:w-auto ">
      {navLinks.map(({ label, icon: Icon, ...linkProps }, index) => (
        <LinkItem key={label} {...linkProps}
          className='hover:text-accent-alt'
          activeClassName="underline"
        >
          <h6 className=" group flex items-center justify-end  transition-all duration-300 ease-in-out ">
            <div
              className="opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-1.5"
            >
              <Icon />
            </div>
            <span className="transition-all duration-400 group-hover:translate-x-3.5 ">
              {label}
            </span>
          </h6>
        </LinkItem>
      ))}
      <div className='pl-4.5 lg:pl-0'>

      <DarkModeButton/>
      </div>
    </div>
  )
}
