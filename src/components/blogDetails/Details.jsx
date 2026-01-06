"use client"
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import blog_banner from "../../assets/blog_banner.jpg"
import { IoCheckmarkCircle } from 'react-icons/io5'
import person_one from "../../assets/person_one.jpg"
import person_two from "../../assets/person_two.jpg"
import person_three from "../../assets/person_three.jpg"
import { CommonBtn } from '../home/Financial'
import { toast, Toaster } from 'sonner'
import { CiSearch } from "react-icons/ci";
import service_one from "../../assets/service_one.jpg"
import service_two from "../../assets/service_two.jpg"
import service_three from "../../assets/service_three.jpg"
import service_four from "../../assets/service_four.jpg"
import Link from 'next/link'

const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    display: 'swap'
})
const Details = () => {
    const listText = ["Elevate Your Space with Our  Electrical Solutions", "Embracing Sophistication, Lighting Dreams Experience.", "Class and Reliability, Choose Us Transforming Spaces.", "Classy Electrical Design Excellence Transcends.", "Trends the Epitome of Class in Every Circuit Ageless.", "Craftsmanship for the Classy Clientele A Symphony."]

    const emailRejax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const phnNumberRejax = /^(?:\+880|880|0)1[3-9]\d{8}$/
    const [email, setEmail] = useState("")
    const [phnNUmber, setPhnNUmber] = useState("")
    const handleButton = () => {
        if (emailRejax.test(email) && phnNumberRejax.test(phnNUmber)) {
            toast.success("Messege Send")
        } else {
            toast.warning("Please Input a valid Information")
        }
        setEmail(null)
        setPhnNUmber(null)
    }
    const tags = ["Mindset", "FinanceTips", "StockMarket", "SaveMoney", "SmartMoney", "BudgetPlanner", "Fintech", "Banking", "PersonalFinance", "Freedom", "Growth"]
    return (
        <section className={`${outfit.className} py-[138px] md:py-20 sm:py-12`}>
            <div className="container px-4">
                <div className='grid grid-cols-1 xl:grid-cols-[1008px_1fr] lg:grid-cols-[700px_1fr] gap-[95px] lg:gap-12 md:gap-8'>
                    <div>
                        <h2 className='text-[40px] lg:text-3xl md:text-2xl sm:text-xl leading-[52px] lg:leading-10 md:leading-8 font-semibold pb-10 md:pb-6 sm:pb-4'>The financial advisors that you can trust :</h2>
                        <div className='w-full h-[516px] lg:h-[400px] md:h-[300px] sm:h-[200px] pb-[70px] md:pb-12 sm:pb-8 rounded-[30px] md:rounded-2xl sm:rounded-xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={blog_banner} alt='image' />
                        </div>
                        <h4 className='text-[#181818] text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium pb-[26px] md:pb-4 sm:pb-3'>Where Miracles Happen A Place of Inspiration Discover</h4>
                        <p className='text-[#707070] text-base md:text-sm leading-7 md:leading-6 font-medium pb-[45px] md:pb-8 sm:pb-6'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed posu nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Aliquam semper libero ut lectus.</p>
                        <h4 className='text-[#181818] text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium pb-[26px] md:pb-4 sm:pb-3'>Discover a Place Where You're Truly Seen Loved.</h4>
                        <p className='text-[#707070] text-base md:text-sm leading-7 md:leading-6 font-medium pb-[52px] md:pb-8 sm:pb-6'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                        <div className='grid grid-cols-1 md:grid-cols-[536px_410px] lg:grid-cols-[1fr_1fr] items-center gap-[46px] md:gap-8 sm:gap-6 pb-[82px] md:pb-12 sm:pb-8'>
                            <div className='w-full h-full rounded-[30px] md:rounded-2xl sm:rounded-xl overflow-hidden'>
                                <Image className='w-full h-full object-cover' src={blog_banner} alt='image' />
                            </div>
                            <ul className='flex flex-col gap-y-[30px] md:gap-y-5 sm:gap-y-4'>
                                {
                                    listText.map((listText, index) => {
                                        return <ListItem key={index} text={listText} />
                                    })
                                }
                            </ul>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-[568px_1fr] lg:grid-cols-[1fr_1fr] gap-[48px] md:gap-8 sm:gap-6 items-center'>
                            <div>
                                <h5 className='text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium pb-8 md:pb-6 sm:pb-4'>Where Love Is Our Mission Hope Never</h5>
                                <p className='text-[#707070] text-base md:text-sm leading-7 md:leading-6'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesqu sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                            </div>
                            <div className='w-full h-full rounded-[30px] md:rounded-2xl sm:rounded-xl overflow-hidden'>
                                <Image src={blog_banner} alt='image' />
                            </div>
                        </div>
                        <h5 className='text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium pb-[23px] md:pb-4 sm:pb-3 mt-8 md:mt-6'>Matter Where You've Been Home for the Heart</h5>
                        <p className='text-[#707070] text-base md:text-sm leading-7 md:leading-6'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                        <div className='py-8 md:py-6 sm:py-4 px-[45px] md:px-8 sm:px-6 bg-[#F5F5F5] mt-8 md:mt-6 rounded-lg'>
                            <p className='text-black text-base md:text-sm leading-7 md:leading-6'>" Fashion encompasses clothing, accessories, and even behaviours, reflecting culture and individuality. Fashion evolves continuously, driven by designers, influencers, and changing norms. It has the power to convey identity, status, and creativity. Whether classic or avant-garde, fashion allows individuals to make statements and connect."</p>
                            <p className='text-black text-base md:text-sm leading-6 pt-[15px] md:pt-3 text-end'>- Emma White, Los Angles, CA</p>
                        </div>
                        <p className='text-[#707070] text-base md:text-sm leading-7 md:leading-6 py-[52px] md:py-8 sm:py-6'>Vivamus mollis gravida consectetur. Vestibulum vel nibh pretium, fringilla quam ac, pretium sem. Vestibulum suscipit blandit pharetra. Aliquam suscipit, urna sit amet iaculis dictum, ligula erat ornare enim, et imperdiet massa sem vitae tortor.</p>
                        <div className='border-y border-b-[#A8A8A8] py-[53px] md:py-8 sm:py-6'>
                            <h4 className='text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 text-[#222222] pb-[54px] md:pb-8 sm:pb-6 font-medium'>Comments</h4>
                            <div className='flex flex-col gap-[60px] md:gap-10 sm:gap-8'>
                                <Comments image={person_one} text={"Joel Barbara"} des={"Aenean auctor cursus tincidunt. Maecenas congue velit turpis, ut lacinia tellus hendrerit eget. Sed fringilla sapien sed quam blandit, eu pellentesque risus maximus. Nunc et elementum do Quisque vitae turpis erat. Pellentesque lobortis."} />
                                <div className='max-w-full lg:max-w-[762px] lg:ml-[187px] md:ml-20 sm:ml-0'>
                                    <Comments image={person_two} text={"Kimberly Leo"} des={"Vestibulum tincidunt maximus ipsum eu bibendum. Suspendisse urerat, tincidunt nec dui faucibus, congue condimentum nulla."} />
                                </div>
                                <Comments image={person_three} text={"Kimberly Leo"} des={"Vestibulum tincidunt maximus ipsum eu bibendum. Suspendisse urerat, tincidunt nec dui faucibus, congue condimentum nulla."} />
                            </div>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className='py-[30px] lg:py-[55px] md:py-10 sm:py-8 px-[20px] lg:px-[60px] md:px-10 sm:px-6 rounded-[30px] md:rounded-2xl sm:rounded-xl mt-[60px] md:mt-10 sm:mt-8 bg-[#F2F0E9]'>
                            <h5 className='text-[#222222] text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium pb-[14px] md:pb-3 sm:pb-2'>Leave A Reply</h5>
                            <p className='text-[#222222] text-base md:text-sm leading-7 md:leading-6 pb-[30px] md:pb-6 sm:pb-4'>Your email address will not be published. Required fields are marked *</p>
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[10px] md:gap-3'>
                                    <input className='w-full py-[18px] md:py-4 sm:py-3 px-[30px] md:px-6 sm:px-4 outline-0 focus:border focus:border-black rounded-[10px] md:rounded-lg bg-[#FFFFFF]' type="text" placeholder='Name' />
                                    <input className='w-full py-[18px] md:py-4 sm:py-3 px-[30px] md:px-6 sm:px-4 outline-0 focus:border focus:border-black rounded-[10px] md:rounded-lg bg-[#FFFFFF]' type="text" placeholder='Address' />
                                    <input onChange={(e) => setPhnNUmber(e.target.value)} className='w-full py-[18px] md:py-4 sm:py-3 px-[30px] md:px-6 sm:px-4 outline-0 focus:border focus:border-black rounded-[10px] md:rounded-lg bg-[#FFFFFF]' type="number" placeholder='Phone Number' />
                                    <input onChange={(e) => setEmail(e.target.value)} className='w-full py-[18px] md:py-4 sm:py-3 px-[30px] md:px-6 sm:px-4 outline-0 focus:border focus:border-black rounded-[10px] md:rounded-lg bg-[#FFFFFF]' type="email" placeholder='E-mail Id' />
                                </div>
                                <input type="text" className='mt-[10px] md:mt-3 mb-[20px] md:mb-5 sm:mb-4 px-[30px] md:px-6 sm:px-4 w-full h-[194px] md:h-40 sm:h-32 outline-0 focus:border focus:border-black rounded-[10px] md:rounded-lg bg-[#FFFFFF]' />
                                <CommonBtn event={() => handleButton()} text={"send message"} bg='#0A2B33' textColor='white' />
                            </div>
                        </form>
                    </div>
                    <aside>
                        <div className='py-[14px] md:py-3 px-6 md:px-4 border border-[#D9D9D9] grid grid-cols-[1fr_21px] items-center mb-[20px] md:mb-5 sm:mb-4 rounded-md'>
                            <input type="search" placeholder='Search keyword' className='focus:border-none focus:outline-none border-none outline-none text-sm md:text-xs' />
                            <CiSearch className='w-[21px] h-[21px] md:w-5 md:h-5 cursor-pointer' />
                        </div>
                        <div className='py-[13px] md:py-3 px-[30px] md:px-6 sm:px-4 bg-[#041C28] rounded-t-md'>
                            <h3 className='text-white text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium'>Recent post</h3>
                        </div>
                        <div className='py-[35px] md:py-6 sm:py-5 px-[30px] md:px-6 sm:px-4 border border-[#D9D9D9] flex flex-col gap-y-6 md:gap-y-5 sm:gap-y-4 rounded-b-md'>
                            <Post date={"Aug 12, 2024"} image={service_one} des={"Captivating Automotive Parts for the Refined Taste"} />
                            <Post date={"Sep 15, 2024"} image={service_two} des={"Drive with Grace and Confidence with Our Classy Parts"} />
                            <Post date={"Oct 18, 2024"} image={service_three} des={"Discover the Epitome Automotive Class and Prestige"} />
                            <Post date={"Nov 22, 2024"} image={service_four} des={"Drive with Grace and Confidence with Our Classy Parts"} />
                        </div>
                        <div className='py-[13px] md:py-3 px-[30px] md:px-6 sm:px-4 bg-[#041C28] mt-[30px] md:mt-6 sm:mt-5 rounded-t-md'>
                            <h3 className='text-white text-[25px] lg:text-xl md:text-lg sm:text-base leading-[33px] lg:leading-7 md:leading-6 font-medium'>TAGS</h3>
                        </div>
                        <div className='border-x border-b border-[#D9D9D9] px-[21px] md:px-4 sm:px-3 py-[30px] md:py-6 sm:py-5 flex gap-[10px] md:gap-2 items-center flex-wrap rounded-b-md'>
                            {
                                tags.map((tag, index) => {
                                    return <span key={index} className='py-[9px] md:py-2 px-[25px] md:px-4 sm:px-3 border border-[#D9D9D9] text-center text-sm md:text-xs rounded'>{tag}</span>
                                })
                            }
                        </div>
                    </aside>
                </div>
            </div>
            <Toaster position='top-right' />
        </section>
    )
}
const ListItem = ({ text }) => {
    return (
        <li className='flex items-center gap-3 md:gap-2'>
            <IoCheckmarkCircle className='flex-shrink-0 w-5 h-5 md:w-4 md:h-4' />
            <span className='text-[#3C3C3C] text-base md:text-sm leading-[22px] md:leading-5'>{text}</span>
        </li>
    )
}
const Comments = ({ image, text, des }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-[155px_1fr] md:grid-cols-[120px_1fr] gap-[50px] md:gap-8 sm:gap-6 items-center'>
            <div className='w-full h-[155px] md:h-[120px] sm:h-[120px] rounded-[15px] md:rounded-xl overflow-hidden'>
                <Image className='w-full h-full object-cover' src={image} alt='image' />
            </div>
            <div className='flex flex-col gap-3 md:gap-2'>
                <p className='text-[#3D3D3D] text-[12px] md:text-[10px] leading-2 font-medium'>March 2025</p>
                <p className='text-[#222222] text-[20px] md:text-lg sm:text-base leading-[33px] md:leading-7 font-medium '>{text}</p>
                <p className='text-base md:text-sm leading-7 md:leading-6 text-[#707070]'>{des}</p>
            </div>
        </div>
    )
}
const Post = ({ image, date, des }) => {
    return (
        <Link href={"/service"} className='grid grid-cols-[100px_1fr] md:grid-cols-[80px_1fr] items-center gap-[23px] md:gap-4 sm:gap-3'>
            <div className='h-[100px] md:h-[80px] rounded-md overflow-hidden'>
                <Image className='w-full h-full object-cover' src={image} alt='image' />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[12px] md:text-[10px] leading-2 font-medium text-[#174D4E]'>{date}</p>
                <p className='text-[#1C282F] text-[15px] md:text-sm sm:text-xs leading-[25px] md:leading-5 font-medium'>{des}</p>
            </div>
        </Link>
    )
}
export default Details