import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
  return (
   <div className="z-[1] relative bg-[url(./assets/banner.png)] bg-no-reapeat bg-cover bg-center py-[70px] md:py-[257px]">
    <div className=" z-[-1] absolute top-0 left-0 w-full h-full bg-black/60"></div>
    <Container>
        <h1 className="font-primary text-[24px] md:text-[64px] font-bold text-white md:w-[842px]">We exist since 1975 on the oil and gas industry.</h1>
        <button className="py-[13px] px-[40px] bg-[#F40404] text-white font-semibold mt-[31px] cursor-pointer hover:text-[#FFB800] duration-300">LEARN MORE</button>
    </Container>
   </div>
  )
}

export default Banner