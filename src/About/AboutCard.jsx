import React from 'react'

const AboutCard = ({data}) => {
  return (
    <div className='p-6 sm:p-12 bg-[#FEB235] max-w-[400px] rounded-tr-[50px] rounded-bl-[50px] sm:rounded-tr-[90px] sm:rounded-bl-[90px]'>
       <h2 className='text-3xl font-extrabold ' style={{ color: '#9E0B2C', textShadow: '1px 0 0 white, -1px 0 0 white, 0 1px 0 white, 0 -1px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>
        {
          data.title
        }
       </h2>

        <p className='mt-4 text-base sm:text-lg font-semibold  mb-6 '>{data.desc}</p>
    </div>
  )
}

export default AboutCard