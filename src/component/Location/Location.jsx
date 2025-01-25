import React from 'react'
import location1 from '../../assets/location1.jpg'
import location2 from '../../assets/location2.png'
import location3 from '../../assets/location3.png'
import hiring from '../../assets/hiring.png'
import BorderText from '../common/BorderText'
import arrow from '../../Assests/arrow.svg'
import Slider from './Slider';
import mediaLinks from '../../JsonData/medialink'

const Location = () => {
  const imageList=[location1,location2,location3]

  return (
    <div className='text-white mt-80 sm:mt-24 overflow-x-hidden pb-8 sm:pb-0' id='location'>
      <div className='flex justify-center sm:justify-end px-4'>
        <BorderText text={"OUR LOCATION"} />
      </div>

      {/* image section */}
      <div className='sm:grid hidden sm:grid-cols-3 '>
        <img src={location1} alt="loaction1" className='w-[100vw] h-[100%] sm:w-auto' />
        <img src={location2} alt="loaction1"className='w-[100vw] h-[100%] sm:w-auto' />
        <img src={location3} alt="loaction1"className='w-[100vw] h-[100%] sm:w-auto' />
      </div>

      {/* image for smaller */}
      <div className='block sm:hidden'>
        <Slider imageList={imageList}/>
      </div>


      <div
        className='grid sm:grid-cols-2 gap-4 sm:gap-0 items-center sm:px-6 mt-14'>
        <img src={hiring} alt="" />
        <div className='relative'>
          <div className='border-[1px] border-gray-400 rounded-md m-2 sm:px-6 py-4 sm:text-xl '>
            <h1 className='p-3 pl-5 text-[#FEB235] font-semibold text-2xl'>Our Location - </h1>
            <p className='px-5 pb-5 text-[22px]'>8 Lane Hirak Road, Gol Building, Opp Sadhna Hospital, Dhanbad, Jharkhand, India. 
            <br />
            <p className='my-2'>Phone Number: +91-9234669911</p>
            
              </p>
          </div>
          <div className=' absolute sm:right-1 right-[50%] translate-x-[50%] rounded-full sm:rounded-br-none sm:-translate-x-0 sm:bottom-1 -bottom-8 sm:border-l-[1px] border-t-[1px] rounded-l-full rounded-t-full   bg-[#1E1E1E] p-2 '>
            <a href={mediaLinks.location} target={mediaLinks.location}>
              <img src={arrow} alt="" className=' rounded-full bg-red-950 cursor-pointer' />
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Location