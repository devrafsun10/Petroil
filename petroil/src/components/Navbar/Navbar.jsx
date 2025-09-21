import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show,setShow]= React.useState(false)

    const handleClick =()=>{
        console.log("ok")
        setShow(!show)
    }
  return (
    <div className="bg-[#F40404] py-[30px]">
        <Container>
            <div className="md:flex justify-between items-center">
                <div className='hidden md:block'>
                    <img src={logo} alt="#logo" />
                </div>
                <div className='hidden md:block'>                            
                        <ul className=" md:flex items-center space-x-[47px] font-primary font-semibold text-white text-[16px]  ">
                        <li className='hover:text-[#FFB800] transition-all duration-300'>
                            <a href="">Home</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300'>
                            <a href="">About</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300'>
                            <a href="">Services</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300'>
                            <a href="">Gallery</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300'>
                            <a href="">Blog</a>
                        </li>
                        <li className="border-2 py-[10px] px-[30px] md:py-[13px] md:px-[32px] transiton-all duration-300  hover:text-[#FFB800] w-[150px] md:w-auto ">
                            <a href="">CONTACT</a>
                        </li>
                    </ul>
                
                </div>
            </div>
            <div className='flex items-center justify-between md:hidden'>
                 <div className='w-[150px]'>
                    <img src={logo} alt="#logo" />
                </div>
                <div> 
                    {
                        show ? 
                        <div className='absolute top-[150px] py-10 right-[0] bg-[#F40404]      z-[9999] w-full'>
                            <ul className=" md:flex items-center space-x-[47px] font-primary font-semibold text-white text-[16px]  ">
                        <li className='hover:text-[#FFB800] transition-all duration-300 pl-8'>
                            <a href="">Home</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300 pl-8'>
                            <a href="">About</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300 pl-8'>
                            <a href="">Services</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300 pl-8'>
                            <a href="">Gallery</a>
                        </li>
                        <li className='hover:text-[#FFB800] transition-all duration-300 pl-8'>
                            <a href="">Blog</a>
                        </li>
                        <li className="border-2 py-[10px] px-[30px] md:py-[13px] md:px-[32px] transiton-all duration-300  hover:text-[#FFB800] w-[150px] md:w-auto mt-5 ">
                            <a href="">CONTACT</a>
                        </li>
                    </ul> 
                        </div>
                         : ""
                    }  

                    {
                         show ?
                        <ImCross  onClick={handleClick} className='text-2xl text-[#fff] hover:text-[#FFB800] transition-all duration-300' />
                        :
                        <FaBars onClick={handleClick} className='text-2xl text-[#fff]
                        hover:text-[#ffb800] transition-all duration-300'/>
                    }
                       

                    {/* <FaBars onClick={handleClick} className='text-2xl text-[#fff] hover hover:text-[#FFB800] transition-all duration-300' /> */}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar