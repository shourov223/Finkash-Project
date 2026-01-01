"use client"
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { toast } from 'sonner'
import { socialIcons } from './TeamMembers'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { IoMailUnreadSharp } from 'react-icons/io5'
import { TbWorld } from "react-icons/tb";

const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})
const outfit3 = Outfit({
    weight: "500"
})

const Footer = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email, setEmail] = useState("")
    const handleClick = () => {
        if (emailRegex.test(email)) {
            toast.success("Thanks for subscribe US")
        } else {
            toast.warning("Input a valid Email")
        }
        setEmail("")
    }
    return (
        <footer className='pt-12 md:pt-20 lg:pt-[100px] pb-[30px] rounded-t-[20px] md:rounded-t-[30px] bg-linear-to-t from-[#021623] via-[#195353] to-[#021623]'>
            <div className="container">
                <div>
                    <div>
                        <div className='py-8 md:py-10 px-6 md:px-10 lg:px-17.5 bg-white rounded-[20px] md:rounded-[30px] max-w-full lg:max-w-380 mx-auto grid grid-cols-1 lg:grid-cols-[546px_1fr] gap-8 md:gap-12 lg:gap-[87px]'>
                            <div>
                                <h2 className={`text-2xl md:text-3xl lg:text-[40px] text-[#031925] leading-tight md:leading-[52px] pb-1.5 font-semibold ${outfit.className}`}>Join Our Newsletter</h2>
                                <p className={`text-sm md:text-base text-[#424242] leading-6 md:leading-7 ${outfit2.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem. </p>
                            </div>
                            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-1.5'>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your email Address' className='w-full py-3 md:py-[15px] px-5 md:px-8 rounded-[30px] border border-black placeholder:text-[#041A27] text-sm md:text-base' />
                                <button onClick={handleClick} className='bg-linear-to-t from-[#021623] via-[#195353] to-[#021623] py-1.75 cursor-pointer pr-1.75 pl-5 md:pl-7 rounded-[50px] flex items-center justify-center gap-2 whitespace-nowrap'>
                                    <span className={`text-sm md:text-base text-white font-semibold leading-3 text-nowrap ${outfit.className}`}>Subscribe</span>
                                    <div className='size-[30px] md:size-[35px] rounded-full bg-white grid place-items-center'>
                                        <MdKeyboardArrowRight />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='pt-12 md:pt-16 lg:pt-[103px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-[373px_1fr_1fr_1fr_1fr] gap-8 md:gap-12 lg:gap-[119px] pb-12 md:pb-16 lg:pb-[101px] border-b border-b-white'>
                            <div className='sm:col-span-2 lg:col-span-1'>
                                <Image src={"/Logo.png"} alt='image' width={251} height={47} className='w-[180px] md:w-[220px] lg:w-[251px] h-auto' />
                                <p className={`text-sm md:text-base text-white leading-6 md:leading-7 ${outfit2.className} pt-5 md:pt-[20px] pb-8 md:pb-12 lg:pb-[73px]`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes.</p>
                                <div className='flex items-center gap-5 md:gap-[30px]'>
                                    {socialIcons.map((item, index) => {
                                        return <div className='text-white cursor-pointer' key={index}>{item}</div>
                                    })}
                                </div>
                            </div>
                            <ul>
                                <ListHeading text={"Our Address"} />
                                <span className='flex gap-4 md:gap-[22px]'>
                                    <FaLocationDot className='text-white flex-shrink-0 mt-1' />
                                    <LIstItem item={"9826 Painter Ave, Whittier, CA, United States."} />
                                </span>
                                <span className='flex gap-4 md:gap-[22px]'>
                                    <IoMdCall className='text-white flex-shrink-0 mt-1' />
                                    <LIstItem item={"+1800 396 756"} />
                                </span>
                                <span className='flex gap-4 md:gap-[22px]'>
                                    <IoMailUnreadSharp className='text-white flex-shrink-0 mt-1' />
                                    <LIstItem item={"support@finkash.com"} />
                                </span>
                                <span className='flex gap-4 md:gap-[22px]'>
                                    <TbWorld className='text-white flex-shrink-0 mt-1' />
                                    <LIstItem item={"www.finkash.com"} />
                                </span>
                            </ul>
                            <ul>
                                <ListHeading text={"Company"} />
                                <LIstItem item={"About"} />
                                <LIstItem item={"Plans"} />
                                <LIstItem item={"Services"} />
                                <LIstItem item={"Products"} />
                                <LIstItem item={"Privacy Policy"} />
                                <LIstItem item={"Terms of use"} />
                            </ul>
                            <ul>
                                <ListHeading text={"Help & Support"} />
                                <LIstItem item={"Support"} />
                                <LIstItem item={"Locate us"} />
                                <LIstItem item={"Booking"} />
                                <LIstItem item={"Contact Us"} />
                                <LIstItem item={"Login"} />
                                <LIstItem item={"FAQ"} />
                            </ul>
                            <ul>
                                <ListHeading text={"Services Cities"} />
                                <LIstItem item={"New York"} />
                                <LIstItem item={"Los Angeles"} />
                                <LIstItem item={"Chicago"} />
                                <LIstItem item={"London"} />
                                <LIstItem item={"Houston"} />
                                <LIstItem item={"Washington"} />
                            </ul>
                        </div>
                    </div>
                    <div className='text-center pt-6 md:pt-8'>
                        <span className={`text-white text-sm md:text-base leading-5 md:leading-3 ${outfit2.className}`}>© 2022 Auditing | Design by DesignThemes. </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
const ListHeading = ({ text }) => {
    return <li className={`text-white font-medium text-lg md:text-xl lg:text-[25px] leading-tight md:leading-[33px] text-nowrap pb-5 md:pb-6 lg:pb-8 ${outfit3.className}`}>{text}</li>
}
const LIstItem = ({ item }) => {
    return <li className={`text-sm md:text-base text-white leading-6 md:leading-7 pb-3 max-w-full md:max-w-[192px] ${outfit2.className}`}>{item}</li>
}
export default Footer