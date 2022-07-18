import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <Box>
        <Navbar/>
        <Box>{children}</Box>
    </Box>
  )
}

export default Layout