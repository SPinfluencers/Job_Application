import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Jobs from '../Components/Home/Jobs'
import SearchSection from '../Components/Home/SearchSection'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <SearchSection/>
        <Jobs />
    </div>
  )
}

export default HomePage