/**
 * @file AboutMe.jsx
 * @module components/sections/AboutMe
 * @desc Highlights soft skills and invites users to connect for collaboration, with scroll-based animations.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 22, 2025
 */

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaComments, FaFileAlt, FaUsers, FaLightbulb } from 'react-icons/fa'
import MyBtn from '@/components/buttons/MyBtn'
import { useNavigate } from 'react-router-dom'

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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const topOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const topY = useTransform(scrollYProgress, [0, 0.2,1], [100, 0,0])

  const bottomOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1,1])
  const bottomY = useTransform(scrollYProgress, [0, 0.6, 1], [200, -20, 80 ])

  return (
    <motion.section ref={sectionRef} className="py-16 px-2  max-w-4xl mx-auto" id="lets-connect">
      {/* Header */}
      <motion.div
        style={{ opacity: topOpacity, y: topY }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold">Working With Me</h2>
        <p className="mt-2 text-base font-medium">
          Here's what you can expect when we team up — thoughtful collaboration, technical clarity, and solutions that work.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 px-6 lg:px-10">
        {skills.map(({ title, description, icon: Icon, bg, text }, index) => {
          const cardProgress = useTransform(
            scrollYProgress,
            [0.1 + index * 0.05, 0.3 + index * 0.05],
            [1, 0]
          )
          // based on index being even or odd, we can determine if the card should come from the left or right
          const fromLeft = index % 2 === 0 ? -1 : 1

          const x = useTransform(cardProgress, [1, 0], [fromLeft*150, 0])
          const y = useTransform(cardProgress, [1, 0], [180, 0])
          const rotate = useTransform(cardProgress, [1, 0], [fromLeft*-10, 0])
          const opacity = useTransform(cardProgress, [1, 0], [0, 1])

          return (
            <motion.div
              key={title}
              style={{ x, y, opacity, rotate }}
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
        style={{ opacity: bottomOpacity, y: bottomY }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-semibold">Let’s Build Something Together</h3>
        <p className="mt-2 text-sm opacity-80">
          I’m always excited to meet new collaborators. If you’ve got a project or an idea — let’s talk!
        </p>

        <div className="mt-8 flex justify-center">
          <MyBtn callBack={() => navigate('/contact')}>Contact Me</MyBtn>
        </div>
      </motion.div>
    </motion.section>
  )
}
