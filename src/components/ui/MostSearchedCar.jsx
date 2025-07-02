import FakeData from '@/Shared/FakeData'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarItem from './CarItem'
function MostSearchedCar() {
    console.log(FakeData)
  return (
    <>
    <div className='mt-15 mx-20'>
        <h3 className='font-bold text-center text-4xl'>Most Searched Cars</h3>
            
                <Carousel  opts={{
    align: "start",
    loop: true,
  }}>
  <CarouselContent>
        {FakeData.CarList.map((car,index)=>(
    <CarouselItem className="md:basis-1/4 basis-1/1 "><CarItem car={car} key={index}/></CarouselItem> 
))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>

    </>
  )
}

export default MostSearchedCar