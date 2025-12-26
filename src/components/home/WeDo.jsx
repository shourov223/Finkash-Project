"use client"
import { CommonDesign } from './OurClients'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outfit } from 'next/font/google';
import Subtract from "../../assets/Subtract.png"
import Image from 'next/image';
import section2_image from "../../assets/section2_image.jpg"

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "700"
})
const outfit3 = Outfit({
    weight: "400"
})

const WeDo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow,
        // prevArrow: 
    };
    return (
        <section className='background_image mt-25 py-5'>
            <div className="container">
                <div className='flex items-center justify-between gap-17'>
                    <div>
                        <CommonDesign text={"what we do"} />
                        <h2 className={`text-[40px] leading-13 font-semibold text-black pt-2.5 pb-18.5`}>Building a good financial standing for smart futures</h2>
                        <div>
                            <Slider className='w-175' {...settings}>
                                <div>
                                    <ul>
                                        <li className={`text-[23px] leading-7 text-black max-w-130.75 pb-14.5 ${outfit.className}`}>Where Financial Secrets Become Opportunity Tangible Success</li>
                                    </ul>
                                    <div className='flex items-center gap-23 pb-8.5'>
                                        <div>
                                            <div className='relative w-27.75 text-center'>
                                                <Image src={Subtract} alt='image' />
                                                <div className='size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] translate-[-50%]'>
                                                    <span className={`text-[25px] leading-8 font-bold ${outfit2.className}`}>92%</span>
                                                </div>
                                            </div>
                                            <p className={`text-base font-medium ${outfit.className}`}>Success Rate</p>
                                        </div>
                                        <div>
                                            <div className='relative w-27.75 text-center'>
                                                <Image src={Subtract} alt='image' />
                                                <div className='size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] translate-[-50%]'>
                                                    <span className={`text-[25px] leading-8 font-bold ${outfit2.className}`}>80%</span>
                                                </div>
                                            </div>
                                            <p className={`text-base font-medium ${outfit.className}`}>Business Growth</p>
                                        </div>
                                    </div>
                                    <p className={`text-base text-[#424242] leading-7 ${outfit3.className}`}>Maecenas fringilla quis nunc sit amet lobortis. Sed tincidunt maximus magna. Fusce convallis, libero tempor efficitur pharetra, purus urna rhoncus dolor, vitae gravida orci purus Cras egestas eleifend erat, id hendrerit nunc aliquam Donec.</p>
                                </div>
                                <div>
                                    <ul>
                                        <li className={`text-[23px] leading-7 text-black max-w-130.75 pb-14.5 ${outfit.className}`}>Where Financial Secrets Become Opportunity Tangible Success</li>
                                    </ul>
                                    <div className='flex items-center gap-23 pb-8.5'>
                                        <div>
                                            <div className='relative w-27.75 text-center'>
                                                <Image src={Subtract} alt='image' />
                                                <div className='size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] translate-[-50%]'>
                                                    <span className={`text-[25px] leading-8 font-bold ${outfit2.className}`}>92%</span>
                                                </div>
                                            </div>
                                            <p className={`text-base font-medium ${outfit.className}`}>Success Rate</p>
                                        </div>
                                        <div>
                                            <div className='relative w-27.75 text-center'>
                                                <Image src={Subtract} alt='image' />
                                                <div className='size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] translate-[-50%]'>
                                                    <span className={`text-[25px] leading-8 font-bold ${outfit2.className}`}>80%</span>
                                                </div>
                                            </div>
                                            <p className={`text-base font-medium ${outfit.className}`}>Business Growth</p>
                                        </div>
                                    </div>
                                    <p className={`text-base text-[#424242] leading-7 ${outfit3.className}`}>Maecenas fringilla quis nunc sit amet lobortis. Sed tincidunt maximus magna. Fusce convallis, libero tempor efficitur pharetra, purus urna rhoncus dolor, vitae gravida orci purus Cras egestas eleifend erat, id hendrerit nunc aliquam Donec.</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='w-3xl h-184.75 rounded-[30px] overflow-hidden'>
                        <Image className='w-full h-full' src={section2_image} alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeDo