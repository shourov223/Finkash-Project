import { Outfit } from 'next/font/google'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuArrowUpRight } from "react-icons/lu";
import Image from 'next/image';
import section2_image2 from "../../assets/section2_image2.jpg"
import Link from 'next/link';

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "600"
})
const outfit3 = Outfit({
    weight: "400"
})


const OurService = () => {
    return (
        <section className='xl:pt-37.5 pt-10 pb-20 px-4 sm:px-6 lg:px-0'>
            <div className="container">
                <span className={`text-nowrap py-2 px-4.75 rounded-full bg-[#E5FF5E] text-[12px] leading-2 text-black font-medium ${outfit.className}`}>Our Services</span>
                <h2 className={`text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-13 text-[#041C28] pt-4.25 max-w-full lg:max-w-193.5 pb-12 sm:pb-16 lg:pb-23.25 ${outfit2.className}`}>Mergers & Acquisitions Advisory Corporate Risk Management</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6 lg:gap-3'>
                    <SliderCard image={section2_image2} text={"Real Estate Investment"} />
                    <SliderCard image={section2_image2} text={"Risk Management"} />
                    <SliderCard image={section2_image2} text={"Financial  Retirement"} />
                </div>
            </div>
        </section>
    )
}


const SliderCard = ({ image, text }) => {
    return (
        <div className='max-w-full lg:max-w-107.5 relative rounded-[30px] overflow-hidden group hover:bg-[#021623] hover:px-2 hover:pt-2.25 hover:h-auto lg:hover:h-180.75 transition-all duration-300'>
            <Image className='w-full h-full object-cover group-hover:h-auto lg:group-hover:h-130.25 rounded-[30px]' src={image} alt='image' />
            <div className='w-full px-4 sm:w-87.5 flex items-center justify-between gap-2 absolute bottom-8 sm:bottom-12 left-[50%] translate-x-[-50%] group-hover:hidden'>
                <span className={`text-[20px] sm:text-[25px] text-white font-medium`}>{text}</span>
                <button className='size-12 sm:size-13.5 grid place-items-center rounded-full bg-[#E5FF5E] flex-shrink-0'>
                    <LuArrowUpRight className='text-black text-xl sm:text-2xl' />
                </button>
            </div>
            <div className='pt-7.75 px-4 sm:px-7.75 hidden group-hover:block'>
                <h5 className={`text-[#E5FF5E] text-[24px] sm:text-[30px] leading-tight sm:leading-8.25 font-medium pb-3 ${outfit.className}`}>{text}</h5>
                <p className={`text-white text-[14px] leading-5 pb-6.5 ${outfit3.className}`}>Donec molestie lacus vel massa malesuada, vitae accum nunc malesuada Donec sed convallis Investment.</p>
                <Link href={"/"} className={`text-[#E5FF5E] font-semibold text-base leading-3`}>read more</Link>
            </div>
        </div>
    )
}
export default OurService