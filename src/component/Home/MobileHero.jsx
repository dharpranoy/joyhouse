import React from 'react';
import mobile_hero from '../../assets/hero2.png';
import curved_text from '../../assets/curve_text.png';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from 'react-scroll';

const MobileHero = () => {
  return (
    <div className='text-white h-[100vh] flex justify-center pt-10 text-center relative'>
      <img src={mobile_hero} alt="" className='absolute top-0 w-full h-full' />
      <div className='font-bold text-4xl md:text-6xl text-center z-10 px-4'>
        <h1 className=' text-[#FEB331]'>Joy Junction Family Game Zone:</h1>
        <h2 className='text-white mt-2 '>Dhanbad's Premier Indoor Gaming Hub</h2>
      </div>

      <div className='absolute top-60 z-10'>
        <Link
          to="insider"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <div>
            <img src={curved_text} alt="curved text logo" className='w-[130px] h-[130px]' />
            <div className='text-center text-3xl absolute top-[40%] left-[40%]'>
              <MdKeyboardDoubleArrowDown />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileHero;
