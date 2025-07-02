import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function Dropdown({item}) {
  return (
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={item?.label} />
  </SelectTrigger>
  <SelectContent>
    {item?.options?.map((item,index)=>(

    <SelectItem value={index}>{item}</SelectItem>
    ))}

  </SelectContent>
</Select>
  )
}

export default Dropdown