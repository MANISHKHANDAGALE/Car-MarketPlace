import { Button } from '@/components/ui/button'
import Header from '@/components/ui/Header'
import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <>
    <div><Header/></div>
    <div>
      <div className='flex justify-between items-center m-10 md:px-20 px-10'>
        <h2 className='text-4xl font-bold'>My Listing</h2>
        <Link to="/AddListing">
        <Button className="cursor-pointer"> + Add Listing</Button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Profile