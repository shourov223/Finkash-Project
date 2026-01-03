import React from 'react'
import { CommonHeading } from '../service/SocialFinancial'
import service_one from "../../assets/service_one.jpg"
import service_two from "../../assets/service_two.jpg"
import service_three from "../../assets/service_three.jpg"
import service_four from "../../assets/service_four.jpg"
import service_five from "../../assets/service_five.jpg"
import service_six from "../../assets/service_six.jpg"
import service_seven from "../../assets/service_seven.jpg"
import service_eight from "../../assets/service_eight.jpg"
import service_nine from "../../assets/service_nine.jpg"
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import { CommonBtn } from '../home/Financial'

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const AllBlogs = () => {
    const blogDate = "22.DEC.2023, By Rahmi"
    const blogInfo = [
        {
            blogDate,
            image: service_one,
            title: "Accessorize Your Life with Fierce Charisma",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_two,
            title: "Accessorize Your Life with Fierce Charisma",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_three,
            title: "Building a good financial standing",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_four,
            title: "Be smart when it comes to finances",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_five,
            title: "The epitome of financial advisors future",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_six,
            title: "Financial freedom made attainable great",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_seven,
            title: "Professional financial advisers needs",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_eight,
            title: "Providing high-quality financial advice",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
        {
            blogDate,
            image: service_nine,
            title: "Physical Treasuries Are What We Do",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
        },
    ]
    return (
        <section className={`${outfit.className} pt-[80px] md:pt-[100px] lg:pt-[150px] px-4 sm:px-6 lg:px-0`}>
            <div className="container mx-auto">
                <CommonHeading showBtn={false} designText={"News Updates"} title={"recent News & Updates"} des={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its  layout. The point of using Lorem Ipsum is that it has a more less normal"} />
                <div className='mt-[30px] sm:mt-[40px] lg:mt-[53px] border-t-2 border-t-[#060606] pt-10 sm:pt-14 lg:pt-20 pb-[80px] sm:pb-[100px] lg:pb-[150px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] lg:gap-x-[47px] gap-y-[40px] sm:gap-y-[60px] lg:gap-y-[80px]'>
                        {
                            blogInfo.map((info, index) => {
                                return <BlogCard key={index} image={info.image} title={info.title} date={info.blogDate} des={info.des} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
const BlogCard = ({ image, title, des, date }) => {
    return (
        <div className='max-w-[513px] w-full mx-auto'>
            <div className='rounded-[20px] overflow-hidden w-full h-[250px] sm:h-[300px] lg:h-[342px]'>
                <Image className='w-full h-full object-cover' src={image} alt='image' />
            </div>
            <div className='pt-[20px] sm:pt-[28px] lg:pt-[35px]'>
                <p className='text-[#060606] text-[12px] font-medium leading-2 pb-[10px]'>{date}</p>
                <h4 className='text-[20px] sm:text-[22px] lg:text-[23px] leading-[28px] sm:leading-[31px] lg:leading-[33px] text-[#1C282F] font-medium pb-1'>{title}</h4>
                <p className='text-[14px] sm:text-[15px] lg:text-base text-[#585858] leading-6 sm:leading-[26px] lg:leading-7 pb-[24px] sm:pb-[30px] lg:pb-[34px]'>{des}</p>
                <CommonBtn text={"read more"} bg='#1C282F' textColor='#FFFFFF' />
            </div>
        </div>
    )
}
export default AllBlogs