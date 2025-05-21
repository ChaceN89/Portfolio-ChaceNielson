import MyBtn from '@/components/buttons/MyBtn';
import { useNavigate } from 'react-router-dom';
import ScrollWheelBtn from '../uiElements/ScrollWheelBtn';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGamepad } from 'react-icons/fa';
import { useInitialLoading } from '../routing/InitialLoadingContext';


export default function Hero() {

  // SHould the animation be shown or not based on the loading state of the app
  const { InitialLoadingDone } = useInitialLoading();
  const shouldAnimate = !InitialLoadingDone;

  // Global delay for the splash screen
  const splashScreenDelay = 2; // seconds to wait before starting the animation

  // list of all delays
  const delays = [
    splashScreenDelay+0, 
    splashScreenDelay+0.2, 
    splashScreenDelay+0.4, 
    splashScreenDelay+0.6, 
    splashScreenDelay+0.8, 
    splashScreenDelay+1.0,
  ];


  // The specific animation info for each element with a delay as a prop so they can be staggered
  const animationInfo =(delay) => {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: shouldAnimate
        ? { delay, duration: 0.4, ease: 'easeOut' }
        : { duration: 0 },
    };
  }

    const navigate = useNavigate();
  const handleRouteClick = () => navigate('/contact');


  return (
    <div className="w-screen min-h-[85vh] pt-32 flex flex-col lg:flex-row lg:flex-reverse items-center justify-center px-8 md:px-20 py-12 gap-12 relative overflow-hidden">

      {/* Left Text Block */}
      <div className="flex flex-col gap-4 z-10">

        <motion.h1 {...animationInfo(delays[0])} className='underline decoration-2 underline-offset-8 '>
          Chace Nielson
        </motion.h1>

        {/* Bullet points */}
        <BulletPoint animationInfo={animationInfo} delay={delays[1]} icon={<FaCode />} text="Software Engineer" />
        <BulletPoint animationInfo={animationInfo} delay={delays[2]} icon={<FaServer />} text="Full-Stack Developer" />
        <BulletPoint animationInfo={animationInfo} delay={delays[3]} icon={<FaGamepad />} text="Game Developer" />

        <motion.div
          {...animationInfo(delays[4])}
          className="opacity-90 italic space-y-1"
        >
          <p>“Custom software. Creative solutions.</p>
          <p>Whether it's web or games—I’ve got you covered.”</p>
        </motion.div>

        <motion.div
          {...animationInfo(delays[5])}
        >
          <MyBtn callBack={handleRouteClick}>Let's Talk</MyBtn>
        </motion.div>
      </div>

      {/* Right Side Visual */}
      <motion.div
        {...animationInfo(delays[0])}
        className="max-w-sm md:max-w-md flex-[1_1_300px] z-0 hidden md:block  "
      >
        <img
          src="/logos/my-logos/logo562x562.png"
          alt="Chace working"
          className="w-full  p-2 my-drop-shadow-lg "
        />
      </motion.div>

      <ScrollWheelBtn to="featured-projects" extraDelay={4} />
    </div>
  );
}

// Specific Bullet point component to use in the hero section
function BulletPoint({ animationInfo, delay, icon, text }) {
  return (
    <motion.h4
      {...animationInfo(delay)}
      className="opacity-80 flex items-center gap-2"
    >
      {icon}
      {text}
    </motion.h4>
  );
}