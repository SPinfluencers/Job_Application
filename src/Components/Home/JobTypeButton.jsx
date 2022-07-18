import { Button } from '@chakra-ui/react'
import React from 'react'

const JobTypeButton = ({text , icon}) => {
  return (
    <Button
    variant='outline'
    width='100%'
    px='2rem'
    padding='1%'
    borderColor='purple.900'
    color='white'
    bg='purple.700'
    leftIcon={icon}>
    {text}
    </Button>
  )
}

export default JobTypeButton