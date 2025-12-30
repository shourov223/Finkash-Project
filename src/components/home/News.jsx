"use client"
import { Outfit } from "next/font/google"
import { CommonDesign } from "./OurClients"
import person_one from "../../assets/person_one.jpg"
import person_two from "../../assets/person_two.jpg"
import person_three from "../../assets/person_three.jpg"
import person_four from "../../assets/person_four.jpg"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})
const outfit3 = Outfit({
    weight: "500"
})

const News = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="py-20 md:py-37.5">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-3 pb-6 md:pb-10">
                    <div>
                        <CommonDesign text={"Latest news & Blogs"} />
                        <h4 className={`text-[#031925] text-2xl md:text-[40px] leading-8 md:leading-13 font-semibold pt-4 ${outfit.className}`}>Review The Facts Financial Is The Best</h4>
                    </div>
                    <p className={`max-w-full md:max-w-136.5 text-[#424242] text-sm md:text-base leading-6 md:leading-7 ${outfit2.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem. </p>
                </div>
                <div>
                    <Slider {...settings}>
                        <NewsCard img={person_one} title={"Professional financial advisers for your needs Protect your future"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges, and skyscrapers."} />
                        <NewsCard img={person_two} title={"Financial freedom made attainable Life is better with great"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges, and skyscrapers."} />
                        <NewsCard img={person_three} title={"Professional financial advisers for your needs Protect your future"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges, and skyscrapers."} />
                        <NewsCard img={person_four} title={"Financial freedom made attainable Life is better with great"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges, and skyscrapers."} />
                    </Slider>
                </div>
            </div>
        </section>
    )
}

const NewsCard = ({ img, title, des }) => {
    return (
        <div className="h-auto md:h-[635px] grid grid-cols-1 xl:grid-cols-[442px_324px] items-center">
            <div className="h-[300px] md:h-[635px] w-full">
                <Image className="w-full h-full object-cover" src={img} alt="image" />
            </div>
            <div className="pt-8 md:pt-17.75 pb-10 md:pb-23.5 bg-[#F6F6F6] px-5 md:px-[30px] h-full">
                <h5 className={`text-[#031925] text-xl md:text-[25px] font-medium leading-7 md:leading-8.25 pb-4 md:pb-6 ${outfit3.className}`}>{title}</h5>
                <p className={`text-[#031925] text-sm md:text-base leading-6 md:leading-7 pb-8 md:pb-25.5`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh ornare.From residential homes and commercial buildings to roads, bridges, and skyscrapers.</p>
                <button className="rounded-[50px] flex items-center gap-3 md:gap-4.25 cursor-pointer py-1.5 md:py-1.75 pr-1.5 md:pr-1.75 pl-4 md:pl-5.25 bg-linear-to-l from-[#021623] via-[#195353] to-[#021623] transition-all duration-150">
                    <p className={`text-white font-semibold text-sm md:text-base leading-3 text-nowrap ${outfit.className}`}>read more</p>
                    <div className="size-7 md:size-8.75 rounded-full grid place-items-center bg-white">
                        <MdKeyboardArrowRight className="text-[#0A2B33]" />
                    </div>
                </button>
            </div>
        </div>
    )
}
export default News