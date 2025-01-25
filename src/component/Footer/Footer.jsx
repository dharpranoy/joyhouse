import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import mediaLinks from '../../JsonData/medialink';

const Footer = () => {
  return (
    <>
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-2 bg-black text-white justify-start items-start  sm:pt-10 sm:px-6 px-2'>
        <div className=''>
          <img src={logo} alt="" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]' />
        </div>
        <ul className='flex sm:flex-col justify-start items-start sm:justify-start gap-4 sm:gap-2'>
          <Link
            to={"/"}>
            <li className='cursor-pointer hover:underline hover:text-yellow-400'>Home</li>
          </Link>
          <Link
            to={mediaLinks.location}>
            <li className='cursor-pointer hover:underline hover:text-yellow-400'>Our Location</li>
          </Link>
          <Link
            to="/explore">
            <li className='cursor-pointer hover:underline hover:text-yellow-400'>Explore</li>
          </Link>
          <Link
            to="/about">
            <li className='cursor-pointer hover:underline hover:text-yellow-400'>About us</li>
          </Link>
          <Link
            to="/upload">
            <li className='cursor-pointer hover:underline hover:text-yellow-400'>Admin</li>
          </Link>
        </ul>
        <div className='flex flex-row items-center sm:items-start gap-3 sm:gap-0 sm:flex-col mt-4 sm:mt-0'>
          <h2>Connect us on:</h2>
          <ul className='flex gap-2 item-center text-2xl mt-2'>
            <a href={mediaLinks.insta} ><FaInstagram /></a>
            <a href={mediaLinks.fb} ><FaFacebook /></a>
            <a href={mediaLinks.linkedIn} ><FaLinkedin /></a>
          </ul>
        </div>
        <div className='mt-4 sm:mt-0'>
          <div className=' flex gap-1'>
            <div className='text-xl'>
              <CiLocationOn />
            </div>
            <p className='text-sm'>8 Lane Hirak Road, Gol Building, Opp. Sadhna Hospital, Dhanbad, Jharkhand, India.</p>
          </div>
          <div className='flex gap-2 items-center  mt-4'>
            <FiPhoneCall />
            <a href='tel:+919234669911' className='hover:underline'>+91- 9234669911</a>
          </div>
        </div>
      </div>
      <div className='pt-4 bg-black text-white'>
        <p className='text-center mt-1 text-sm sm:text-base'>© Copyright 2024. All rights reserved.</p>
        <hr className='my-1' />
        <div className='text-center pb-2 flex justify-center gap-1'>
          <p>Designed and Develped by </p>
          <a
            href="https://www.smalltowntalks.com/" target='_blank' className=' cursor-pointer underline  font-semibold'>Small Town Talks</a> </div>
      </div>

    </>
  )
}

export default Footer