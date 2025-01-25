import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Whatsapp from './whatsappIcon/Whatsapp';

const Layout = () => {
  return (
    <div className='overflow-x-hidden relative mx-auto' id='home'>
      <div className="w-full h-full fixed z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>
      
      <Outlet/>
      <Whatsapp/>
      <Footer />
    </div>
  );
};

export default Layout;
