import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="bg-[#F40404] py-[30px]">
        <Container>
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} alt="#logo" />
                </div>
                <div>                            
                        <ul className=" flex items-center space-x-[47px] font-primary font-semibold text-white text-[16px]">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Gallery</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li className="border-2 py-[13px] px-[32px]">
                            <a href="">CONTACT</a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar