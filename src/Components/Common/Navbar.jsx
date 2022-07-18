import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import BrandIcon from './Icons/Brands'

const Navbar = () => {
  return (
    <Box>
      <Flex gap='1rem' p='1rem' borderBottom='1px' borderColor='gray.200'>
        <BrandIcon />
        <Spacer />
        <Button variant='ghost'>Sign In</Button>
        <Button variant='outline'>Sign Up</Button>
        <Button variant='solid'>Post a Job 🚀</Button>
      </Flex>
    </Box>
  )
}

export default Navbar