/**
 * @file AboutMe.jsx
 * @module components/sections/AboutMe
 * @desc Highlights soft skills and invites users to connect for collaboration, with scroll-based animations.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 22, 2025
 */

import React, { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaComments, FaFileAlt, FaUsers, FaLightbulb } from 'react-icons/fa'
import MyBtn from '@/components/buttons/MyBtn'
import { useNavigate } from 'react-router-dom'
import { useAnimationSettings } from '@/components/animations/AnimationContext'

// Soft skills data
const skills = [
  {
    title: 'Communication',
    description: 'I bring clarity and empathy to every conversation, making collaboration seamless and effective.',
    icon: FaComments,
    bg: 'bg-secondary',
    text: 'text-primary'
  },
  {
    title: 'Documentation',
    description: 'Whether it’s code comments or system architecture, I write to be understood and remembered.',
    icon: FaFileAlt,
    bg: 'bg-primary-alt',
    text: 'text-secondary'
  },
  {
    title: 'Teamwork',
    description: 'I thrive in cross-functional teams and love building products with great people.',
    icon: FaUsers,
    bg: 'bg-accent',
    text: 'text-primary'
  },
  {
    title: 'Problem Solving',
    description: 'From bugs to big ideas, I take a curious, hands-on approach to creative problem solving.',
    icon: FaLightbulb,
    bg: 'bg-tertiary',
    text: 'text-secondary'
  }
]

export default function AboutMe() {
  const navigate = useNavigate()
  const sectionRef = useRef(null)

  const { prefersReducedMotion, } = useAnimationSettings() // Get animation settings from context

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Animation settings 
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1,1])
  const bottomY = useTransform(scrollYProgress, [0, 0.6, 1], [200, 0, 0 ])

  // Memoize the animated style to avoid unnecessary recalculations
  const animatedStyle = useMemo(() => {
    if (prefersReducedMotion) return {}
    return { opacity: bottomOpacity, y: bottomY }
  }, [prefersReducedMotion, bottomOpacity, bottomY])

  return (
    <motion.section ref={sectionRef} className="py-12 px-4  max-w-4xl mx-auto" id="lets-connect">
      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 px-6 lg:px-10">
        {skills.map(({ title, description, icon: Icon, bg, text }, index) => {
          const cardProgress = useTransform(
            scrollYProgress,
            [0.1 + index * 0.05, 0.3 + index * 0.05],
            [1, 0]
          )

          const fromLeft = index % 2 === 0 ? -1 : 1
          const x = useTransform(cardProgress, [1, 0], [fromLeft * 150, 0])
          const y = useTransform(cardProgress, [1, 0], [180, 0])
          const rotate = useTransform(cardProgress, [1, 0], [fromLeft * -10, 0])
          const opacity = useTransform(cardProgress, [1, 0], [0, 1])

          const cardAnimatedStyle = !prefersReducedMotion
            ? { x, y, opacity, rotate }
            : {}

          return (
            <motion.div
              key={title}
              style={cardAnimatedStyle}
              className={`flex flex-col items-center text-center p-6 rounded-xl ${bg} ${text} shadow-2xl`}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon className={`text-4xl ${text}`} />
                <h5 className="text-lg font-semibold">{title}</h5>
              </div>
              <p className="mt-2 text-sm opacity-90">{description}</p>
            </motion.div>
          )
        })}

      </div>

      {/* CTA */}
      <motion.div
        style={animatedStyle}
        className="mt-16 text-center "
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
