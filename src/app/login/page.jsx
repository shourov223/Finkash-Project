"use client"
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'
import customer_support from "../../assets/customer_support.jpg"
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import { useState } from 'react'
import { emailRejax } from '@/components/blogDetails/Details'
import { toast, Toaster } from 'sonner'

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const page = () => {
    const [email, setEmail] = useState("")
    const handleEmail = () => {
        if (!emailRejax.test(email)) {
            toast.success("login sussess")
        } else {
            toast.warning("Please Input a valid Email address")
        }
        setEmail("")
    }
    return (
        <>
            <ServiceDetailsBanner pageName={"Login"} title={"Login"} bannerImg='loginBannerImage' />
            <section className={`py-[80px] md:py-[100px] lg:py-[150px] ${outfit.className}`}>
                <div className="container px-4">
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[20px] lg:gap-[20px]'>
                        <div className='w-full h-[400px] sm:h-[600px] lg:h-[1049px] rounded-[20px] lg:rounded-[30px] overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={customer_support} alt='image' />
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className='bg-[#EFEFEF] rounded-[20px] pt-[40px] sm:pt-[60px] lg:pt-[73px] pb-[60px] sm:pb-[80px] lg:pb-[109px] px-[20px] sm:px-[35px] lg:px-[51px] h-auto lg:h-[1049px]'>
                            <h3 className='text-[#0C0C0C] text-[28px] sm:text-[35px] lg:text-[40px] text-center leading-[36px] sm:leading-[45px] lg:leading-[52px] font-semibold pb-[11px]'>Create Your Account</h3>
                            <p className='text-[#0C0C0C] text-center text-sm sm:text-base leading-6 sm:leading-7 pb-[25px] sm:pb-[35px]'>Let's get started with your 30days free trial</p>
                            <button className='w-full py-[15px] sm:py-[19px] px-[20px] sm:px-[40px] rounded-full cursor-pointer bg-white mb-6 sm:mb-8 lg:mb-10'>
                                <div className='flex items-center justify-center gap-[9px]'>
                                    <Image width={30} height={30} className='sm:w-[35px] sm:h-[35px]' src={"/google.svg"} alt='icons' />
                                    <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-[#0C0C0C] leading-3 font-semibold text-nowrap'>Login With Google</p>
                                </div>
                            </button>
                            <div className='flex items-center justify-between gap-x-[10px] sm:gap-x-[17px]'>
                                <span className='w-full border border-[#222222]'></span>
                                <p className='text-[#222222] text-sm sm:text-base font-semibold'>or</p>
                                <span className='w-full border border-[#222222]'></span>
                            </div>
                            <div className='flex flex-col gap-y-[15px] mt-6 sm:mt-8 lg:mt-10'>
                                <input className='w-full py-[20px] sm:py-[25px] lg:py-[30px] px-[25px] sm:px-[30px] lg:px-[38px] rounded-full bg-white placeholder:text-[#9F9F9F] placeholder:font-semibold placeholder:leading-3 text-sm sm:text-base' type="email" placeholder='Email Id' />
                                <input className='w-full py-[20px] sm:py-[25px] lg:py-[30px] px-[25px] sm:px-[30px] lg:px-[38px] rounded-full bg-white placeholder:text-[#9F9F9F] placeholder:font-semibold placeholder:leading-3 text-sm sm:text-base' type="password" placeholder='Password' />
                            </div>
                            <p className='text-sm sm:text-base leading-3 text-[#222222] font-semibold pt-[17px] pb-[40px] sm:pb-[50px] lg:pb-[60px] text-center cursor-pointer'>forgot password?</p>
                            <button onClick={handleEmail} className='w-full cursor-pointer text-[white] text-[18px] sm:text-[22px] lg:text-[25px] leading-[26px] sm:leading-[30px] lg:leading-[33px] font-medium px-[20px] sm:px-[40px] py-3 sm:py-4 rounded-full bg-linear-to-t from-[#021623] via-[#195353] to-[#021623]'>
                                Login
                            </button>
                            <div className='flex items-center justify-between gap-x-[10px] sm:gap-x-[17px] pt-[25px] sm:pt-[30px] lg:pt-[36px] pb-6 sm:pb-8 lg:pb-10'>
                                <span className='w-full border border-[#222222]'></span>
                                <p className='text-[#222222] text-sm sm:text-base font-semibold'>or</p>
                                <span className='w-full border border-[#222222]'></span>
                            </div>
                            <button className='w-full py-[15px] sm:py-[19px] px-[20px] sm:px-[40px] rounded-full cursor-pointer bg-white mb-6 sm:mb-8 lg:mb-10'>
                                <div className='flex items-center justify-center gap-[9px]'>
                                    <Image width={30} height={30} className='sm:w-[35px] sm:h-[35px]' src={"/facebook.svg"} alt='icons' />
                                    <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-[#0C0C0C] leading-3 font-semibold text-nowrap'>Login With Facebook</p>
                                </div>
                            </button>
                            <p className='text-[#0A2A33] text-[16px] sm:text-[20px] lg:text-[25px] leading-[24px] sm:leading-[28px] lg:leading-[33px] font-medium text-center'>Don't have an account ? create an account</p>
                        </form>
                    </div>
                </div>
                <Toaster position='top-right' />
            </section>
        </>
    )
}

export default page