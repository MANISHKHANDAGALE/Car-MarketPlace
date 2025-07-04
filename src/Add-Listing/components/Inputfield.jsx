import { Input } from '@/components/ui/input'
import React from 'react'

function Inputfield({item,handleInputChange}) {
  return (
    <>
    <div>
        <Input onChange={(e)=>handleInputChange(item.name,e.target.value)} required={item?.required} type={item?.fieldType} name={item?.name}/>
    </div>
    </>
  )
}

export default Inputfield