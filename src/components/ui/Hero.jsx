import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <>
    <div>
        <div className='flex flex-col items-center py-20 p-10 gap-6 h-[600px] w-full bg-[#eef0fc] '>
            <h2 className='text-lg '>Find cars for sale and for rent near you</h2>
            <h3 className='text-[60px] font-bold'>Find Your Dream Car</h3>
            <Search/>
            <img src="/tesla.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero