import React from 'react'
import { Textarea } from '@/components/ui/textarea'
function TextAreaField({item,handleInputChange}) {
  return (
    <>
    <div onChange={(e)=>handleInputChange(item.name,e.target.value)}><Textarea/></div>
    </>
  )
}

export default TextAreaField