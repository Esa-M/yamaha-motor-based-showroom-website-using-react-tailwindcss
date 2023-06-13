import React, { useEffect, useState } from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import panel1 from '../assets/panel1.jpg'
import panle2 from '../assets/panel2.jpg'
import panle3 from '../assets/panel3.png'
import panle4 from '../assets/panel4.png'



export default function VerticalCaruosal() {
    const[arr,setArr] = useState([panel1,panle2,panle3,panle4])
    const[Height,setHeight] = useState(30);
     
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            (window.innerWidth <= 600 ? setHeight(20) : setHeight(30))
        })

        return()=>{
            window.removeEventListener('resize',()=>{
                (window.innerWidth <= 600 ? setHeight(20) : setHeight(30))
            })
        }
    })

  return (
    <div className='w-full relative overflow-hidden bg-slate-300'>
       <Splide  options={{
          direction :'ttb',
          height:`${Height}rem`,
          type:'loop',
          perPage:arr.length-1,
          autoplay:true,
          arrows:false,
       }}
      >
          {arr.map((img,index)=>{
            return (<SplideSlide key={index}><img className=' w-full h-full' key={index} src={img}/></SplideSlide>)
          })}
       </Splide>
    </div>
  )
}
