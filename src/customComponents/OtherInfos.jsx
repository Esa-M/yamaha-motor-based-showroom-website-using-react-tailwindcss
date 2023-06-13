import React from 'react'
import alter from '../assets/alteration.jpg'
import ride from '../assets/ride.jpg'

export default function OtherInfos() {
  return (
    <>
    <div id='RIDE' className='flex relative justify-center align-middle' data-theme='dark'>
      <div className='flex flex-row relative flex-wrap justify-center align-middle'> 
      <div className="card sm:w-60 sm:h-48 bg-base-100 shadow-xl image-full m-10">
        <figure><img src={alter} alt="" /></figure>
       <div className="card-body">
       <h2 className="card-title">Make alteration</h2>
       <div className="card-actions justify-end">
        
      <button className="btn btn-primary absolute bottom-5">Book</button>
    </div>
  </div>
        </div>
        <div className="card sm:w-60 sm:h-48 bg-base-100 shadow-xl image-full m-10">
        <figure><img src={ride} alt="" /></figure>
       <div className="card-body">
       <h2 className="card-title">Book Ride</h2>
       <div className="card-actions justify-end">
        
      <button className="btn btn-primary absolute bottom-5">Book</button>
    </div>
  </div>
        </div>
    </div>
   
    </div>
    <div className='flex justify-center align-middle p-5' data-theme='dark'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62886.27146020739!2d78.06852047957913!3d9.901275420430956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c59f9ad154c7%3A0xcc0a55f42778b6ab!2sYamaha%20Motor%20Showroom%20-%20Guna%20Motors!5e0!3m2!1sen!2sin!4v1686599663622!5m2!1sen!2sin" className='m-4 rounded-xl w-full h-96 shadow-xl'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   
    </div>
    </>
  )
}
