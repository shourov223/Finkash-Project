"use client"
import { CommonDesign } from './OurClients'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outfit } from 'next/font/google';
import Subtract from "../../assets/Subtract.png"
import Image from 'next/image';
import section2_image from "../../assets/section2_image.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section className='background_image mt-10 lg:mt-25 py-5 md:py-10'>
            <div className="container px-4 md:px-6 lg:px-8">
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-17'>
                    <div className='w-full lg:w-auto'>
                        <CommonDesign text={"what we do"} />
                        <h2 className={`text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-snug lg:leading-13 font-semibold text-black pt-2.5 pb-8 md:pb-12 lg:pb-7.5`}>Building a good financial standing for smart futures</h2>

                        <Slider className='w-full lg:w-112.5 relative' {...settings}>
                            <div className='px-2 md:px-4'>
                                <ul>
                                    <li className={`text-lg md:text-xl lg:text-[23px] leading-6 md:leading-7 text-black max-w-full lg:max-w-130.75 pb-8 md:pb-12 lg:pb-5 ${outfit.className}`}>Where Financial Secrets Become Opportunity Tangible Success</li>
                                </ul>
                                <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-5 xl:gap-23 pb-6 md:pb-8 lg:pb-8.5'>
                                    <div className='text-center sm:text-left'>
                                        <div className='relative w-24 md:w-27.75 mx-auto sm:mx-0'>
                                            <Image src={Subtract} alt='image' />
                                            <div className='size-16 md:size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                                                <span className={`text-xl md:text-[25px] leading-6 md:leading-8 font-bold ${outfit2.className}`}>92%</span>
                                            </div>
                                        </div>
                                        <p className={`text-sm md:text-base font-medium mt-2 ${outfit.className}`}>Success Rate</p>
                                    </div>
                                    <div className='text-center sm:text-left'>
                                        <div className='relative w-24 md:w-27.75 mx-auto sm:mx-0'>
                                            <Image src={Subtract} alt='image' />
                                            <div className='size-16 md:size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                                                <span className={`text-xl md:text-[25px] leading-6 md:leading-8 font-bold ${outfit2.className}`}>80%</span>
                                            </div>
                                        </div>
                                        <p className={`text-sm md:text-base font-medium mt-2 ${outfit.className}`}>Business Growth</p>
                                    </div>
                                </div>
                                <p className={`text-sm md:text-base text-[#424242] leading-6 md:leading-7 ${outfit3.className}`}>Maecenas fringilla quis nunc sit amet lobortis. Sed tincidunt maximus magna. Fusce convallis, libero tempor efficitur pharetra, purus urna rhoncus dolor, vitae gravida orci purus Cras egestas eleifend erat, id hendrerit nunc aliquam Donec.</p>
                            </div>
                            <div className='px-2 md:px-4'>
                                <ul>
                                    <li className={`text-lg md:text-xl lg:text-[23px] leading-6 md:leading-7 text-black max-w-full lg:max-w-130.75 pb-8 md:pb-12 lg:pb-5 ${outfit.className}`}>Where Financial Secrets Become Opportunity Tangible Success</li>
                                </ul>
                                <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-5 xl:gap-23 pb-6 md:pb-8 lg:pb-8.5'>
                                    <div className='text-center sm:text-left'>
                                        <div className='relative w-24 md:w-27.75 mx-auto sm:mx-0'>
                                            <Image src={Subtract} alt='image' />
                                            <div className='size-16 md:size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                                                <span className={`text-xl md:text-[25px] leading-6 md:leading-8 font-bold ${outfit2.className}`}>92%</span>
                                            </div>
                                        </div>
                                        <p className={`text-sm md:text-base font-medium mt-2 ${outfit.className}`}>Success Rate</p>
                                    </div>
                                    <div className='text-center sm:text-left'>
                                        <div className='relative w-24 md:w-27.75 mx-auto sm:mx-0'>
                                            <Image src={Subtract} alt='image' />
                                            <div className='size-16 md:size-18.75 bg-[#F7F7F7] rounded-full grid place-items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                                                <span className={`text-xl md:text-[25px] leading-6 md:leading-8 font-bold ${outfit2.className}`}>80%</span>
                                            </div>
                                        </div>
                                        <p className={`text-sm md:text-base font-medium mt-2 ${outfit.className}`}>Business Growth</p>
                                    </div>
                                </div>
                                <p className={`text-sm md:text-base text-[#424242] leading-6 md:leading-7 ${outfit3.className}`}>Maecenas fringilla quis nunc sit amet lobortis. Sed tincidunt maximus magna. Fusce convallis, libero tempor efficitur pharetra, purus urna rhoncus dolor, vitae gravida orci purus Cras egestas eleifend erat, id hendrerit nunc aliquam Donec.</p>
                            </div>
                        </Slider>

                    </div>
                    <div className='w-full lg:w-3xl h-64 sm:h-96 md:h-125 lg:h-184.75 rounded-[20px] md:rounded-[30px] overflow-hidden'>
                        <Image className='w-full h-full object-cover' src={section2_image} alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='size-12 md:size-14 lg:size-16.75 hidden bg-[#191A14] rounded-full z-10 lg:grid place-items-center hover:bg-[#E5FF5E] group cursor-pointer absolute -bottom-16 md:-bottom-20 lg:-bottom-21.25 left-12 md:left-16 lg:left-21.25 transition-all duration-200'>
        <FaArrowRight className='text-white group-hover:text-black text-sm md:text-base' />
    </button>
}
const PrevArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='size-12 md:size-14 lg:size-16.75 hidden bg-[#191A14] rounded-full z-10 lg:grid place-items-center hover:bg-[#E5FF5E] group cursor-pointer absolute top-72 md:top-80 lg:top-143.5 xl:top-102.75 transition-all duration-200'>
        <FaArrowLeft className='text-white group-hover:text-black text-sm md:text-base' />
    </button>
}
export default WeDo