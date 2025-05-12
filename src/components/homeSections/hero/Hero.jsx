import MyBtn from '@/components/buttons/MyBtn';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import { globals } from '@/data/globals';
import React from 'react'

import { scroller } from 'react-scroll';

import { ScrollToID } from '@/utils/utils';


export default function Hero() {


  const background = "/backgrounds/hero.jpg"; // coffe desktop 

  const images = [
    "/backgrounds/computer-1.jpg",
    "/backgrounds/controller-1.jpg",
  ]

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: globals.scrollDuration,
      offset: globals.scrollOffset,
    });
  }


  return (
    <BackgroundWrapper
      background={background}
      backgroundClass='w-screen min-h-screen flex  items-center justify-center relative '
      childClass='relative'
      fixed
      noise
      blur={5} 
      opacity={0.8}
      overlay={<ScrollWheelBtn />} //overlay component on the background
    >




      <BackgroundWrapper 
        background={background}
        backgroundClass='h-full w-full rounded-[10rem] border-2 border-white/20 ' 
        childClass=' h-full w-full min-h-[60vh] min-w-[70vw] px-24 py-12 text-primary flex  items-end justify-end gap- ' 
        fixed
        opacity={1}
      >
        <div className="flex justify-end py-10 w-full">
          <div className="text-primary text-right outlined-text max-w-[30rem] ">

            {/* Main text */}
            <div>
              <h3 className="whitespace-nowrap underline">CHACE NIELSON</h3>
              <ul className="list-disc list-inside text-xl font-semibold space-y-2">
                <li>Software Engineer</li>
                <li>Full-Stack Developer</li>
                <li>Game Developer</li>
              </ul>
            </div>

            {/* Images */}
            <div className='flex gap-4 justify-end py-4'>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl h-44 border-2 border-white/20 w-1/2 cursor-pointer"
                  onClick={() => ScrollToID(`tech-stacks`)}
            
                >
                  <ImageComponent
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-120"
                  />
                </div>
              ))}
            </div>
     
          </div>
        </div>


      </BackgroundWrapper>

    </BackgroundWrapper>

  )
  

  return (
    <BackgroundWrapper
      background={background}
      backgroundClass='w-screen min-h-[90vh] flex  items-center justify-center '
      fixed
      noise
      // opacity={0.3}
      blur={5} // cause jitter
    >
      <BackgroundWrapper 
        background={background}
        backgroundClass='h-full w-full  text-black rounded-full border-2 ' 
        childClass='flex h-full w-full items-center px-40 justify-around gap-4 '
        fixed
      >
        <div className='w-[65vw] flex  items-center justify-around gap-4 opacity-10'>

    
        <div className='text-white '>
        <MyBtn  children={"test"} callBack={()=>{
          
        }}/>
    
        <div>{" "}</div> <br />
        <MyBtn sm children={"Projects"} callBack={()=>{
          scroller.scrollTo("Projects", {
            smooth: true,
            duration: 2000,
            offset: -50,
          });

        }}/>
  
        <div>{" "}</div> <br />
        <MyBtn  
          children={"See More"}
          callBack={()=>{
          // leave page to alberta tomorrow sute .cs
          window.open("https://albertatomorrow.ca", "_blank");

          }}
        />


          <h2 className='whitespace-nowrap '>Chace Nielson</h2>
          <ul className='bullet-list list-inside'>
            <li><h5>Software Engineer</h5></li>
            <li><h5>Full-Stack Developer</h5></li>
            <li><h5>Game Developer</h5></li>
          </ul>

        </div>

        <div className=' grid grid-cols-2 gap-4 items-center py-10 '>
          <ImageComponent
            src={"/portraits/pngs/chace-2.png"} alt={"aaaa"}
            className="  h-72 w-72   rounded-bl-[100px] object-cover rounded-xl"
            imgClass="object-top"
            />
            <div className='space-y-'>

          <ImageComponent
            src={"/backgrounds/pexels-4.jpg"} alt={"aaaa"}
            className="rounded-xl  h-54 object-cover"
            />
          <ImageComponent
            src={"/backgrounds/pexels-1.jpg"} alt={"aaaa"}
            className="rounded-xl  h-54 object-cover"
            />
            </div>
      

          </div>
          </div>

      </BackgroundWrapper>

    </BackgroundWrapper>
  )
}
