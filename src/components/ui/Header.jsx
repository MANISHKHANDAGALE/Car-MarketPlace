import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './button';
function Header() {
    const {user,isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center m-1 shadow-sm p-5'>
        <img src="./logo.svg" alt="" width={150} height={100} />
        <ul className='md:flex justify-between gap-10 hidden'>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Home</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Search</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>New</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Preowned</li>
        </ul>
        {isSignedIn?
        <div className='flex items-center gap-5'>
            <UserButton/>
            <Button>Submit Listing</Button>
        </div> :
          <div className='flex items-center gap-5'>
            <SignInButton mode='modal' forceRedirectUrl='/'>
                <button className=' rounded-md bg-red-600 p-1.5 text-white hover: cursor-pointer hover:scale-105 hover:bg-blue-600 '>Sign in</button>
            </SignInButton>
            <Button>Submit Listing</Button>
        </div>
        }

    </div>
  )
}

export default Header