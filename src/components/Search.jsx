import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';
const Search = () => {
    return (
        <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center   '>
            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none ">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Old">Old</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none ">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarMakes.map((maker, index) => (
                        <SelectItem value={maker.name} >{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>


            <Separator orientation="vertical" className="hidden md:block" />

            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none ">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {Data.Pricing.map((price, index)=>(
                        <SelectItem value= {price.amount}>{price.amount}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div className=''>

                <CiSearch className='text-[40px] bg-primary rounded-full p-3 text-white hover:scale-110 transition-all cursor-pinter ' />
            </div>

        </div>
    );
};

export default Search;