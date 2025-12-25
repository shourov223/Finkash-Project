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
        <section className='pt-37.5 pb-20'>
            <div className="container">
                <span className={`text-nowrap py-2 px-4.75 rounded-full bg-[#E5FF5E] text-[12px] leading-2 text-black font-medium ${outfit.className}`}>Our Services</span>
                <h2 className={`text-[40px] font-semibold leading-13 text-[#041C28] pt-4.25 max-w-193.5 pb-23.25 ${outfit2.className}`}>Mergers & Acquisitions Advisory Corporate Risk Management</h2>
                {/* Slider Part */}
                <div className='grid grid-cols-3 items-center'>
                    <SliderCard image={section2_image2} text={"lorem"} />
                    <SliderCard image={section2_image2} text={"lorem"} />
                    <SliderCard image={section2_image2} text={"lorem"} />
                </div>
            </div>
        </section>
    )
}


const SliderCard = ({ image, text }) => {
    return (
        <div className='max-w-107.5 relative rounded-[30px] overflow-hidden group hover:bg-[#021623] hover:px-2 hover:pt-2.25 hover:h-180.75 transition-all duration-300'>
            <Image className='w-full h-full object-cover group-hover:h-130.25 rounded-[30px]' src={image} alt='image' />
            <div className='w-87.5 flex items-center justify-between gap-2 absolute bottom-12 left-[50%] translate-x-[-50%] group-hover:hidden'>
                <span className={`text-[25px] text-white font-medium`}>{text}</span>
                <button className='size-13.5 grid place-items-center rounded-full bg-[#E5FF5E]'>
                    <LuArrowUpRight className='text-black' />
                </button>
            </div>
            <div className='pt-7.75 px-7.75 hidden group-hover:block'>
                <h5 className={`text-[#E5FF5E] text-[30px] leading-8.25 font-medium pb-3 ${outfit.className}`}>Financial  Retirement</h5>
                <p className={`text-white text-[14px] leading-5 pb-6.5 ${outfit3.className}`}>Donec molestie lacus vel massa malesuada, vitae accum nunc malesuada Donec sed convallis Investment.</p>
                <Link href={"/"} className={`text-[#E5FF5E] font-semibold text-base leading-3`}>read more</Link>
            </div>
        </div>
    )
}
export default OurService