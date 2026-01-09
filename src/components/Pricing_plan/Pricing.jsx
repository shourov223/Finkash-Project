import React from 'react'
import { CommonDesign } from '../home/OurClients'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import { CommonBtn } from '../home/Financial'

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const Pricing = () => {
    const pricingDetails = [
        {
            plans: "Personal Plan",
            price: "20",
            details: [
                "Personal Finance Consultation",
                "Basic Budget Planning",
                "Monthly Email Support",
                "Everything in Basic",
                "Tax Filing Assistance",
                "Investment Portfolio Review",
                "Quarterly Financial Report"
            ]
        },
        {
            plans: "Premium Plan",
            price: "30",
            details: [
                "Personal Finance Consultation",
                "Basic Budget Planning",
                "Monthly Email Support",
                "Everything in Basic",
                "Tax Filing Assistance",
                "Investment Portfolio Review",
                "Quarterly Financial Report"
            ]
        },
        {
            plans: "Standard Plan",
            price: "35",
            details: [
                "Personal Finance Consultation",
                "Basic Budget Planning",
                "Monthly Email Support",
                "Everything in Basic",
                "Tax Filing Assistance",
                "Investment Portfolio Review",
                "Quarterly Financial Report"
            ]
        },
    ]
    return (
        <section className={`py-[80px] md:py-[120px] lg:py-[150px] ${outfit.className}`}>
            <div className="container">
                <div className='text-center pb-10 md:pb-16 lg:pb-20 max-w-[790px] mx-auto'>
                    <CommonDesign text={"Pricing plan"} />
                    <h1 className='text-[#00294B] text-[28px] md:text-[35px] lg:text-[40px] leading-[36px] md:leading-[45px] lg:leading-[52px] font-semibold pt-[15px] pb-[11px] px-4'>Affordable Pricing for Everyone</h1>
                    <p className='text-[#4D4D4D] text-sm md:text-base leading-6 md:leading-7 px-4'>May not be the most welcoming of banners, and yet if you are a wash customer you are one of the privileged and included. This wonderful space of washing, drying in of tanning and car cleaning Maecenas.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] lg:gap-[50px] items-center'>
                    {
                        pricingDetails.map((item, index) => {
                            return <Pricing_cart pricingDetails={pricingDetails} key={index} planName={item.plans} price={item.price} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const Pricing_cart = ({ planName, price, pricingDetails }) => {
    return (
        <div className='max-w-[438px] mx-auto w-full relative transition-all group duration-400'>
            <div className='w-full h-[140px] md:h-[160px] lg:h-[175px] bg-[#041C28] group-hover:bg-[#E5FF5E] px-[20px] md:px-[25px] lg:px-[30px]'>
                <h2 className='text-white text-[20px] md:text-[23px] lg:text-[25px] leading-[18px] font-semibold py-[60px] md:py-[70px] lg:py-[75px] group-hover:text-[#041C28]'>{planName}</h2>
            </div>
            <div className='size-[130px] md:size-[145px] lg:size-[161px] rounded-full bg-[#07C29C] absolute top-[30px] md:top-[36px] lg:top-[42px] right-[25px] md:right-[31px] lg:right-[37px]'></div>
            <div className='bg-[#F5F5F5] group-hover:bg-[#041C28] px-[30px] md:px-[40px] lg:px-[53px]'>
                <p className='font-bold text-[#102939] group-hover:text-white text-center pb-[15px] border-b border-b-[#102939] group-hover:border-b-white'><span className='text-[45px] md:text-[52px] lg:text-[60px]'>${price}</span>/ per Month</p>
                <ul className='py-[30px] md:py-[37px] lg:py-[45px]'>
                    {
                        pricingDetails[0].details.map((item, index) => {
                            return <ListItem key={index} text={item} />
                        })
                    }
                </ul>
                <div className='pb-8 md:pb-9 lg:pb-10 flex justify-center mx-auto'>
                    <CommonBtn text={"Choose Your Plan"} />
                </div>
            </div>
        </div>
    )
}
const ListItem = ({ text }) => {
    return (
        <li className='flex items-center gap-[15px] md:gap-[18px] lg:gap-[20px]'>
            <Image width={22} height={22} src={"/check.svg"} alt='icons' className='w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]' />
            <span className='text-[15px] md:text-[16px] lg:text-[17px] leading-8 md:leading-9 lg:leading-10 group-hover:text-white'>{text}</span>
        </li>
    )
}
export default Pricing