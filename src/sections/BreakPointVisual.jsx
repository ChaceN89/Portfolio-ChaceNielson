import React from 'react'

function BreakPointVisual() {
  return (
    <div class="fixed bottom-0 right-0 m-1 p-1  font-mono z-100 text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-black">
    <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
    <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
    <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
    <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
    <div class="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
    <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
  </div>
  )
}

export default BreakPointVisual