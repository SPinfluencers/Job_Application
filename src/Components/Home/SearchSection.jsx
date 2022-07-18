import { Box, Button, Container, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import EarthIcon from '../Common/Icons/EarthIcon'
import FilterIcon from '../Common/Icons/FilterIcon'
import MarketingIcon from '../Common/Icons/MarketingIcon'
import TechIcon from '../Common/Icons/TechIcon'
import JobTypeButton from './JobTypeButton'

const SearchSection = () => {
  return (
    <Container>
      <Flex direction='column' gap='1.5rem' >
        <Heading as='h1' textAlign='center' fontSize='6xl' >  
           Find The Right
        </Heading>
        <Flex justifyContent='center'>
        <Heading fontSize='5xl' bgGradient='linear(to-r, purple.500, blue.500)' as='h1'  bgClip='text' paddingRight='1rem' >
           Four-Day
        </Heading>
        <Heading as='h1' fontSize='5xl' >
           Week Job
        </Heading>
        </Flex>
        <Box pt='2rem'>
          <Flex gap='1rem'>
           <Input width='500px' borderRadius='1rem' boxShadow='2xl' placeholder='Type job title or keyword'  />
           <Button
           py='1rem'
           variant='ghost' 
           color='gray.700'
           background='gray.200'>
            <FilterIcon />
           </Button>
        </Flex>
        <Flex mt='1rem' gap='1rem' justifyContent='space-between'>
          <JobTypeButton icon={<EarthIcon />} text='Remote'/>
          <JobTypeButton icon={<TechIcon />} text='Tech'/>
          <JobTypeButton icon={<MarketingIcon />} text='Marketing'/>
        </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default SearchSection