import { Outfit } from 'next/font/google'
import React from 'react'
import { FaChevronRight, FaPlay } from 'react-icons/fa6'

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "700"
})
const outfit3 = Outfit({
    weight: "400"
})
const outfit4 = Outfit({
    weight: "600"
})
const Banner = () => {
    return (
        <section className='banner_img pt-32 md:pt-32.5 pb-16 md:pb-20 lg:pb-25 rounded-[30px]'>
            <div className="container">
                <div>
                    <div className={`py-2 px-4 md:px-4.5 bg-[#E5FF5E] text-nowrap rounded-full text-black inline-block font-medium mb-3 md:mb-4 lg:mb-4.5 text-sm md:text-base ${outfit.className}`}>invest in opportunity</div>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-[60px] text-[#FFFFFF] leading-tight md:leading-snug lg:leading-17.5 font-bold pb-4 md:pb-5 lg:pb-6.25 max-w-full lg:max-w-206 ${outfit2.className}`}>The financial advisors that you can trust Building a good financial standing</h1>
                    <p className={`text-white text-sm md:text-base max-w-full lg:max-w-202 leading-6 md:leading-6.25 pb-8 md:pb-10 lg:pb-12 ${outfit3.className}`}>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, standard chunk of Lorem Ipsum used</p>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 lg:gap-10.5 pb-6 md:pb-7 lg:pb-8.25'>
                        <button className='py-1.5 md:py-1.75 pr-1.5 md:pr-1.75 pl-3.5 md:pl-4.25 cursor-pointer bg-white rounded-full flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start'>
                            <span className={`font-semibold text-sm md:text-base leading-3 text-black ${outfit4.className}`}>Explore More</span>
                            <div className='size-7 md:size-8.75 rounded-full bg-[#04150B] grid place-items-center'>
                                <FaChevronRight className='text-[#E6D2AF] text-xs md:text-sm' />
                            </div>
                        </button>
                        <button className='flex items-center gap-2 md:gap-3 cursor-pointer w-full sm:w-auto justify-center sm:justify-start'>
                            <div className='relative'>
                                <div className="w-12 h-12 md:w-13.75 md:h-13.75 rounded-full overflow-hidden bg-transparent flex">
                                    <div className="w-1/2 h-full bg-[#83614e]" />
                                </div>
                                <div className='w-7 h-7 md:w-8 md:h-7.5 rounded-full bg-[#FF0000] absolute -top-0.75 left-2.5 md:left-3.25 translate-y-[50%] grid place-items-center'>
                                    <FaPlay className='text-white text-xs md:text-sm' />
                                </div>
                            </div>
                            <span className={`text-white font-bold underline text-sm md:text-base ${outfit2.className}`}>HOW TO WORKS</span>
                        </button>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <input type="checkbox" id='check' className='w-4 h-4' />
                        <label htmlFor="check" className={`text-white text-xs md:text-[12px] leading-5 md:leading-7 ${outfit3.className}`}>Aliquam pretium et mauris a porttitor.</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner