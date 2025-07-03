import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function Dropdown({item,handleInputChange}) {
  return (
    <Select required={item.required} onValueChange={(value)=>handleInputChange(item.name,value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={item?.label} />
  </SelectTrigger>
  <SelectContent>
    {item?.options?.map((option,index)=>(

    <SelectItem value={option} key={index}>{option}</SelectItem>
    ))}

  </SelectContent>
</Select>
  )
}

export default Dropdown