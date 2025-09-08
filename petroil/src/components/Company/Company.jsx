import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import company from "../../assets/company.png"

const Company = () => {
  return (
    <div className='py-[136px] bg-[#F0F0F0]'>
        <Container>
            <Flex>
                <p className="pt-[100px] pb-[99px] pl-[74px] pr-[77px] bg-[#F40404]  font-primary text-white font-bold text-[36px] w-[413px]">Learn more about our company</p>
                <div className='relative'>
                    <img src={company} alt="#company"/>
                    <button className="bg-[#FFFFFF] text-[#F40404] font-primary font-semibold text-[16px] py-[14px] px-[30px]  cursor-pointer absolute top-[168px] left-[282px]">Learn More</button>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Company