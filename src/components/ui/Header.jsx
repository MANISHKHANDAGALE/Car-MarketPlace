import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './button';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const {user,isSignedIn} = useUser();
    const navigate = useNavigate();
    const submitlisting = ()=>{
      navigate("/profile");
    }
  return (
    <div className='flex justify-between items-center m-1 shadow-sm p-5'>
        <img src="./WheelVibe.png" alt="" width={60} className='rounded-full'  />
        <ul className='md:flex justify-between gap-10 hidden'>
          <Link to="/">
          <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Home</li>
          </Link>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Search</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>New</li>
            <li className='font-medium hover:scale-105 transition-all hover:text-primary cursor-pointer'>Preowned</li>
        </ul>
        {isSignedIn?
        <div className='flex items-center gap-5 cursor-pointer'>
            <UserButton/>
            <Button className="cursor-pointer" onClick = {submitlisting}>Submit Listing</Button>
        </div> :
          <div className='flex items-center gap-5 cursor-pointer'>
            <SignInButton mode='modal' forceRedirectUrl='/'>
                <button className=' rounded-md bg-red-600 p-1.5 text-white hover: cursor-pointer hover:scale-105 hover:bg-blue-600 '>Sign in</button>
            </SignInButton>
            <Button className="cursor-pointer" onClick = {submitlisting} >Submit Listing</Button>
        </div>
        }

    </div>
  )
}

export default Header