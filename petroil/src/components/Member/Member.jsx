import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Member = () => {
  return (
    <div className='bg-[#F40404] py-[46px] font-primary text-white border-b-4 border-[#FFB800]'>
        <Container>
          <Flex className="justify-between items-center">
              <p className='font-bold text-[36px]'>Want to join as member branch in your area?</p>
            <button className='py-[14px] px-[32px] border-2 border-white cursor-pointer'>CONTACT</button>
          </Flex>
        </Container>
    </div>
  )
}

export default Member