import Header from '@/components/ui/Header'
import React from 'react'
import carDetails from '@/Shared/carDetails.json'
import Inputfield from './components/Inputfield'
import Dropdown from './components/Dropdown'
import TextAreaField from './components/TextAreaField'
import { Separator } from '@/components/ui/separator'
import features from '@/Shared/features.json'
import CheckBox from './components/CheckBox'
function AddListing() {
  return (
    <>
    <div><Header/></div>
    <div className='px-10 md:px-20 my-10'>
      <h2 className='text-4xl font-bold'>Add New Listing</h2>
      <form action="">
      <div className='border mt-10 p-10 rounded-xl'>
        <h2 className='font-medium text-xl mb-6'>
        Car Details
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {carDetails.carDetails.map((item,index)=>(
            <div key={index} className='m-1'>
              <label>{item?.label}{item?.required && <span className='text-red-500'> *</span>}</label>
              {item.fieldType == 'text' || item.fieldType == 'number'? <Inputfield item={item}/>
              :item.fieldType == 'dropdown'?<Dropdown item={item}/>
              :item.fieldType == 'textarea'?<TextAreaField item={item}/>
              :null }
            </div>
          ))}
        </div>
        <Separator className="my-2"/>
        {/* feature list */}
        <div>
          <h2 className='font-medium text-xl mb-6'>Features</h2>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
            {features?.features?.map((e,i)=>(
             <div className='flex items-center gap-2 cursor-pointer'>
              <CheckBox/> <h2 className='text-lg'>{e?.label}</h2>
             </div>
            ))}
          </div>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddListing