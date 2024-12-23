import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const gradientStyle = {
        background: `linear-gradient(to bottom right, #000000, #031E32, #071437, #0B2F65`,
      };

  return (
    <div 
    style={gradientStyle}
    className='max-w-[500px] rounded-md mx-auto min-h-[80vh] flex flex-col justify-center'>
        <h1 className='text-3xl font-bold text-white text-center'>Signin</h1>
        <form action="" className='px-4 mt-4 flex flex-col gap-4 sm:gap-6 text-white'>
            <input type="text" placeholder='Email' className='w-full px-2 py-2 rounded-md text-[#9C9FA6] bg-[#293040]' />
            <input type="text" placeholder='Password' className='w-full px-2 py-2 rounded-md text-[#9C9FA6] bg-[#293040]' />

            <a href="" className='text-sm text-end'>Fogot Passoword</a>

            <input type="submit" placeholder='submit' className='bg-[#FFAE02] py-2 rounded-full font-bold'/>
            <NavLink to={"/signup"}  className='text-sm text-center'>New Account</NavLink>
        </form>
    </div>
  )
}

export default Login