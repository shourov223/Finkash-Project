"use client"
import Image from "next/image"
import customer_support from "../../assets/customer_support.jpg"
import { Outfit } from "next/font/google"
import { CommonBtn } from "../home/Financial"
import { IoLogoInstagram } from "react-icons/io"
import { FaFacebookF, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6"

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const ContactDetails = () => {
    const socialIcons = [<IoLogoInstagram />, <FaFacebookF />, <FaXTwitter />, <FaYoutube />, <FaPinterestP />]
    return (
        <section className={`py-[150px] ${outfit.className}`}>
            <div className="container">
                <div className="grid grid-cols-[413px_1fr_300px] items-center gap-10 justify-between">
                    <div className="w-full h-[524px] rounded-[20px] overflow-hidden">
                        <Image src={customer_support} alt="image" />
                    </div>
                    <div>
                        <h2 className="text-[#041C28] text-[40px] leading-[52px] font-semibold pb-1">We're Always Here to Assist</h2>
                        <p className="text-base leading-7 text-black/70 pb-9">Leave Everyone Speechless with Our Jewelry the Spotlight with Glamorous Jewelry.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-[15px] pb-[15px]">
                                <input className="w-full py-4 px-[35px] border border-black rounded-[10px]" placeholder="Your Name" type="text" />
                                <input className="w-full py-4 px-[35px] border border-black rounded-[10px]" placeholder="Mobile Number" type="number" />
                            </div>
                            <input className="mb-[15px] w-full py-4 px-[35px] border border-black rounded-[10px]" placeholder="Your Email Address" type="email" />
                            <input className="w-full py-4 px-[35px] border border-black rounded-[10px]" placeholder="Additional Message" type="text" />
                            <div className="flex items-center gap-3 justify-between pt-[33px]">
                                <CommonBtn text={"Send Message"} bg="#1C282F" textColor="white" />
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" id="checkBox" />
                                    <label htmlFor="checkBox" className="text-[12px] leading-7 select-none">I agree with the terms & conditions</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className="text-[#041C28] text-[20px] leading-3 font-semibold pb-[18px]">Customer Support</h2>
                        <p className="text-base text-black/70 leading-[30px] font-medium pb-[48px]">+1800 396 756  |    support@finkash.com</p>
                        <p className="text-[#041C28] text-[20px] leading-3 font-semibold pb-[21px]">Social Media</p>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            {
                                socialIcons.map((icon, index) => {
                                    return <SocialDesign key={index} design={icon} />
                                })
                            }
                        </div>
                        <p className="text-[#041C28] text-[20px] leading-3 font-semibold pt-[49px] pb-[15px]">Opening Hours</p>
                        <p className="text-[#2C2C2CB2] text-base leading-[30px] font-medium">Monday to Friday - 09:00 to 21:00</p>
                        <p className="text-[#2C2C2CB2] text-base leading-[30px] font-medium">Saturday & Sunday - 12:00 to 20:00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SocialDesign = ({ design }) => {
    return (
        <div className="size-10 rounded-full border border-[#2C2C2C26]/80 grid place-items-center">
            {design}
        </div>
    )
}
export default ContactDetails