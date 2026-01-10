"use client"
import React, { useState } from 'react'
import { CommonDesign } from './OurClients'
import { Outfit } from 'next/font/google'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { toast, Toaster } from 'sonner'
import Image from 'next/image'
import form_image from "../../assets/form_image.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

// fonts
const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})

const ContactUs = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const bdPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const handleForm = () => {
        if (emailRegex.test(email) && bdPhoneRegex.test(number)) {
            toast.success(`Thank You for valid information`)
        } else if (!emailRegex.test(email)) {
            toast.error("Please input a valid Email")
        } else if (!bdPhoneRegex.test(number)) {
            toast.error("Please input a correct Phone number")
        }
        setEmail("");
        setNumber("");
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className='bg-[#F1F1F1] py-[60px] lg:py-[150px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[662px_1fr] items-center gap-8 lg:gap-[53px]'>
                    <div>
                        <CommonDesign text={"Contact Us"} />
                        <h4 className={`text-[#031925] text-2xl md:text-[40px] leading-tight md:leading-13 font-semibold ${outfit.className} pt-4 md:pt-4.5 pb-5 md:pb-7`}>Get In Touch with Our Team</h4>
                        <p className={`text-[#424242] text-sm md:text-base leading-6 md:leading-7 max-w-full lg:max-w-136.5 pb-8 md:pb-10 ${outfit2.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem. </p>
                        <form className='flex flex-col gap-4 md:gap-[20px]'>
                            <input className='py-3 md:py-4 px-4 md:px-[22px] border border-[#D8D8D8] rounded-[10px] w-full' type="text" placeholder='Your Name' />
                            <input onChange={(e) => setNumber(e.target.value)} className='py-3 md:py-4 px-4 md:px-[22px] border border-[#D8D8D8] rounded-[10px] w-full' type="number" placeholder='Your Phone Number' />
                            <input onChange={(e) => setEmail(e.target.value)} className='py-3 md:py-4 px-4 md:px-[22px] border border-[#D8D8D8] rounded-[10px] w-full' type="email" placeholder='Your Email' />
                            <input className='py-3 md:py-4 px-4 md:px-[22px] border border-[#D8D8D8] rounded-[10px] w-full' type="text" placeholder='Message Here' />
                        </form>
                        <button onClick={handleForm} className="rounded-[50px] flex items-center gap-3 md:gap-4.25 cursor-pointer py-1.5 md:py-1.75 pr-1.5 md:pr-1.75 pl-4 md:pl-5.25 bg-linear-to-l from-[#021623] via-[#195353] to-[#021623] mt-8 md:mt-10">
                            <p className={`text-white font-semibold text-sm md:text-base leading-3 text-nowrap ${outfit.className}`}>Send Messagep</p>
                            <div className="size-7 md:size-8.75 rounded-full grid place-items-center bg-white">
                                <MdKeyboardArrowRight className="text-[#0A2B33]" />
                            </div>
                        </button>
                    </div>
                    <div className='w-full hidden 2xl:block'>
                        <Slider {...settings} className='w-full lg:w-[805px] relative'>
                            <div>
                                <Image src={form_image} alt='image' className='w-full h-auto' />
                            </div>
                            <div>
                                <Image src={form_image} alt='image' className='w-full h-auto' />
                            </div>
                        </Slider>
                        <div className='bg-linear-to-l from-[#021623] via-[#195353] to-[#021623] py-5 md:py-6.25 px-5 md:px-8.75'>
                            <p className={`text-[14px] max-w-150 leading-5 md:leading-5.5 text-white ${outfit2.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </section>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='size-8 md:size-9 rounded-full lg:grid place-items-center hover:bg-white group bg-[#E5FF5E] transition-all duration-200 absolute z-10 bottom-[-50px] md:bottom-[-63px] right-[15px] md:right-[20px] hidden' >
        <FaArrowRight className='text-black text-sm md:text-base' />
    </button>
}
const PrevArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='size-8 md:size-9 rounded-full lg:grid place-items-center hover:bg-white group bg-[#E5FF5E] transition-all duration-200 absolute z-10 bottom-[-50px] md:bottom-[-63px] right-[60px] md:right-[70px] hidden' >
        <FaArrowLeft className='text-black text-sm md:text-base' />
    </button>
}
export default ContactUs