import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from './separator'
import { FcSearch } from "react-icons/fc";
import Data from '@/Shared/Data';
function Search() {
  return (
    <>
    <div className='p-2 px-5 md:p-5 bg-white rounded-md   md:rounded-full flex-col md:flex md:flex-row items-center gap-10 w-[60%]'>
   <Select>
  <SelectTrigger  className="text-lg  outline-none md:border-none w-full shadow-none cursor-pointer  ">
    <SelectValue  placeholder="Car" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Used</SelectItem>
    <SelectItem value="system">Certified Preowned</SelectItem>
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block" />
   <Select>
  <SelectTrigger  className="text-lg text-black outline-none md:border-none w-full shadow-none cursor-pointer  ">
    <SelectValue  placeholder="Car Brand" />
  </SelectTrigger>
  <SelectContent>
    {Data.CarMakes.map((maker,index)=>(

    <SelectItem value={maker.name}>{maker.name}</SelectItem>
    ))}
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block" />
   <Select>
  <SelectTrigger  className="text-lg text-black outline-none md:border-none w-full shadow-none   ">
    <SelectValue placeholder="pricing" />
  </SelectTrigger>
  <SelectContent>
   {Data.Pricing.map((id,index)=>(

    <SelectItem value={id.amount}>$ {id.amount}</SelectItem>
   ))}

   
  </SelectContent>
</Select>
<FcSearch className='w-[180px] text-3xl hover:scale-125 cursor-pointer'/>
    </div>
    </>
  )
}

export default Search