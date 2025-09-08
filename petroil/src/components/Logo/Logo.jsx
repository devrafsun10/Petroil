import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logoOne from '../../assets/logo1.png'
import logoTwo from '../../assets/logo2.png'
import logoThree from '../../assets/logo3.png'
import logoFour from '../../assets/logo4.png'

const Logo = () => {
  return (
    <div className='py-[116px]'>
        <Container>
            <Flex className="justify-between items-center">
                <img src={logoOne} alt="#logo" />
                <img src={logoTwo} alt="#logo" />
                <img src={logoThree} alt="#logo" />
                <img src={logoFour} alt="#logo" />
            </Flex>
        </Container>
    </div>
  )
}

export default Logo