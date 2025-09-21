import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Supplier = () => {
  return (
    <div className=" py-[50px] md:pt-[78px] md:pb-[100px]">
        <Container>
            <Flex className=" flex-col md:flex-row justify-between items-center">
                <h2 className="md:w-[289px] font-primary text-[28px] font-bold">The biggest 
                    supplier on
                    the country</h2>
                    <p className="md:w-[651px] font-primary text-[#6C6C6C]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>                
            </Flex>
        </Container>
    </div>
  )
}

export default Supplier