/**
 * @file ModalHeader.jsx
 * @module ModalHeader
 * @desc A simple header component for modals that displays a project title and optional description.
 *
 * @props
 * @param {string} name - The title or name of the modal content.
 * @param {string} [description] - Optional description text displayed under the title.
 *
 * @usage
 * <ModalHeader name="Project Title" description="Brief summary of the project" />
 *
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated May 23, 2025
 */

export default function ModalHeader({ name, description}) {
  return (
    <div className="space-y-1">
      <h2 className="font-bold">{name}</h2>
      {description && <p className="text-darken">{description}</p>}
    </div>
  )
}
