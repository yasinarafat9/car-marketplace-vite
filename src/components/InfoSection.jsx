import React from 'react'
import FordImg from '../../src/assets/ford.png'
import BlackCarImg from '../../src/assets/black-car.png'
import RedLowRide from '../../src/assets/red-low-ride.png'
const InfoSection = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">

                    <div>
                        <img
                            src={RedLowRide}
                            className="rounded"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">

                                Lowriders: The Ultimate Ride of Style and Culture
                            </h2>

                            <p className="mt-4 text-gray-700">

                                Experience the ultimate blend of style, culture, and innovation with a lowrider car! These customized vehicles turn heads with their vibrant paint jobs, intricate murals, and hydraulic systems that let you adjust height and bounce in motion. Rooted in rich tradition, lowriders are more than cars—they're a statement of pride and individuality. Own a masterpiece that combines artistry and performance like no other!
                            </p>

                            <div className='mt-8'>
                                <a
                                    className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    href="#"
                                >
                                    <span className="text-sm font-medium"> Browse Collection </span>

                                    <svg
                                        className="size-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default InfoSection
