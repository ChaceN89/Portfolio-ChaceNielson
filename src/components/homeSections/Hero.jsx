import MyBtn from '@/components/buttons/MyBtn';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import { ScrollToID } from '@/utils/utils';
import { useNavigate } from 'react-router-dom';
import ScrollWheelBtn from '../uiElements/ScrollWheelBtn';


import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGamepad } from 'react-icons/fa';
import { useSplash } from '../uiElements/splashScreen/SplashContext';

function BulletPoint({ text, delay, icon }) {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-gray-700 flex items-center gap-2"
    >
      {icon}
      {text}
    </motion.h4>
  );
}

export default function Hero() {
  
  const { splashDone } = useSplash();
  const timeBeforeLoad = splashDone ? 0.2 : 2.5;


  const navigate = useNavigate();

  // use  react to create fucntion to go to a different router page  route, to contact page /conten
 const handleRouteClick = () => {
  navigate('/contact');
};

  return (
    <div className="w-screen min-h-[85vh] pt-32 flex flex-col lg:flex-row lg:flex-reverse items-center justify-center px-8 md:px-20 py-12 gap-12 relative overflow-hidden ">

      {/* Left Text Block */}
      <div className="flex flex-col gap-2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: timeBeforeLoad }}
        >
          Chace Nielson
        </motion.h1>

        <BulletPoint delay={timeBeforeLoad + 0.2} icon={<FaCode />} text="Software Engineer" />
        <BulletPoint delay={timeBeforeLoad + 0.4} icon={<FaServer />} text="Full-Stack Dev" />
        <BulletPoint delay={timeBeforeLoad + 0.6} icon={<FaGamepad />} text="Game Developer" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: timeBeforeLoad + 0.8 }}
          className="text-gray-600 italic space-y-1"
        >
          <p>“Custom software. Creative solutions.”</p>
          <p>“Whether it's web or games—I’ve got you covered.”</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: timeBeforeLoad + 1 }}
        >
          <MyBtn callBack={handleRouteClick}>Let's Talk</MyBtn>
        </motion.div>
      </div>

      {/* Right Side Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-sm md:max-w-md z-0 hidden lg:block"
      >
        <img
          src="/logos/my-logos/logo562x562.png"
          alt="Chace working"
          className="w-full rounded-xl my-drop-shadow-lg"
        />
      </motion.div>
      <ScrollWheelBtn to='featured-projects' extraDelay={4}/>
    </div>
  );
}
