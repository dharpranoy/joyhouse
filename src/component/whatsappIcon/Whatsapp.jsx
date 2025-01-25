import React from 'react'
import './Whatsapp.css'
import { IoLogoWhatsapp } from "react-icons/io";

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/919234669911"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-icon bg-white rounded-full p-2">
            <IoLogoWhatsapp className='text-green-500 text-3xl sm:text-5xl font-bold' />
        </a>
    )
}

export default Whatsapp