import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import JobCard from './JobCard'

const Jobs = () => {
  return (
    <Container pt='5rem' pb='1rem'>
        <Box>
      <Heading>
        <Text color='purple.500' as='span'>Recent </Text>
        Jobs
      </Heading>
      </Box>
        <VStack mt='1rem' alignItems='left' gap='1rem'>
          <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                  <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                  <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                  <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
                  <JobCard 
          componyName='Tailwand'
          componyIcon='https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'
          jobTitle='Lead Game Developer'
          salaryLower='40'
          salaryUpper='80'
          />
       </VStack>
    </Container>
  )
}

export default Jobs