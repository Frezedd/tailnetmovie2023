import React from 'react'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img 
        className='w-full h-[400px] object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/bb82d44a-8b5e-4b1d-857f-921e442398a7/US-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account
