import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideOne from "../../assets/slider1.png"
import slideTwo from "../../assets/slider2.png"
import slideThree from "../../assets/slider3.png"
import slideFour from "../../assets/slider4.png"
// import Flex from '../Layouts/Flex'

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    // <Flex className="justify-between">
    //     <img className='w-[24%]' src={slideOne} alt="#slider" />
    //     <img className='w-[24%]' src={slideTwo} alt="#slider" />
    //     <img className='w-[24%]' src={slideThree} alt="#slider" />
    //     <img className='w-[24%]' src={slideFour} alt="#slider" />
    // </Flex>

     <Slider {...settings}>
        <img className='w-[20%] px-[5px] ' src={slideOne} alt="#slider" />
        <img className='w-[20%] px-[5px] ' src={slideTwo} alt="#slider" />
        <img className='w-[20%] px-[5px] ' src={slideThree} alt="#slider" />
        <img className='w-[20%] px-[5px] ' src={slideFour} alt="#slider" />
        <img className='w-[20%] px-[5px] ' src={slideThree} alt="#slider" />
    </Slider>
  )
}

export default ImgSlider