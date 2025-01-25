import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import mediaLinks from '../../JsonData/medialink';
import ShinyButton from "../../components/magicui/shiny-button";
import { BorderBeam } from "../../components/magicui/border-beam";

const MobileNav = ({ setHamb }) => {
    const navigate=useNavigate();
    const menu = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Our Location",
            link: mediaLinks.location
        },
        {
            title: "Explore",
            link: "/explore"
        },
        {
            title: "Gallery",
            link: "/gallery"
        },
        {
            title: "About Us",
            link: "/about"
        }
    ]

    const handleMenu = () => {
        setHamb(true);
    }

    return (
        <div className='bg-[#1E1E1E] h-[100vh] '>
            {
                menu.map((eachMenu) => {
                    return (
                        <NavLink
                            to={eachMenu.link}
                            onClick={handleMenu}
                            key={eachMenu.title}
                        >
                            <div className='flex justify-between items-center p-2  group cursor-pointer'>
                                <h2 className='group-hover:text-gray-400'>{eachMenu.title}</h2>
                                <div className='bg-black rounded-full text-2xl font-bold p-2 group-hover:rotate-45 duration-200' ><GoArrowUpRight /></div>
                            </div>
                            <hr className='opacity-50' />
                        </NavLink>

                    )
                })
            }

            <div className='mt-5 flex flex-col justify-center items-center mb-8'>
                <h2 className='text-xl font-semibold'>Contact us at</h2>
                <button className='flex items-center gap-2 rounded-full bg-[#333] px-4 py-2 mt-2'>
                    <LuPhoneCall />
                    <a href='tel:+919234669911'>+91- 9234669911</a>
                </button>
            </div>

        </div>
    )
}

export default MobileNav