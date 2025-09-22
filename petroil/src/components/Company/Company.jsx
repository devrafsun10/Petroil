import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import company from "../../assets/company.png"

const Company = () => {
  return (
    <div className='py-[136px] bg-[#F0F0F0]'>
        <Container>
            <Flex className='md:flex-row flex-col'>
                <p className=" pt-[50px] pb-[50px] pl-[20px] md:pt-[100px] md:pb-[99px] md:pl-[74px] pr-[77px] bg-[#F40404]  font-primary text-white font-bold text-[24px] md:text-[36px] md:w-[413px]">Learn more about our company</p>
                <div className='relative'>
                    <img src={company} alt="#company"/>
                    <button className="bg-[#FFFFFF] text-[#F40404] font-primary font-semibold text-[16px] py-[14px] px-[30px]  cursor-pointer absolute top-[50px] left-[90px] md:top-[168px] md:left-[282px]  hover:bg-[#F40404] transition-all duration-500 hover:text-white">Learn More</button>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Company