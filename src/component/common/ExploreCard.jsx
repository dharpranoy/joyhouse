import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

const ExploreCard = ({data}) => {
    const gradientStyle = {
        background: `linear-gradient(to bottom right, ${data.bg1}, ${data.bg2}, ${data.bg3}, ${data.bg4})`,
      };
    return (
        <div className='text-white p-5 px-4 sm:px-7' style={gradientStyle}>
            <div className='grid grid-cols-1 sm:gap-8 sm:grid-cols-2 mt-2 sm:mt-4 flex justify-start items-end'>
                <div className='text-2xl sm:text-4xl font-bold'>
            <BsArrowUpRightCircle className='text-4xl font-bold text-gray-400 mb-3' />
                    <h1 className=''>{data.h1} </h1>
                    <h2>{data.h2}</h2>
                </div>
                <p className='sm:text-base text-sm pt-2 sm:pt-0 flex justify-start items-end'>{data.desc}</p>
            </div>
        </div>
    )
}

export default ExploreCard