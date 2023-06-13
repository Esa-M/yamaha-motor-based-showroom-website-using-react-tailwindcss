import React, { useEffect, useState } from 'react'
import {Link as Scroll} from 'react-scroll'
import profile from '../assets/image1.png'
import Navbar2 from './Navbar2'

export default function Navbar() {

    const[width,setWidth] = useState(window.innerWidth);


    useEffect(()=>{
        window.addEventListener('resize',()=>{setWidth(window.innerWidth)})
        return()=>{
            window.removeEventListener('resize',()=>{setWidth(window.innerWidth)})
        }
        
    },[])








  return (
    <div className="navbar bg-base-100 p-8 fixed z-50" data-theme="dark">

{/* 
        logo */}
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-2xl ">Brand</a>
    </div>

    <div className="navbar-end gap-y-0.5 flex-1">
      {(width <= 760) ? (  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Scroll to='HOME'offset={-100}  smooth={true}><li className=" hover:bg-slate-600 hover:text-slate-100 hover:cursor-pointer hover:rounded-md  ">Home</li></Scroll>
       <Scroll  to='MOTORCYCLE' offset={-100} smooth={true}> <li className=" hover:bg-slate-600 hover:text-slate-100 hover:cursor-pointer hover:rounded-md  ">MotorCycle</li></Scroll>
        <Scroll  to='RIDE' offset={-100} smooth={true}><li className=" hover:bg-slate-600 hover:text-slate-100 hover:cursor-pointer hover:rounded-md  ">Ride</li></Scroll>
        <Scroll  to='DEALER' offset={-100} smooth={true}><li className=" hover:bg-slate-600 hover:text-slate-100 hover:cursor-pointer hover:rounded-md  ">Dealer</li></Scroll>
        <Scroll  to='ABOUT' offset={-100} smooth={true}><li className=" hover:bg-slate-600 hover:text-slate-100 hover:cursor-pointer hover:rounded-md  ">About us</li></Scroll>
      </ul>
    </div>) : (<Navbar2/>)}
  
  {/* profile */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={profile} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    {/* notification */}
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
  </div>
  
  )
}