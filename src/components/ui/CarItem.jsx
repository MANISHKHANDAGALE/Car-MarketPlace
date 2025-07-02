import { Separator } from './separator'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
function CarItem({car}) {
  return (
   <>
   <div className='mt-10 mb-10 shadow cursor-pointer rounded-xl bg-white border flex flex-col items-center hover:shadow-blue-400'>
    <h2 className='absolute left-10 mt-4 bg-green-500 rounded-full px-2 pb-0.5 text-sm text-white '>{car.Condition}</h2>
    <img className='rounded-xl hover:scale-102 mt-2' width={300} height={250} src={car?.image} alt={car?.name} />
    <div>
    <h2 className='font-bold text-lg text-center p-4 hover:text-blue-600'>{car?.name}</h2>
    <Separator/>
    <div className='grid grid-cols-3 mt-5'>
      <div className='flex items-center flex-col gap-2 mb-2'>
        <BsFillFuelPumpFill size={20} />
        <h2 className='text-lg text-black'>{car.miles} Miles</h2>
      </div>
     <div className='flex items-center flex-col gap-2 mb-2'>
        <SiSpeedtest size={20}/>
        <h2 className='text-lg text-black'>{car.fuelType}</h2>
      </div>
      <div className='flex items-center flex-col gap-2 mb-2'>
        <FaGear size={20}/>
        <h2 className='text-lg text-black'>{car.gearType}</h2>
      </div>
    </div>
    <Separator/>
    <div className='flex justify-between items-center m-2'>
      <h2 className='font-bold text-lg'>$ {car.price}</h2>
      <h2 className='text-md text-blue-700 flex items-center  gap-2'>View Details <GrView className='mt-0.5' size={15}/> </h2>
    </div>
    </div>
   </div>
   
   </>
  )
}

export default CarItem