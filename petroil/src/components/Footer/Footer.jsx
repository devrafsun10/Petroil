import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import footerLogo from '../../assets/footerlogo.png'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt,  FaFacebookF, FaTwitter, FaLinkedinIn , FaInstagram  } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import footerOne from '../../assets/footerone.png'
import footerTwo from '../../assets/footertwo.png'

const Footer = () => {
  return (
    <div className='md:pt-[149px] pt-[50px] pb-[80px] md:pb-[170px] bg-[#1F1F1F]'>
        <Container>
            <Flex className="md:justify-between">
                <div className='hidden md:block'>
                    <img src={footerLogo} alt="#footerlogo" />
                    <Flex className="items-center mt-[33px]">
                        <IoMailUnreadOutline className='text-white'/>
                        <p className='text-white ml-[5px]'>mail@yourcompany.com</p>
                    </Flex>

                      <Flex className="items-center mt-[15px]">
                        <FaPhoneAlt className='text-white' />

                        <p className='text-white ml-[5px]'>+896 120 5889 (Toll free)</p>

                          </Flex>

                          <Flex className="items-center mt-[15px]">
                            <FaMapLocationDot className='text-white'/>
                            <p className='text-white ml-[5px]'>101 Baker Street, New York, USA, 12345</p>

                          </Flex>

                          <Flex className="space-x-[12px] mt-[35px]">
                             <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaFacebookF/>
                             </p>
                             </div>
                        <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaTwitter/>
                             </p>
                             </div>
                       <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaLinkedinIn/>
                             </p>
                             </div>
                        <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaInstagram/>
                             </p>
                             </div>
                          </Flex>                          
                </div>

                <div className='hidden md:block'>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Company</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer'>Home</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>About</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Services</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Gallery</li>
                    </ul>
                </div>

                 <div className='hidden md:block'>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Others</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer'>Blog</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Contact</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Terms & Conditions</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <p className='font-primary font-bold text-[16px] text-white'>Certificate</p>
                    <Flex className="mt-[21px] space-x-[5px]">
                        <img src={footerOne} alt="#footerOne" />
                        <img src={footerTwo} alt="#footerTwo" />
                    </Flex>
                </div>
            </Flex>

            
            <div className='md:hidden flex justify-between items-center'>
                 <div className=''>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Company</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer'>Home</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>About</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Services</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Gallery</li>
                    </ul>
                </div>

                 <div className=''>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Others</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer'>Blog</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Contact</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Terms & Conditions</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>

              <div className='md:hidden mt-[50px]'>
                    <p className='font-primary font-bold text-[16px] text-white'>Certificate</p>
                    <Flex className="mt-[21px] space-x-[5px]">
                        <img src={footerOne} alt="#footerOne" />
                        <img src={footerTwo} alt="#footerTwo" />
                    </Flex>
                </div> 
            
            <div className='md:hidden mt-[50px]'>
                  <div className=''>
                    <img src={footerLogo} alt="#footerlogo" />
                    <Flex className="items-center mt-[33px]">
                        <IoMailUnreadOutline className='text-white'/>
                        <p className='text-white ml-[5px]'>mail@yourcompany.com</p>
                    </Flex>

                      <Flex className="items-center mt-[15px]">
                        <FaPhoneAlt className='text-white' />

                        <p className='text-white ml-[5px]'>+896 120 5889 (Toll free)</p>

                          </Flex>

                          <Flex className="items-center mt-[15px]">
                            <FaMapLocationDot className='text-white'/>
                            <p className='text-white ml-[5px]'>101 Baker Street, New York, USA, 12345</p>

                          </Flex>

                          <Flex className="space-x-[12px] mt-[35px]">
                             <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaFacebookF/>
                             </p>
                             </div>
                        <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaTwitter/>
                             </p>
                             </div>
                       <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaLinkedinIn/>
                             </p>
                             </div>
                        <div class="w-10 h-10 rounded-full border-2 bg-red-500 border-red-500 flex items-center justify-center cursor-pointer">
                             <p class="text-white">
                                <FaInstagram/>
                             </p>
                             </div>
                          </Flex>                          
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer