import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Member = () => {
  return (
    <div className='bg-[#F40404] md:py-[46px] py-[30px] font-primary text-white border-b-4 border-[#FFB800]'>
        <Container>
          <Flex className="justify-between items-center">
              <p className='font-bold text-[16px] md:text-[36px]'>Want to join as member branch in your area?</p>
            <button className='md:py-[14px] py-[8px] px-[20px] md:px-[32px] border-2 border-white cursor-pointer  hover:text-[#F40404] hover:border-[#FFB800] hover:bg-[#ffff] duration-500 font-medium'>CONTACT</button>
          </Flex>
        </Container>
    </div>
  )
}

export default Member