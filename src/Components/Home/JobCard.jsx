import { Box, Flex, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Bookmark from '../Common/Icons/Bookmark'
import EarthIcon from '../Common/Icons/EarthIcon'
import Hot from '../Common/Icons/Hot'
import Pinned from '../Common/Icons/Pinned'

const JobCard = ({componyName,
    componyIcon,jobTitle, salaryLower, salaryUpper,
    remote= false,
    hot=false,
    pinned=false,
    bookmark=false,
    isFulltime=false
 }) => {
  return (
    <Box p='0.5rem' borderRadius='5px' borderWidth='2px' borderColor='purple.300'>
      <Flex gap='1rem'>
        <Box flexShrink='1'>
            <Image w='2rem' src={componyIcon}/>
        </Box>
        <VStack spacing='0.25rem' alignItems='left' flexGrow='1'>
            <Box>
                <Text fontSize='xs'>{componyName}</Text>
            </Box>
            <Box>
                <Text fontSize='2xl' fontWeight='600'>{jobTitle}</Text>
            </Box>
            <Box>
                <Text fontSize='sm'>${salaryLower}k - ${salaryUpper}k</Text>
            </Box>
        </VStack>
        <VStack>
            <HStack>
                <Box>
                   <Hot />
                </Box>
                <Box>
                   <Pinned />
                </Box>
                <Box>
                   <EarthIcon />
                </Box>
                <Box>
                   <Bookmark />
                </Box>
            </HStack>
            <Spacer />
            <Box alignSelf='end'>
                <Text textAlign='right' fontSize='sm'>Full-Time</Text>
            </Box>
        </VStack>
      </Flex>
    </Box>
  )
}

export default JobCard