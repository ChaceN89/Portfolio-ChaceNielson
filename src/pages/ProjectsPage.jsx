/**
 * @file ProjectsPage.jsx
 * @module Pages/Projects
 * @desc Displays all featured and side projects using the `ProjectSection` component.
 *
 * @author Chace Nielson
 * @created May 23, 2025
 * @updated May 23, 2025
 */
import ProjectSection from '@/components/projects/ProjectSection'

export default function ProjectsPage() {
  return (
    <div className='container mx-auto py-20 px-2'>
      <ProjectSection />
    </div>
  )
}
