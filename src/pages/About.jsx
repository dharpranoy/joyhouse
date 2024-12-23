import React, { useEffect } from 'react'
import Meteors from "../components/magicui/meteors";
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import about4 from '../assets/about4.png'
import about5 from '../assets/about5.png'
import about6 from '../assets/about6.png'
import about7 from '../assets/about7.png'
import about8 from '../assets/about8.png'
import BorderText from '../component/common/BorderText';
import AboutCard from '../About/AboutCard';

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })

  const cardData=[
    {
      id:1,
      title:"OUR MISSION",
      desc:"Bring thrill and adventure to all ages, fostering bonds with loved ones and promoting a digital detox. Step into a vibrant, safe environment where fitness meets fun."
    },
    {
      id:2,
      title:"OUR VISION",
      desc:"Away from the virtual world, we aim to create an atmosphere at Joy Junction where everyone can cherish lifelong memories, strengthen bonds with loved ones, and enjoy their well-being."
    },
  ]

  return (
    <div className='mt-16'>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-10  sm:p-20 sm:py-32 md:shadow-xl">
        <Meteors number={50} />
        <p className="z-10 whitespace-pre-wrap text-center text-4xl sm:text-6xl font-bold tracking-tighter text-[#FEB235] ">
          What makes Joy Junction Different
        </p>
      </div>

      <div className='sm:flex  '>
        <img src={about1} alt="joy-about1" className='sm:w-[60%]' />
        <img src={about2} alt="joy-about2" className='flex-1' />
      </div>
      <div className='flex sm:flex-nowrap flex-wrap-reverse mt-8 sm:mt-14'>
        <img src={about3} alt="joy-about1"  className='sm:w-[60%]'/>
        <img src={about4} alt="joy-about2" className='sm:flex-1'/>
      </div>

      <div className='mt-16'>
        <div className='flex justify-center sm:justify-end pr-4'>
          <BorderText text={"our story"} />
        </div>
        <div className='bg-[#FEB235]'>
          <p className='p-8 sm:p-10 sm:max-w-[80%] mx-auto  sm:text-lg font-semibold text-center'>Every success story begins with an idea driven by compassion, dedication, and commitment. Joy Junction in Dhanbad is launched with a vision to bring world-class indoor entertainment to Eastern India and that’s why Joy Junction is the Biggest Funzone in Eastern India. Joy Junction offers thrilling adventure and trampoline activities, alongside cutting-edge augmented and virtual reality games. Designed to provide fun for all ages, Joy Junction has quickly become a favorite destination for families and friends, creating lasting memories and fostering cherished bonds.</p>
        </div>

      </div>

      <div className='mt-16 grid grid-cols-2 sm:grid-cols-4'>
        <img src={about5} alt="about_img" />
        <img src={about6} alt="about_img" />
        <img src={about7} alt="about_img" />
        <img src={about8} alt="about_img" />
      </div>


      <div className='-mt-32 '>
        <div className='flex justify-center gap-8 sm:gap-14 flex-wrap sm:flex-nowrap max-w-[95%] md:max-w-[70%] mx-auto'>
          {
            cardData.map((data)=>{
              return (
                <AboutCard key={data.id} data={data}/>
              )
            })
          }
        </div>

      </div>

      {/* OUR Founder */}
      <br /><br /><br />

      {/* <div className='mt-16'>
        <div className='flex justify-center sm:justify-end pr-4'>
          <BorderText text={"OUR FOUNDERS"} />
        </div>
        <div className='bg-[#FEB235]  text-center flex justify-center p-6 items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 items-center text-black font-bold'>
            <div>
              <img src={about5} alt="joy founder name" className='rounded-md' />
              <p>Founder name</p>
              <p>CEO</p>
            </div>
            <div>
              <img src={about5} alt="joy founder name" className='rounded-md' />
              <p>Founder name</p>
              <p>CEO</p>
            </div>
            <div>
              <img src={about5} alt="joy founder name" className='rounded-md' />
              <p>Founder name</p>
              <p>CEO</p>
            </div>
          </div>

        </div>
      </div> */}

    </div>
  )
}

export default About