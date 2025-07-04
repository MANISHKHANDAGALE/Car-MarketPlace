import Data from '@/Shared/Data'
import React from 'react'

function Category() {
  return (
    <>
    <div className='mt-40'>
        <h2 className='font-bold text-center text-3xl mb-6'>Browse By Type</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category,index)=>(
                <div className='flex flex-col p-3 items-center border hover:shadow-md hover:scale-110 hover:border-blue-300 rounded-xl cursor-pointer'>
                    <img src={category.icon} alt={category.name} width={40} height={40} />
                    <h2 className='mt-2'> {category.name} </h2>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Category