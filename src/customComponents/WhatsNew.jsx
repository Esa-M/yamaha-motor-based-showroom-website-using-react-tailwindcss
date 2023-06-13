import React from 'react'
import images from '../assets/image3.jpg'
export default function WhatsNew() {
  return (
 <>
 <div id='HOME' className="hero min-h-screen bg-center " style={{backgroundImage : `url(${images})`}} >
  <div className="hero-overlay bg-opacity-80 hover:bg-opacity-70 ease-in-out"></div>
  <div className="hero-content text-center text-neutral-content text-sm">
    <div className="max-w-md  flex flex-col xl:gap-5 font-normal xl:text-xl lg:gap-5 md:gap-3 md:text-lg sm:gap-2  gap-4">
      <div className='font-bold bg-slate-200 rounded-full text-slate-900 xl:p-5 xl:text-6xl lg:p-5 lg:text-6xl md:p-4 md:text-5xl sm:p-2 sm:text-2xl    text-2xl p-1'>Whats new!</div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam atque quia ea quas autem. Nam quaerat rem odit optio, iste, recusandae dicta blanditiis omnis ab, dolores distinctio voluptatem non animi.
    
      <span className="mt-3 text-indigo-300 inline-flex items-center cursor-pointer">More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
    
    </div>
    
  </div>
</div>
 </>
  )
}
