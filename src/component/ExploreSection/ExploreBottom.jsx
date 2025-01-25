import React from 'react'
import about_banner from '../../assets/about_banner.png'
import about_bottom from '../../assets/explore_bottom.svg'

const ExploreBottom = () => {
    return (
        <div className='bg-gradient-to-br from-[#2D1719] to-[#1E005E] relative'>
            <img src={about_banner} alt="about_ig" className='sm:absolute sm:-top-4 md:-top-16 w-[100%] left-0' />
            <div className='hidden sm:block'>
                <br /><br /><br /><br />
                <br />
            </div>
            
            <div className='mt-6 mx-2 text-white'>
                <h1 className='font-bold text-2xl sm:text-[42px] text-center sm:mx-10 leading-tight'>Play, Thrill, Repeat: Dive into Fun at <span className='text-[#FEB331]'>Joy Junction</span>,
                   <br /> Dhanbad's Ultimate Indoor Gaming Destination!</h1>
                <p className='text-center font-semibold text-gray-300 sm:max-w-[70vw] w-[52vw] text-sm sm:text-lg mt-6  mx-auto'>Experience the thrill of PS5 gaming, test your skills at bowling and shooting, and enjoy a variety of arcade games. For the little ones, there's a trampoline and a soft play area, ensuring fun for everyone at Joy Junction, Dhanbad's premier indoor gaming house.</p>
            </div>
            <img src={about_bottom} alt="explore bottom" className=' mt-4 sm:mt-10'/>
        </div>
    )
}

export default ExploreBottom