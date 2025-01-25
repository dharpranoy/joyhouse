import React from 'react'
import explore1_grid from '../../assets/explore1_grid.png'
import { BorderBeam } from "../../components/magicui/border-beam";

const Card = ({card,ind}) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom right, #${card.bg1}, #${card.bg2}, #${card.bg3}, #${card.bg4})`
  };
  return (
    <div className={`text-white flex-col-reverse flex ${ind % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} w-[100%]`}>
      <div className='w-[100%] sm:w-[60%]'>
        <div className='p-2 sm:p-6 relative overflow-hidden h-[100%] flex justify-center items-center' style={gradientStyle}> 
          <img src={explore1_grid} alt="" className='absolute left-[35%] top-0' />
          
          <div className='sm:w-[80%] sm:p-4 p-2 border-[1px] border-yellow-500 rounded-md relative bg-white/10 cursor-pointer duration-200 hover:bg-white/5 bg-opacity-50'>
            <h1 className='text-xl sm:text-3xl font-bold'>{card.title1}</h1>

            <h2 className='text-xl sm:text-3xl font-bold sm:py-2'>{card.title2}</h2>
            <hr className='mt-2' />
            <p className='sm:pl-6 sm:py-6 py-2 text-sm sm:text-base text-gray-200 font-semibold'>{card.desc}</p>
            <BorderBeam />
          </div>
        </div>
      </div>
      
      <div className='flex-1'>
        <img src={card.right_bg} alt="" />
      </div>
    </div>
  );
}

export default Card;
