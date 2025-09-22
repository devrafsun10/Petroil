import React from 'react'
import Container from '../Layouts/Container'

const Copyright = () => {
  return (
    <div className='md:py-[42px] py-[20px] bg-[#282828]'>
        <Container>
            <p className='font-primary text-[12px] md:text-base font-medium text-[#6C6C6C] cursor-pointer'>© Copyright 2024 by AltDesain Studio – All right reserved.</p>
        </Container>
    </div>
  )
}

export default Copyright