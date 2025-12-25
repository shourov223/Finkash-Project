"use client"
import { Outfit } from "next/font/google"
import extend from "../../assets/extend.svg"
import katharinip from "../../assets/katharinip.svg"
import rawilly from "../../assets/rawilly.svg"
import galiche from "../../assets/galiche.svg"
import rouge from "../../assets/rouge.svg"
import meximo from "../../assets/meximo.svg"
import Slider from "react-slick"
import Image from "next/image"
import { useEffect, useState } from "react"


const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "600"
})
const outfit3 = Outfit({
    weight: "400"
})
const OurClients = () => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1)
        }, 200)
    }, [time])
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: time,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    const logos = [extend, katharinip, rawilly, galiche, rouge, meximo]
    return (
        <section className="px-4 sm:px-6 lg:px-0">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-2 pb-16 sm:pb-24 lg:pb-32.25">
                    <div>
                        <span className={`text-[12px] leading-2 font-medium text-black text-nowrap rounded-full py-2 px-4.5 bg-[#E5FF5E] uppercase ${outfit.className}`}>our clients</span>
                        <h2 className={`text-[28px] sm:text-[32px] lg:text-[40px] leading-tight lg:leading-13 font-semibold pt-2.5 ${outfit2.className}`}>trusted by our clients</h2>
                    </div>
                    <p className={`text-[14px] sm:text-base leading-6 sm:leading-7 max-w-full lg:max-w-155.25 ${outfit3.className}`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem. Praesent viverra et metus.</p>
                </div>
                <Slider {...settings}>
                    {
                        logos.map((item, index) => {
                            return (
                                <div key={index} className="px-2 sm:px-3">
                                    <Image src={item} alt="logos" className="w-auto h-auto max-w-full" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default OurClients