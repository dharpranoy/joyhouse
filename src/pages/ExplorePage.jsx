import React, { useEffect } from 'react'
import ExploreSection from '../component/ExploreSection/ExploreSection'
import data from '../JsonData/explore'
import RetroGrid from "../components/magicui/retro-grid";
import ExploreBottom from '../component/ExploreSection/ExploreBottom';

const Explore = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='mt-10 '>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-12 py-20 sm:p-14 md:p-20  md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl sm:text-7xl font-bold leading-none tracking-tighter text-transparent">
          Explore the Fun at Joy Junction
        </span>

        <RetroGrid />
      </div>

      <div>
        {
          data.map((eachData) => {
            return (
              <ExploreSection key={eachData.id} data={eachData} />
            )
          })
        }
      </div>
      
      <div className='mt-20'>
        <ExploreBottom/>
      </div>
      

    </div>

  )
}

export default Explore