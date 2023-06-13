import React from 'react'
import bg from '../assets/whitebg.jpg'


function Dealer(){
    return(
        <div data-theme='dark' id='DEALER'>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col text-center w-full mb-20">
           <h1 className=" text-slate-400  mb-3">Our Dealers</h1>
           <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
         </div>
         <div className="flex flex-wrap -m-4">
           <div className="p-4 lg:w-1/2">
             <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
               <img alt="team" className="flex-shrink-0 rounded-full  w-44 h-44 object-cover object-center sm:mb-0 mb-4" src={bg}/>
               <div className="flex-grow sm:pl-8">
                 <h3 className="text-slate-400 mb-1">Dealer 1</h3>
                 <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.</p>
     
               </div>
             </div>
           </div>
           <div className="p-4 lg:w-1/2">
             <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
               <img alt="team" className="flex-shrink-0 rounded-full  w-44 h-44 object-cover object-center sm:mb-0 mb-4" src={bg}/>
               <div className="flex-grow sm:pl-8">
                 <h3 className="text-slate-400 mb-1">Dealer 2</h3>
                 <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.</p>
     
               </div>
             </div>
           </div>
           <div className="p-4 lg:w-1/2">
             <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
               <img alt="team" className="flex-shrink-0 rounded-full  w-44 h-44 object-cover object-center sm:mb-0 mb-4" src={bg}/>
               <div className="flex-grow sm:pl-8">
                 <h3 className="text-slate-400 mb-1">Dealer 3</h3>
                 <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum.</p>
     
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
         </div>
    )
}
function Staffs(){
   return(
    <div data-theme='dark' id='ABOUT'>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-400 mb-1">Staffs</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">john Stone</h2>
              <p className="text-gray-400">postion1</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Ponnappa Priya</h2>
              <p className="text-gray-400">postion2</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Ang Li</h2>
              <p className="text-gray-400">postion3</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">John Doe</h2>
              <p className="text-gray-400">postion4</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Martin Eden</h2>
              <p className="text-gray-400">postion5</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Boris Kitua</h2>
              <p className="text-gray-400">postion6</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Atticus Finch</h2>
              <p className="text-gray-400">postion7</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Alper Kamu</h2>
              <p className="text-gray-400">postion8</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center bg-slate-600 p-4 rounded-full">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={bg}/>
            <div className="flex-grow">
              <h2 className="text-gray-300 title-font font-medium">Rodrigo Monchi</h2>
              <p className="text-gray-400">postion9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
   )
}

export default function Aboutus() {
  return (
     <>
      <Staffs></Staffs>
      <Dealer></Dealer>
      
     </>
  )
}
