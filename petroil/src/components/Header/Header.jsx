import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn , FaInstagram  } from "react-icons/fa";
import Container from '../Layouts/Container';


const Header = () => {
  return (
    <div className='bg-[#282828] border-b-5 border-b-[#FFB800]'>

        <Container>
                  <div className=" font-primary text-white ] py-[15px]">
        <div className="flex justify-between">
           <div className= "flex space-x-[49px]"> 
            <div className=" flex items-center space-x-[5px] ">
             <IoMailUnreadOutline size={20} />
            <p className='text-[12px'>mail@yourcompany.com</p>
            </div>
            <div className="relative after:content-[''] after:absolute after:top-[2px] after:left-[-27px] after:h-[16px] after:w-[2px] after:bg-[#5C6A92] flex items-center space-x-[5px] ">
             <FaPhoneAlt size={15} />
            <p className='text-[12px'>+896 120 5889 (Toll free)</p>
            </div>
            </div>
            <div className='flex space-x-[20px]'>
                <FaFacebookF size={16}/>
                <FaTwitter size={16}/>
                <FaLinkedinIn size={16}/>
                <FaInstagram size={16}/>
            </div>
        </div>
    </div>
        </Container>
     
    </div>

 
  )
}

export default Header