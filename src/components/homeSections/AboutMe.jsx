/**
 * @file AboutMe.jsx
 * @module components/sections/AboutMe
 * @desc Highlights soft skills and invites users to connect for collaboration, with scroll-based animations.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 22, 2025
 */

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAnimationSettings } from '@/components/animations/AnimationContext'

// icons
import { 
  FaComments, FaFileAlt, FaUsers, FaPaintBrush, FaFlagCheckered
} from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi2'
import { BsPuzzleFill } from 'react-icons/bs'
import { HiArrowsRightLeft } from 'react-icons/hi2'

// Components
import MyBtn from '@/components/buttons/MyBtn'

// Soft skills data
const skills = [
  {
    title: 'Self-Driven',
    description: 'I take initiative and ownership of my work, always pushing to improve and grow independently.',
    icon: FaFlagCheckered, // Represents energy/drive
    bg: 'bg-primary',
    text: 'text-secondary'
  },
  {
    title: 'Adaptability',
    description: 'I stay flexible and level-headed through changing goals, shifting tech, and new challenges.',
    icon: HiArrowsRightLeft, // Represents change and agility
    bg: 'bg-secondary',
    text: 'text-primary'
  },
  {
    title: 'Creativity',
    description: 'I love thinking outside the box and crafting elegant, unexpected solutions.',
    icon: FaPaintBrush, // Represents artistic/creative thought
    bg: 'bg-accent',
    text: 'text-primary'
  },
  {
    title: 'Innovation',
    description: 'I’m passionate about exploring new tech and reimagining how things can be done better.',
    icon: HiLightBulb, // More modern bulb icon than Fa
    bg: 'bg-tertiary',
    text: 'text-secondary'
  },
  {
    title: 'Communication',
    description: 'I value clear and empathetic communication that keeps everyone on the same page.',
    icon: FaComments,
    bg: 'bg-secondary',
    text: 'text-primary'
  },
  {
    title: 'Documentation',
    description: 'Whether it’s code comments or systems architecture, I write to be understood.',
    icon: FaFileAlt,
    bg: 'bg-primary-alt',
    text: 'text-secondary'
  },
  {
    title: 'Teamwork',
    description: 'I thrive in cross-functional teams and love building products with great people.',
    icon: FaUsers,
    bg: 'bg-tertiary',
    text: 'text-secondary'
  },
  {
    title: 'Problem Solving',
    description: 'From bugs to big ideas, I take a curious, hands-on approach to creative problem solving.',
    icon: BsPuzzleFill, // Represents solving problems visually
    bg: 'bg-accent',
    text: 'text-primary'
  }
]

/*
 Creativity, Innovation, Self driven, Analytical, Critical Thinking, Attention to details, 
*/

export default function AboutMe() {
  const navigate = useNavigate()
  const sectionRef = useRef(null)

  const { animationsEnabled, } = useAnimationSettings() // Get animation settings from context

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Animation settings 
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const bottomY = useTransform(scrollYProgress, [0, 0.7, 1], [180, 0, 0 ])

  // Memoize the animated style to avoid unnecessary recalculations
  const animatedStyle = useMemo(() => {
    if (!animationsEnabled) return {}
    return { opacity: bottomOpacity, y: bottomY }
  }, [animationsEnabled, bottomOpacity, bottomY])


  // Inside your component
  const [isXL, setIsXL] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsXL(window.innerWidth >= 1280)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <motion.section ref={sectionRef} className="py-20 px-4 max-w-4xl xl:max-w-7xl mx-auto space-y-20" id="lets-connect">
      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-5 px-6 lg:px-10">
        {skills.map(({ title, description, icon: Icon, bg, text }, index) => {
          const cardProgress = useTransform(
            scrollYProgress,
            [0, 0.15 + index * 0.05],
            [1, 0]
          )
          
          // check which direction the card should animate from  based on index or screen size
          var fromLeft = index % 2 === 0 ? -1 : 1
          if(isXL){ fromLeft =  1 } // alwastys from the right on xl screens

          const x = useTransform(cardProgress, [1, 0], [fromLeft * 150, 0])
          const y = useTransform(cardProgress, [1, 0], [180, 0])
          const rotate = useTransform(cardProgress, [1, 0], [fromLeft * -10, 0])
          const opacity = useTransform(cardProgress, [1, 0], [0, 1])

          const cardAnimatedStyle = animationsEnabled
            ? { x, y, opacity, rotate }
            : {}

          return (
            <motion.div
              key={title}
              style={cardAnimatedStyle}
              className={`flex flex-col items-center text-center p-6 rounded-xl ${bg} ${text} shadow-2xl`}
            >
              <div className="flex items-center justify-between gap-1 whitespace-nowrap">
                <Icon className={`text-4xl ${text}`} />
                <h5>{title}</h5>
              </div>
              <p className="mt-2 text-sm opacity-90">{description}</p>
            </motion.div>
          )
        })}

      </div>

      {/* CTA */}
      <motion.div
        style={animatedStyle}
        className="text-center "
      >
        <h3 className="text-2xl font-semibold">Let's Build Something Together</h3>
        <p className="mt-2 text-sm opacity-80">
          I’m always excited to meet new collaborators. If you’ve got a project or an idea — let’s talk!
        </p>

        <div className="mt-8 flex justify-center">
          <MyBtn 
            callBack={() => navigate('/contact')} 
            GA_label="About Page Contact Me Button"
          >
            Contact Me
          </MyBtn>
        </div>
      </motion.div>
    </motion.section>
  )
}
