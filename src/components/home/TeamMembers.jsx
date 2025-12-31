import React from 'react'
import { CommonDesign } from './OurClients'
import { Outfit } from 'next/font/google'
import { CommonBtn } from './Financial'
import Image from 'next/image'
import person_one from "../../assets/person_one.jpg"
import person_two from "../../assets/person_two.jpg"
import person_three from "../../assets/person_three.jpg"
import person_four from "../../assets/person_four.jpg"
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { AiOutlineTwitter } from "react-icons/ai";

const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})
const outfit3 = Outfit({
    weight: "500"
})

const TeamMembers = () => {
    return (
        <section className='py-20 md:py-37.5 bg-[#F6F6F6]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-26.5 items-start justify-between'>
                    <div>
                        <CommonDesign text={"Team members"} />
                        <h3 className={`${outfit.className} text-black font-semibold text-2xl md:text-[40px] leading-8 md:leading-13 pt-3.5`}>Professional financial advisers</h3>
                    </div>
                    <p className={`text-[#424242] text-sm md:text-base leading-6 md:leading-7 ${outfit2.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem.</p>
                    <div className='w-full lg:w-auto'>
                        <CommonBtn text={"View All Team"} />
                    </div>
                </div>
                <div className='pt-12 md:pt-22.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 md:gap-10'>
                    <MemberCard img={person_one} text={"finkash advisers"} title={"Arnav Gillespie"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."} />
                    <MemberCard img={person_two} text={"finkash advisers"} title={"Edward Richardson"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."} />
                    <MemberCard img={person_three} text={"finkash advisers"} title={"Leslie Gibson"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."} />
                    <MemberCard img={person_four} text={"finkash advisers"} title={"Zak Thompson"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."} />
                </div>
            </div>
        </section>
    )
}

const MemberCard = ({ img, text, title, des }) => {
    const socialIcons = [<FaInstagram />, <FaFacebookF />, <FaYoutube />, <AiOutlineTwitter />]
    return (
        <div className="w-full mx-auto h-auto md:h-113.5 px-2.25 pt-2.25 pb-10 rounded-[30px] bg-white group relative transition-all duration-200 hover:border hover:border-black">
            <div className='w-full h-64 md:h-83 group-hover:h-full rounded-[30px] overflow-hidden'>
                <Image className='object-cover w-full h-full' src={img} alt='image' />
            </div>
            <div className='pt-6 md:pt-8.25 px-4 md:px-7 flex items-center justify-between gap-3 group-hover:hidden'>
                <div className='flex flex-col gap-2.5'>
                    <p className={`text-lg md:text-[20px] leading-4 font-medium ${outfit3.className}`}>{title}</p>
                    <p className={`text-[#3B3B3B] text-[12px] leading-2 font-medium ${outfit3.className}`}>{text}</p>
                </div>
                <button className='size-10 md:size-10.75 rounded-full bg-black grid place-items-center flex-shrink-0'>
                    <MdOutlineArrowOutward className='text-white' />
                </button>
            </div>
            <div className='text-center hidden group-hover:block group-hover:absolute group-hover:bottom-10 md:group-hover:bottom-13 group-hover:left-[50%] group-hover:translate-x-[-50%] group-hover:px-4'>
                <p className={`text-white text-lg md:text-[20px] leading-4 font-medium ${outfit3.className}`}>{title}</p>
                <p className={`pt-1.75 text-white font-medium text-[12px] leading-2 pb-3.25`}>{text}</p>
                <p className={`text-[10px] leading-4 text-white ${outfit2.className}`}>{des}</p>
                <div className='flex items-center justify-center gap-3 pt-7'>
                    {
                        socialIcons.map((item, index) => {
                            return (
                                <div key={index} className='size-5.5 bg-white grid place-items-center cursor-pointer'>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <button className='size-12 md:size-13.5 bg-[#E5FF5E] rounded-full grid place-items-center mx-auto mt-6.5'>
                    <MdOutlineArrowOutward className='text-black' />
                </button>
            </div>
        </div>
    )
}

export const socialIcons = [<FaInstagram />, <FaFacebookF />, <FaYoutube />, <AiOutlineTwitter />]
export default TeamMembers