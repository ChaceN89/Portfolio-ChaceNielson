/**
 * @file CarouselCard.jsx
 * @module CarouselCard
 * @desc Reusable card component for displaying a project inside a carousel.
 *       Includes image with blurhash loading, hover zoom animation, and project name/tag label.
 * 
 * @props
 * @param {object} project - Project object containing name, tag, and thumbnail data
 * @param {function} onClick - Callback to open the associated project modal
 * 
 * @example
 * <CarouselCard project={project} onClick={() => openModal(project.id)} />
 * 
 * @author Chace Nielson
 * @created May 22, 2025
 * @updated May 22, 2025
 */
import ImageComponent from "@/components/uiElements/images/ImageComponent";

export default function CarouselCard({ project, onClick }) {
  const image = project.thumbnail?.src;
  const blurhash = project.thumbnail?.blurhash;

  return (
    <div
      onClick={onClick}
      className="group overflow-hidden border-2 border-secondary/40 dark:border-primary/60 rounded-lg shadow-md bg-black cursor-pointer transition-transform"
    >
      {/* Aspect-ratio wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-secondary/40 dark:border-primary/60">
        <span className="ripple-hover z-10" />
        <ImageComponent
          src={image}
          blurHash={blurhash}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary text-center py-2 text-sm font-medium">
        {project.name}
      </div>
    </div>
  );
}
