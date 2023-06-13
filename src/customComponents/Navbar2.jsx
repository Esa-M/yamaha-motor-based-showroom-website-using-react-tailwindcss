import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {MdDirectionsBike} from 'react-icons/md'
import {Link as Scroll} from 'react-scroll'
export default function Navbar2() {
  return (
    <div className="flex flex-row gap-1 justify-center align-middle">
    <Scroll offset={-100} to='HOME' smooth={true}> <div className="rounded-full xl:text-2xl  text-2xl p-2 hover:bg-slate-600 hover:text-slate-200 hover:cursor-pointer  md:text-sm"><BiHomeAlt></BiHomeAlt></div></Scroll>
    <Scroll offset={-100}  to='MOTORCYCLE' smooth={true}><div className="rounded-full xl:text-2xl  text-2xl p-2 hover:bg-slate-600 hover:text-slate-200 hover:cursor-pointer md:text-sm  "><MdDirectionsBike></MdDirectionsBike></div></Scroll>
   <Scroll offset={-100}  to='RIDE' smooth={true}>  <div className="text-center xl:text-lg rounded-full normal-case  p-2 hover:bg-slate-600 hover:text-slate-200 hover:cursor-pointer lg:text-sm font-sans md:text-xs ">Ride </div></Scroll>
     <Scroll  offset={-100} to='DEALER' smooth={true}><div className="text-center xl:text-lg  rounded-full normal-case  p-2 hover:bg-slate-600 hover:text-slate-200 hover:cursor-pointer lg:text-sm font-sans md:text-xs ">Dealers </div></Scroll>
   <Scroll  offset={-100} to='ABOUT' smooth={true}> <div className="text-center xl:text-lg  rounded-full normal-case  p-2 hover:bg-slate-600 hover:text-slate-200 hover:cursor-pointer lg:text-sm font-sans md:text-xs ">About Us </div></Scroll>
    
    </div>
  )
}