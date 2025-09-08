import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Supplier = () => {
  return (
    <div className="pt-[78px] pb-[100px]">
        <Container>
            <Flex className="justify-between items-center">
                <h2 className="w-[289px] font-primary text-[48px] font-bold">The biggest 
                    supplier on
                    the country</h2>
                    <p className="w-[651px] font-primary text-[#6C6C6C]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>                
            </Flex>
        </Container>
    </div>
  )
}

export default Supplier