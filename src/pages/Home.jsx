import React, { useEffect } from 'react'
import home_bg from '../assets/home_bg.jpg'
import Location from '../component/Location/Location'
import Explore from '../component/Explore/Explore'
import Insider from '../component/Insider/Insider'
import MobileHero from '../component/Home/MobileHero'
import Banner from '../component/Navbar/Banner'
import ExploreBottom from '../component/ExploreSection/ExploreBottom'
import BorderText from '../component/common/BorderText'
import Hero from '../component/Home/Hero'
import Booking from '../component/Booking/Booking'
import banner1 from "../assets/banner/banner1.jpeg";
import banner from "../assets/banner/banner.jpg";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })

  return (
    <>
      <div className='mt-14'>
        <Banner />
        <div className=" w-screen bg-white h-auto block sm:hidden">
            <img src={banner1} className="w-[100%]" alt="" />
            <img src={banner} className="w-[100%]" alt="" />
        </div>
      </div>
      <div className='w-[100vw] h-[550px] sm:h-auto '>
        <div className='hidden sm:block'>
        <Hero/>
        </div>
        
        <div className='block sm:hidden'>
          <MobileHero />
        </div>
      </div>
      <div className='w-[100vw] overflow-x-hidden'>
        <Location />
        <Explore />
        <Booking/>
        <Insider />
        <div className='mt-12'>
          <div className='flex justify-center sm:justify-end pr-4'>
           <BorderText text={"About us"}/>
          </div>
            
           <ExploreBottom/>
        </div>
  
      </div>
    </>
  )
}

export default Home