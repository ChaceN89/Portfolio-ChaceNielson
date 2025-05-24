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
 * @updated May 23, 2025
 */
import FooterContact from './FooterContact';
import BackgroundWrapper from "../uiElements/images/BackgroundWrapper";
import QuickLinks from './QuickLinks';
import { motion } from 'framer-motion';
import SocialBreadcrumbs from "./SocialBreadCrumbs";
import { useAnimationSettings } from '@/components/animations/AnimationContext';
import { useMemo } from 'react';

export default function Footer() {
  const { animationsEnabled } = useAnimationSettings();

  // Only memoize animation props if animations are enabled
  const animationProps = useMemo(() => {
    if (!animationsEnabled) return {};
    return {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { duration: 0.4, ease: 'easeInOut' },
    };
  }, [animationsEnabled]);

  return (
    <motion.footer {...animationProps}>
      <footer className="w-full bg-secondary-alt text-primary overflow-hidden rounded-t-[50px] border-t-2 border-secondary dark:border-primary">
        <BackgroundWrapper noise backgroundSm="/overlays/dots-1.png" backgroundClass="bg-accent/40 rounded-t-[50px]">
          <div className="px-6 lg:px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <FooterContact />
              <QuickLinks />
              <SocialBreadcrumbs />
            </div>
          </div>
        </BackgroundWrapper>
      </footer>
    </motion.footer>
  );
}
