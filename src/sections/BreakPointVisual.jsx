/**Used to see what break point is currently at shows icon in top left */
import React from 'react'

function BreakPointVisual() {
  return (
    <div className="fixed top-0 left-0 m-1 p-1  z-50 font-mono z-100 text-white h-10 w-10 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-black">
    <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
    <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
    <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
    <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
    <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
    <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
  </div>
  )
}

export default BreakPointVisual