import React from 'react'
import { CommonDesign } from '../home/OurClients'
import { Outfit } from 'next/font/google'
import { CommonBtn } from '../home/Financial'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import service_one from "../../assets/service_one.jpg"
import service_two from "../../assets/service_two.jpg"
import service_three from "../../assets/service_three.jpg"
import service_four from "../../assets/service_four.jpg"
import service_five from "../../assets/service_five.jpg"
import service_six from "../../assets/service_six.jpg"
import service_seven from "../../assets/service_seven.jpg"
import service_eight from "../../assets/service_eight.jpg"
import service_nine from "../../assets/service_nine.jpg"
import Link from 'next/link'

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "600"
})
const outfit3 = Outfit({
    weight: "400"
})

const SocialFinancial = () => {
    const text = "Vestibulum vestibulum enim dolor, non luctus mi scelerisque laoreet Integer finibus mattis Praesent nisi nunc"
    const serviceArray = [
        {
            image: service_one,
            title: "Portfolio Management",
            text
        },
        {
            image: service_two,
            title: "Finance & Risk",
            text
        },
        {
            image: service_three,
            title: "Technology Advisory",
            text
        },
        {
            image: service_four,
            title: "Corporate Financial",
            text
        },
        {
            image: service_five,
            title: "Financial Insurance",
            text
        },
        {
            image: service_six,
            title: "Wealth Management",
            text
        },
        {
            image: service_seven,
            title: "Corporate Financial",
            text
        },
        {
            image: service_eight,
            title: "Financial Insurance",
            text
        },
        {
            image: service_nine,
            title: "Wealth Management",
            text
        },
    ]
    return (
        <section className='py-[60px] md:py-[100px] lg:py-[150px]'>
            <div className="container px-4 md:px-6 lg:px-8">
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[589px_623px_195px] gap-6 md:gap-10 lg:gap-[90px] mb-10 md:mb-16 lg:mb-20'>
                    <div>
                        <CommonDesign text={"Social financial redefined"} />
                        <h2 className={`text-[#041C28] font-semibold text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] pt-2.25 ${outfit2.className}`}>Where financial secrets become opportunities</h2>
                    </div>
                    <p className={`text-[#4D4D4D] text-sm md:text-[15px] lg:text-base leading-6 md:leading-[26px] lg:leading-7 ${outfit3.className}`}>Phasellus vehicula lectus non euismod congue. Vestibulum libero purus, rhoncus vitae sem at, interdum dictum arcu. Vivamus lacinia congue porttitor.</p>
                    <div className='md:col-span-2 lg:col-span-1 flex md:justify-start'>
                        <CommonBtn text={"View All Services"} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-[67px]'>
                    {
                        serviceArray.map((item, index) => {
                            return <SocialCard key={index} img={item.image} text={item.text} title={item.title} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const SocialCard = ({ img, title, text }) => {
    return (
        <Link href={"/serviceDetails"} className='p-[15px] md:p-[18px] lg:p-[20px] bg-[#F3F3F3] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] group hover:bg-[#041C28] transition-all duration-200 max-w-full lg:max-w-[495px] max-h-none lg:max-h-[620px]'>
            <div className='rounded-[20px] md:rounded-[25px] lg:rounded-[30px] overflow-hidden'>
                <Image src={img} alt='image' className='w-full h-auto' />
            </div>
            <div className='px-[10px] md:px-[12px] lg:px-[15px] pt-[18px] md:pt-[20px] lg:pt-[23px] text-center'>
                <h4 className={`text-[#041C28] text-[20px] md:text-[22px] lg:text-[25px] leading-[28px] md:leading-[30px] lg:leading-[33px] font-medium group-hover:text-white ${outfit.className}`}>{title}</h4>
                <p className={`text-sm md:text-[15px] lg:text-base text-[#4D4D4D] leading-6 md:leading-[26px] lg:leading-7 pt-[8px] md:pt-[9px] lg:pt-[10px] group-hover:text-white pb-[20px] md:pb-[25px] lg:pb-[30px] ${outfit3.className}`}>{text}</p>
                <button className='min-w-[38px] mx-auto h-[38px] grid place-items-center bg-[#080239] rounded-full group-hover:hidden'>
                    <IoIosArrowForward color='white' />
                </button>
                <div className='hidden group-hover:grid place-items-center'>
                    <CommonBtn bg='#ffffff' textColor='#041C28' text={"Read More"} />
                </div>
            </div>
        </Link>
    )
}
export default SocialFinancial