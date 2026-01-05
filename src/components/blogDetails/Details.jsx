"use client"
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import blog_banner from "../../assets/blog_banner.jpg"
import { IoCheckmarkCircle } from 'react-icons/io5'
import person_one from "../../assets/person_one.jpg"
import person_two from "../../assets/person_two.jpg"
import person_three from "../../assets/person_three.jpg"
import { CommonBtn } from '../home/Financial'

const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    display: 'swap'
})
const Details = () => {
    const listText = ["Elevate Your Space with Our  Electrical Solutions", "Embracing Sophistication, Lighting Dreams Experience.", "Class and Reliability, Choose Us Transforming Spaces.", "Classy Electrical Design Excellence Transcends.", "Trends the Epitome of Class in Every Circuit Ageless.", "Craftsmanship for the Classy Clientele A Symphony."]
    return (
        <section className={`${outfit.className} py-[138px]`}>
            <div className="container">
                <div className='grid grid-cols-[1008px_1fr] gap-[95px]'>
                    <div>
                        <h2 className='text-[40px] leading-[52px] font-semibold pb-10'>The financial advisors that you can trust :</h2>
                        <div className='w-full h-[516px] pb-[70px] rounded-[30px] overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={blog_banner} alt='image' />
                        </div>
                        <h4 className='text-[#181818] text-[25px] leading-[33px] font-medium pb-[26px]'>Where Miracles Happen A Place of Inspiration Discover</h4>
                        <p className='text-[#707070] text-base leading-7 font-medium pb-[45px]'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed posu nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Aliquam semper libero ut lectus.</p>
                        <h4 className='text-[#181818] text-[25px] leading-[33px] font-medium pb-[26px]'>Discover a Place Where You’re Truly Seen Loved.</h4>
                        <p className='text-[#707070] text-base leading-7 font-medium pb-[52px]'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                        <div className='grid grid-cols-[536px_410px] items-center gap-[46px] pb-[82px]'>
                            <div className='w-full h-full rounded-[30px] overflow-hidden'>
                                <Image className='w-full h-full object-cover' src={blog_banner} alt='image' />
                            </div>
                            <ul className='flex flex-col gap-y-[30px]'>
                                {
                                    listText.map((listText, index) => {
                                        return <ListItem key={index} text={listText} />
                                    })
                                }
                            </ul>
                        </div>
                        <div className='grid grid-cols-[568px_1fr] gap-[48px] items-center'>
                            <div>
                                <h5 className='text-[25px] leading-[33px] font-medium pb-8'>Where Love Is Our Mission Hope Never</h5>
                                <p className='text-[#707070] text-base leading-7'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesqu sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                            </div>
                            <div className='w-full h-full rounded-[30px] overflow-hidden'>
                                <Image src={blog_banner} alt='image' />
                            </div>
                        </div>
                        <h5 className='text-[25px] leading-[33px] font-medium pb-[23px]'>Matter Where You’ve Been Home for the Heart</h5>
                        <p className='text-[#707070] text-base leading-7'>Aliquam suscipit, erat vel pharetra tempus, enim sem pellentesque est, dapibus efficitur lacus ipsum porttitor augue. Nullam sit amet vehicula ex. Vivamus ac enim eu lacus ornare sollicitudin. Integer lacus dui, gravida sit amet pellentesque sed, posuere nec eros. Pellentesque mattis viverra erat, at lacinia elit. Quisque convallis pharetra metus finibus volutpat.</p>
                        <div className='py-8 px-[45px] bg-[#F5F5F5]'>
                            <p className='text-black text-base leading-7'>“ Fashion encompasses clothing, accessories, and even behaviours, reflecting culture and individuality. Fashion evolves continuously, driven by designers, influencers, and changing norms. It has the power to convey identity, status, and creativity. Whether classic or avant-garde, fashion allows individuals to make statements and connect.”</p>
                            <p className='text-black text-base leading-6 pt-[15px] text-end'>- Emma White, Los Angles, CA</p>
                        </div>
                        <p className='text-[#707070] text-base leading-7 py-[52px]'>Vivamus mollis gravida consectetur. Vestibulum vel nibh pretium, fringilla quam ac, pretium sem. Vestibulum suscipit blandit pharetra. Aliquam suscipit, urna sit amet iaculis dictum, ligula erat ornare enim, et imperdiet massa sem vitae tortor.</p>
                        <div className='border-y border-b-[#A8A8A8] py-[53px]'>
                            <h4 className='text-[25px] leading-[33px] text-[#222222] pb-[54px] font-medium'>Comments</h4>
                            <div className='flex flex-col gap-[60px]'>
                                <Comments image={person_one} text={"Joel Barbara"} des={"Aenean auctor cursus tincidunt. Maecenas congue velit turpis, ut lacinia tellus hendrerit eget. Sed fringilla sapien sed quam blandit, eu pellentesque risus maximus. Nunc et elementum do Quisque vitae turpis erat. Pellentesque lobortis."} />
                                <div className='max-w-[762px] ml-[187px]'>
                                    <Comments image={person_two} text={"Kimberly Leo"} des={"Vestibulum tincidunt maximus ipsum eu bibendum. Suspendisse urerat, tincidunt nec dui faucibus, congue condimentum nulla."} />
                                </div>
                                <Comments image={person_three} text={"Kimberly Leo"} des={"Vestibulum tincidunt maximus ipsum eu bibendum. Suspendisse urerat, tincidunt nec dui faucibus, congue condimentum nulla."} />
                            </div>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className='py-[55px] px-[60px] rounded-[30px] mt-[60px] bg-[#F2F0E9]'>
                            <h5 className='text-[#222222] text-[25px] leading-[33px] font-medium pb-[14px]'>Leave A Reply</h5>
                            <p className='text-[#222222] text-base leading-7 pb-[30px]'>Your email address will not be published. Required fields are marked *</p>
                            <div>
                                <div className=' grid grid-cols-2 items-center gap-[10px]'>
                                    <input className='w-full py-[18px] px-[30px] outline-0 focus:border focus:border-black rounded-[10px] bg-[#FFFFFF]' type="text" placeholder='Name' />
                                    <input className='w-full py-[18px] px-[30px] outline-0 focus:border focus:border-black rounded-[10px] bg-[#FFFFFF]' type="text" placeholder='Address' />
                                    <input className='w-full py-[18px] px-[30px] outline-0 focus:border focus:border-black rounded-[10px] bg-[#FFFFFF]' type="number" placeholder='Phone Number' />
                                    <input className='w-full py-[18px] px-[30px] outline-0 focus:border focus:border-black rounded-[10px] bg-[#FFFFFF]' type="email" placeholder='E-mail Id' />
                                </div>
                                <input type="text" className='mt-[10px] mb-[20px] px-[30px] w-full h-[194px] outline-0 focus:border focus:border-black rounded-[10px] bg-[#FFFFFF]' />
                                <CommonBtn text={"send message"} bg='#0A2B33' textColor='white' />
                            </div>
                        </form>
                    </div>
                    <aside></aside>
                </div>
            </div>
        </section>
    )
}
const ListItem = ({ text }) => {
    return (
        <li className='flex items-center gap-3'>
            <IoCheckmarkCircle />
            <span className='text-[#3C3C3C] text-base leading-[22px]'>{text}</span>
        </li>
    )
}
const Comments = ({ image, text, des }) => {
    return (
        <div className='grid grid-cols-[155px_1fr] gap-[50px] items-center'>
            <div className='w-full h-[155px] rounded-[15px] overflow-hidden'>
                <Image className='w-full h-full object-cover' src={image} alt='image' />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[#3D3D3D] text-[12px] leading-2 font-medium'>March 2025</p>
                <p className='text-[#222222] text-[20px] leading-[33px] font-medium '>{text}</p>
                <p className='text-base leading-7 text-[#707070]'>{des}</p>
            </div>
        </div>
    )
}
export default Details