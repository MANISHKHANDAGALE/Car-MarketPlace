import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './components/ui/button';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import Category from './components/ui/Category';
import MostSearchedCar from './components/ui/MostSearchedCar';
function Home() {
  return (
    <>
    <Header />
    <Hero/>
    <Category/>
    <MostSearchedCar/>
    
    </>
  )
}

export default Home