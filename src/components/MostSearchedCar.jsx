import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './ui/CarItem'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MostSearchedCar = () => {
    // console.log(FakeData.carList);
    return (
        <div className='mx-24'>
            <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Cars</h2>

            <Carousel>
                <CarouselContent>
                    {FakeData.carList.map((car, index) => (
                        <CarouselItem className="md:basis-1/4 "> 
                            <CarItem car={car} key={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default MostSearchedCar
