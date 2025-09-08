import React from 'react'
import slideOne from "../../assets/slider1.png"
import slideTwo from "../../assets/slider2.png"
import slideThree from "../../assets/slider3.png"
import slideFour from "../../assets/slider4.png"
import Flex from '../Layouts/Flex'

const Slider = () => {
  return (
    <Flex className="justify-between">
        <img className='w-[24%]' src={slideOne} alt="#slider" />
        <img className='w-[24%]' src={slideTwo} alt="#slider" />
        <img className='w-[24%]' src={slideThree} alt="#slider" />
        <img className='w-[24%]' src={slideFour} alt="#slider" />
    </Flex>
  )
}

export default Slider