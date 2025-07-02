import { Input } from '@/components/ui/input'
import React from 'react'

function Inputfield({item}) {
  return (
    <>
    <div>
        <Input required={item?.required} type={item?.fieldType} name={item?.name}/>
    </div>
    </>
  )
}

export default Inputfield