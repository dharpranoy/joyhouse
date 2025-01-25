import React, { useState } from 'react'
import { LuPhoneCall } from "react-icons/lu";
import logo from '../../assets/logo1.svg'
import MobileNav from './MobileNav';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Banner from './Banner';
import { NavLink } from 'react-router-dom';
import mediaLinks from '../../JsonData/medialink';
import ShinyButton from "../../components/magicui/shiny-button";
import { BorderBeam } from "../../components/magicui/border-beam";

const Navbar = () => {
    const [hamb, setHamb] = useState(true);
    const navmenu = [
        {
            title: "Home",
            route: "",
        },
        {
            title: "Our Location",
            route: mediaLinks.location,
            target: "_blank",
        },
        {
            title: "Explore",
            route: "/explore",
        },
        {
            title: "Gallery",
            route: "/gallery",
        },
        {
            title: "About Us",
            route: "/about",
        },
    ];

    return (
        <>
            <div className='text-white fixed top-0 bg-[#1E1E1E] z-40  flex justify-between items-center px-2 sm:px-4 w-[100%]'>
                <NavLink to={"/"} className="">
                    <img src={logo} alt="logo" className='' />
                </NavLink>

                <ul className='sm:flex hidden items-center justify-center gap-4 pl-8'>
                    {navmenu.map((menu) => (
                        menu.target ? (
                            <a href={menu.route}
                                target={menu.target}
                                rel="noopener noreferrer"
                                className="hover:underline cursor-pointer hover:text-yellow-400 duration-150 text-white"
                                key={menu.title}>
                                <li>{menu.title}</li>
                            </a>
                        ) : (
                            <NavLink to={menu.route}
                                className={({ isActive }) =>
                                    `${isActive ? "text-yellow-400" : "text-white"} hover:underline cursor-pointer hover:text-yellow-400 duration-150`}
                                key={menu.title}>
                                <li>{menu.title}</li>
                            </NavLink>
                        )
                    ))}
                </ul>
                <div className='flex items-center gap-2'>
                    <div className='flex gap-2'>
                        <NavLink to={"/booking"} className="relative rounded-full bg-[#333] ">
                            <ShinyButton text="Host Events" className='bg-[#333] rounded-full font-bold' />
                            <BorderBeam size={50} duration={5} />
                        </NavLink>

                        <div className="sm:flex hidden items-center gap-2 rounded-full bg-[#333] px-4 py-2  ">
                            <LuPhoneCall /> <a href='tel:+919234669911'>+91- 9234669911</a>
                        </div>
                    </div>

                    <div className='bg-[#FFAE02] rounded-md p-2 text-2xl text-black font-extrabold sm:hidden block '>
                        {
                            hamb ? <RxHamburgerMenu onClick={() => {
                                setHamb(false)
                            }} /> : <RxCross2 onClick={() => setHamb(true)} />
                        }
                    </div>
                </div>

            </div>
            <Banner />

            {/* mobile navmenu */}
            {
                hamb === false ? <div className='absolute w-[100vw] h-[100vh] top-12  text-white z-50  px-2 sm:px-4 block sm:hidden bg-[#1E1E1E]'>
                    <MobileNav setHamb={setHamb} />
                </div> : ""
            }
        </>
    )
}

export default Navbar;
