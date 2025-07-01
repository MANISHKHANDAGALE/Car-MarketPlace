import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './components/ui/button';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
function Home() {
  return (
    <>
    <Header />
    <Hero/>
    
    </>
  )
}

export default Home