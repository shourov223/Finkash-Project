"use client"
import { CommonDesign } from '../home/OurClients'
import britto from "../../assets/britto.svg"
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import Slider from 'react-slick'
import { IoIosArrowBack } from 'react-icons/io'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "700"
})
const outfit3 = Outfit({
    weight: "400"
})

const History = () => {
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
        <section className='py-[80px] md:py-[120px] lg:py-[150px] bg-linear-to-t from-[#021623] via-[#195353] to-[#021623] rounded-[20px] md:rounded-[25px] lg:rounded-[30px]'>
            <div className="container px-4 md:px-6 lg:px-8">
                <div className='grid grid-cols-1 lg:grid-cols-[544px_675px] gap-8 lg:gap-0 items-center justify-between pb-[60px] md:pb-[80px] lg:pb-[100px]'>
                    <div className='max-w-full lg:max-w-[544px]'>
                        <CommonDesign text={"Our History"} />
                        <h2 className={`text-white text-[28px] md:text-[34px] lg:text-[40px] leading-[38px] md:leading-[44px] lg:leading-[52px] pt-3 ${outfit.className}`}>The Most trusted accountants on the Planet</h2>
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[40px] lg:gap-[54px]'>
                        <div className='min-w-[80px] md:min-w-[100px] lg:min-w-[133px]'>
                            <Image src={britto} alt='image' className='w-full h-auto' />
                        </div>
                        <div>
                            <p className={`text-white text-[16px] md:text-[17px] lg:text-[18px] font-bold ${outfit2.className}`}>GETTING YOUR FINANCES RIGHT</p>
                            <p className={`text-white text-[14px] md:text-[15px] lg:text-base leading-6 md:leading-[26px] lg:leading-7 pt-[12px] md:pt-[14px] lg:pt-[15px] ${outfit3.className}`}>In hac habitasse platea dictumst. Etiam pretium, tortor nec placerat ultrices, urna sem ultricies sapien, a convallis sapien metus quis dui. Integer ac sagittis lorem. Etiam eget mollis quam.</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 md:px-8 lg:px-0'>
                    <Slider {...settings} className='relative'>
                        <div className="relative">
                            <div className="absolute top-4 md:top-5 lg:top-6 left-0 w-full h-0.5 bg-teal-400" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 lg:gap-8 relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2005</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec in verius massa, sed maxi lectus. Quisque mauriseet malesu vel consequat sit, aliquet et ex.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2007</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec ac aliquet neque in dictum leo. Aliquam dolor ercu, posuere nec consectetur eget.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2010</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Volutpat nec quam. Fusce laoreet curitos lacus ornare blandit sitting amet vel dia Nam mattis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2015</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Vestibulum mollis mi in lacus dign non maximus scelerisque. Cnotip tortor lobortis, pretium exev.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-4 md:top-5 lg:top-6 left-0 w-full h-0.5 bg-teal-400" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 lg:gap-8 relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2005</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec in verius massa, sed maxi lectus. Quisque mauriseet malesu vel consequat sit, aliquet et ex.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2007</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec ac aliquet neque in dictum leo. Aliquam dolor ercu, posuere nec consectetur eget.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2010</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Volutpat nec quam. Fusce laoreet curitos lacus ornare blandit sitting amet vel dia Nam mattis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2015</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Vestibulum mollis mi in lacus dign non maximus scelerisque. Cnotip tortor lobortis, pretium exev.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-4 md:top-5 lg:top-6 left-0 w-full h-0.5 bg-teal-400" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 lg:gap-8 relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2005</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec in verius massa, sed maxi lectus. Quisque mauriseet malesu vel consequat sit, aliquet et ex.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2007</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Donec ac aliquet neque in dictum leo. Aliquam dolor ercu, posuere nec consectetur eget.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2010</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Volutpat nec quam. Fusce laoreet curitos lacus ornare blandit sitting amet vel dia Nam mattis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative z-10">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-teal-400 rounded-full border-[3px] md:border-[3.5px] lg:border-4 border-gray-900" />
                                    </div>
                                    <div className="text-white text-xl md:text-[22px] lg:text-2xl font-bold mt-3 md:mt-3.5 lg:mt-4 mb-4 md:mb-5 lg:mb-6">2015</div>
                                    <div className="bg-teal-400 rounded-lg p-4 md:p-5 lg:p-6 w-full">
                                        <p className="text-gray-900 text-[13px] md:text-[13.5px] lg:text-sm leading-relaxed">
                                            Vestibulum mollis mi in lacus dign non maximus scelerisque. Cnotip tortor lobortis, pretium exev.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </section>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='cursor-pointer absolute top-[40px] md:top-[50px] lg:top-[60px] left-[-50px] md:left-[-60px] lg:left-[-70px] hidden sm:block'>
        <IoIosArrowBack className='text-white size-[35px] md:size-[42px] lg:size-[50px]' />
    </button>
}
const PrevArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className='rotate-180 cursor-pointer absolute top-[40px] md:top-[50px] lg:top-[60px] right-[-50px] md:right-[-60px] lg:right-[-70px] hidden sm:block'>
        <IoIosArrowBack className='text-white size-[35px] md:size-[42px] lg:size-[50px]' />
    </button>
}
export default History