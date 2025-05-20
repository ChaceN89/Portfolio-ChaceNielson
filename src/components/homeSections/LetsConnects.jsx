/**
 * @file LetsConnects.jsx
 * @module components/sections/LetsConnects
 * @desc Section showcasing soft skills with icons and a call-to-action to contact.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 12, 2025
 */

import React from 'react'
import { FaComments, FaFileAlt, FaUsers, FaLightbulb } from 'react-icons/fa'
import MyBtn from '@/components/buttons/MyBtn'
import { useNavigate } from 'react-router-dom'

const skills = [
  {
    title: 'Communication',
    description: 'Clear, concise, and collaborative discussions in teams.',
    icon: FaComments,
    bg: 'bg-secondary',
    text: 'text-primary'
  },
  {
    title: 'Documentation',
    description: 'Thorough technical documentation and clean code comments.',
    icon: FaFileAlt,
    bg: 'bg-primary-alt',
    text: 'text-secondary'
  },
  {
    title: 'Teamwork',
    description: 'Proven collaboration across interdisciplinary teams.',
    icon: FaUsers,
    bg: 'bg-accent',
    text: 'text-primary'
  },
  {
    title: 'Problem Solving',
    description: 'Creative solutions with a pragmatic engineering mindset.',
    icon: FaLightbulb,
    bg: 'bg-tertiary',
    text: 'text-secondary'
  }
]

export default function LetsConnects() {
  const navigate = useNavigate()

  return (
    <div className='py-16 '>
      <div className='text-center mb-10 text-secondary'>
        <h2 className='text-3xl font-bold'>Let’s Connect</h2>
        <h6 className='mt-2 text-base font-medium'>Here are some of the strengths I bring to every project.</h6>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-6 lg:px-10'>
        {skills.map(({ title, description, icon: Icon, bg, text }) => (
          <div key={title} className={`flex flex-col items-center text-center p-6 rounded-xl ${bg} ${text} shadow-lg`}>
            <Icon className={`text-4xl ${text}`} />
            <h5 className='mt-4 text-lg font-semibold'>{title}</h5>
            <p className='mt-2 text-sm opacity-90'>{description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='mt-16 text-center text-secondary'>
        <h3 className='text-2xl font-semibold'>Ready to start building something amazing together?</h3>
        <p className='mt-2 text-sm text-secondary/80'>I’m always open to new opportunities and collaborations. Let’s chat!</p>

        <div className='mt-8 flex justify-center'>
          <MyBtn callBack={() => navigate('/contact')}>
            Contact Me
          </MyBtn>
        </div>
      </div>
    </div>
  )
}
