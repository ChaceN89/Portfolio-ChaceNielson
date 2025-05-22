/**
 * @file Footer.jsx
 * @module Layout/Footer
 * @desc Primary site footer containing contact info, quick links, and social links.
 *       Wrapped in a motion container for animated transitions on page exit.
 *
 * @features
 * - Displays contact details via <FooterContact />
 * - Lists key internal routes with <QuickLinks />
 * - Includes social media links styled as breadcrumbs via <SocialBreadcrumbs />
 * - Uses <BackgroundWrapper /> to apply background styling with noise and accent overlays.
 * - Animated slide/fade out effect using Framer Motion for smooth page transitions.
 * - Includes a personal connection message in the closing footer area.
 *
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated May 9, 2025
 */
import FooterContact from './FooterContact';
import BackgroundWrapper from "../uiElements/images/BackgroundWrapper";
import QuickLinks from './QuickLinks';
import { motion } from 'framer-motion';
import SocialBreadcrumbs from "./SocialBreadCrumbs";

export default function Footer() {
  return (
    <motion.footer
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }} // slides down + fades out
    transition={{ duration: 0.4, ease: 'easeInOut' }}
  >
    <footer className="w-full bg-secondary-alt text-white overflow-hidden rounded-t-2xl ">
      <BackgroundWrapper  noise backgroundSm="/overlays/dots-1.png" backgroundClass="bg-accent/40">
        <div className="px-6 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <FooterContact />
            <QuickLinks />
            <SocialBreadcrumbs/>
          </div>
        </div>

        {/* <div className="bg-accent-alt/40 py-4 text-center text-sm space-y-4">
          <p>
            I'm always open to connecting with creative minds, collaborators, and curious teams — let's build something great together.
          </p>
        </div> */}
      </BackgroundWrapper>
    </footer>
    </motion.footer>
  );
}
