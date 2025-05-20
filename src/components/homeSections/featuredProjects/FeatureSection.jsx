import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import React from 'react'
import MyBtn from '@/components/buttons/MyBtn';
import { openModal } from '@/utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FeatureSection({ project, background, nextId }) {
  const { src, textColor, bgColor } = background;

  const navigate = useNavigate();
  const location = useLocation();


  const handleProjectClick = (id) => {
    openModal({
      type: "project",
      id:id,
      navigate,
      location,
    });
  }

  return (
    <BackgroundWrapper
      id={`featured-${project.id}`}
      background={src}
      backgroundClass="w-screen"
      childClass="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh] px-8 py-24 relative"
      fixed
      // noise
      overlay={<ScrollWheelBtn to={nextId} />}
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
        {/* <div className="flex flex-wrap gap-2 pt-4">
          {project.mainStack?.map((icon, idx) => (
            <div key={idx} className="text-3xl">{icon.icon}</div>
          ))}
        </div> */}
        <MyBtn
          sm
          callBack={() => handleProjectClick(project.id)}
        >
          Learn More
        </MyBtn>
      </div>
    </BackgroundWrapper>
  );


}
