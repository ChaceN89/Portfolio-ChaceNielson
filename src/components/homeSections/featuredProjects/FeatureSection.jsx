import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import React from 'react'

export default function FeatureSection({ project, background, isLast, nextId }) {
  const { src, textColor, bgColor } = background;

  return (
    <BackgroundWrapper
      id={`featured-${project.id}`}
      background={src}
      backgroundClass="w-screen"
      childClass="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh] px-8 py-24 relative"
      fixed
      noise
      overlay={!isLast && nextId ? <ScrollWheelBtn to={nextId} /> : null}
    >
      <div className="w-full md:w-1/2 flex justify-center" >
        <ImageComponent
          src={`/projects/${project.id}/${project.images?.[0]?.src}`}
          alt={project.name}
          blurHash={project.images?.[0]?.blurhash}
          className="rounded-xl shadow-xl h-96 max-w-[90vw] object-cover border"
        />
      </div>

      <div className={`md:w-1/2 space-y-4 rounded-[50px] w-10  ${bgColor} ${textColor} p-8`}>
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="text-xl opacity-90">{project.blurb}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {project.mainStack?.map((icon, idx) => (
            <div key={idx} className="text-3xl">{icon.icon}</div>
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );


}
