import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bike1 from './assets/bc1.png'
import bike2 from './assets/bc2.png'
import bike3 from './assets/bc3.png'
import bike4 from './assets/bc4.png'
import bike5 from './assets/bc5.png'
import scooter1 from './assets/scooter1.png'
import scooter2 from './assets/scooter2.png'
import scooter3 from './assets/scooter3.png'
import Caruosel from './customComponents/Caruosel'
import Navbar from './customComponents/Navbar'
import WhatsNew from './customComponents/WhatsNew'
import VerticalCaruosal from './customComponents/VerticalCaruosal'
import OtherInfos from './customComponents/OtherInfos'
import Aboutus from './customComponents/Aboutus'
import Footer from './customComponents/Footer'
import Preloader from './customComponents/Preloader'
import 'swiper/css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
     <WhatsNew></WhatsNew>
     <Caruosel  slides = {[{img:bike3,name:'FZ-F1'},{img:bike5,name:'FZ-25'},{img:bike4,name:'FZ-F1'},{img:bike1,name:'FZ-X'},{img:bike2,name:'MT-15'},{img:bike3,name:'FZ-F1'},{img:bike5,name:'FZ-25'},{img:bike4,name:'FZ-F1'},{img:bike1,name:'FZ-X'},{img:bike2,name:'MT-15'}]}title={'Motor Cycle'}  ></Caruosel>
     <Caruosel  slides = {[{img:scooter1,name:'Fascino 125 Fi'},{img:scooter2,name:'RayZR-125  Fi'},{img:scooter3,name:'Aerox 155'},{img:scooter1,name:'Fascino 125 Fi'},{img:scooter2,name:'RayZR-125  Fi'},{img:scooter3,name:'Aerox 155'},]}title={'Scooter'}  ></Caruosel>
     <VerticalCaruosal></VerticalCaruosal>
     <OtherInfos></OtherInfos>
     <Aboutus></Aboutus>
     <Footer></Footer>
    </>
  )
}

export default App
