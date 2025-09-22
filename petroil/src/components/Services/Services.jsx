import React from 'react'
// import serviceOne from "../../assets/serviceone.png"
import Flex from '../Layouts/Flex'
const Services = () => {
  return (
   <div className='py-[28px]'>
     <Flex className=" flex-col md:flex-row  items-center  ">
        <div className=" md:pr-[60px] md:w-[50%]   ">
           <div className='md:flex md:justify-end'>
             <div className='ml-5 md:ml-0 mb-2 md:mb-0'>
              <h2 className=" font-primary font-bold text-[24px] md:text-[64px] ">Our Services</h2>
            <p className="md:w-[405px] w-auto font-primary font-medium text-[16px] text-[#6C6C6C]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
           </div>
        </div>
        
        <div className=" relative bg-[url(./assets/serviceone.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60 md:w-[50%] w-auto">
        <div className='relative z-1 ml-5 pb-5'>
             <p className='font-primary font-bold text-[26px] md:text-[30px] text-white'>Modern natural oil and gas refineries.</p>
             <button className='bg-[#F40404] border-2 border-transparent mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-transparent duration-300 hover:border-amber-50'>Learn More</button>
             </div>
        </div>
    </Flex>
    <Flex className=" flex-col md:flex-row items-center mt-5 md:mt-0">
        <div className="md:w-[50%] relative bg-[url(./assets/servicetwo.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60 ">

        <div className='relative z-1 ml-5 '>
             <p className='font-primary font-bold text-[36px] text-white'>Supply of national industries.</p>
             <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer border-2 border-transparent hover:bg-transparent duration-300 hover:border-amber-50'>Learn More</button>
             </div>
        </div>

        <div className="md:w-[50%]  relative bg-[url(./assets/servicethree.png)] bg-cover bg-center bg-no-repeat pt-[152px] pb-[144px] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60 mt-5 md:mt-0">

         <div className='relative z-1 ml-5 '>
             <p className='font-primary font-bold text-[30px] text-white'>National fuel distribution and supply.</p>
             <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer border-2 border-transparent hover:bg-transparent duration-300 hover:border-amber-50'>Learn More</button>
             </div>

        </div>
    </Flex>
   </div>
  )
}

export default Services