"use client"
import Image from "next/image"
import customer_support from "../../assets/customer_support.jpg"
import { Outfit } from "next/font/google"
import { CommonBtn } from "../home/Financial"
import { IoLogoInstagram } from "react-icons/io"
import { FaFacebookF, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { useState } from "react"
import { emailRejax, phnNumberRejax } from "../blogDetails/Details"
import { toast, Toaster } from "sonner"
import payment from "../../assets/payment.svg"
import branches from "../../assets/branches.svg"
import offers from "../../assets/offers.svg"
import shipping from "../../assets/shipping.svg"

export const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const ContactDetails = () => {
    const socialIcons = [<IoLogoInstagram />, <FaFacebookF />, <FaXTwitter />, <FaYoutube />, <FaPinterestP />]
    const [phnNUmber, setPhnNumber] = useState(0);
    const [email, setEmail] = useState("")
    const handleButton = () => {
        if (emailRejax.test(email) && phnNumberRejax.test(phnNUmber)) {
            toast.success("Massege sent successfull")
            setEmail(null)
            setPhnNumber(null)
        } else {
            toast.warning("Please input a valid email address")
        }
    }
    return (
        <section className={`py-[80px] md:py-[100px] lg:py-[150px] ${outfit.className}`}>
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl::grid-cols-[413px_1fr_300px] xl:grid-cols-[413px_1fr_300px] items-center gap-6 md:gap-8 lg:gap-10 justify-between">
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-[524px] rounded-[20px] overflow-hidden">
                        <Image src={customer_support} alt="image" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-[#041C28] text-[28px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] lg:leading-[52px] font-semibold pb-1">We're Always Here to Assist</h2>
                        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-black/70 pb-6 sm:pb-9">Leave Everyone Speechless with Our Jewelry the Spotlight with Glamorous Jewelry.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] pb-[15px]">
                                <input className="w-full py-3 sm:py-4 px-[20px] sm:px-[35px] border border-black rounded-[10px] text-sm sm:text-base" placeholder="Your Name" type="text" />
                                <input onChange={(e) => setPhnNumber(e.target.value)} className="w-full py-3 sm:py-4 px-[20px] sm:px-[35px] border border-black rounded-[10px] text-sm sm:text-base" placeholder="Mobile Number" type="number" />
                            </div>
                            <input onChange={(e) => setEmail(e.target.value)} className="mb-[15px] w-full py-3 sm:py-4 px-[20px] sm:px-[35px] border border-black rounded-[10px] text-sm sm:text-base" placeholder="Your Email Address" type="email" />
                            <input className="w-full py-3 sm:py-4 px-[20px] sm:px-[35px] border border-black rounded-[10px] text-sm sm:text-base" placeholder="Additional Message" type="text" />
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 justify-between pt-[25px] sm:pt-[33px]">
                                <CommonBtn text={"Send Message"} bg="#1C282F" textColor="white" event={handleButton} />
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" id="checkBox" />
                                    <label htmlFor="checkBox" className="text-[12px] leading-5 sm:leading-7 select-none">I agree with the terms & conditions</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <h2 className="text-[#041C28] text-[18px] sm:text-[20px] leading-3 font-semibold pb-[18px]">Customer Support</h2>
                        <p className="text-sm sm:text-base text-black/70 leading-[26px] sm:leading-[30px] font-medium pb-[30px] sm:pb-[48px]">+1800 396 756  |    support@finkash.com</p>
                        <p className="text-[#041C28] text-[18px] sm:text-[20px] leading-3 font-semibold pb-[21px]">Social Media</p>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            {
                                socialIcons.map((icon, index) => {
                                    return <SocialDesign key={index} design={icon} />
                                })
                            }
                        </div>
                        <p className="text-[#041C28] text-[18px] sm:text-[20px] leading-3 font-semibold pt-[35px] sm:pt-[49px] pb-[15px]">Opening Hours</p>
                        <p className="text-[#2C2C2CB2] text-sm sm:text-base leading-[26px] sm:leading-[30px] font-medium">Monday to Friday - 09:00 to 21:00</p>
                        <p className="text-[#2C2C2CB2] text-sm sm:text-base leading-[26px] sm:leading-[30px] font-medium">Saturday & Sunday - 12:00 to 20:00</p>
                    </div>
                </div>
                <div className="py-[60px] sm:py-[80px] lg:py-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 sm:gap-3">
                    <Card image={payment} title={"Secured payment"} des={"Vestibulum nulla tortor, eleifen odio Smiles Sparked by Our Electrical Expertise."} />
                    <Card image={branches} title={"Our Branches"} des={"Vestibulum nulla tortor, eleifen odio Smiles Sparked by Our Electrical Expertise."} />
                    <Card image={offers} title={"Limited time offers"} des={"Vestibulum nulla tortor, eleifen odio Smiles Sparked by Our Electrical Expertise."} />
                    <Card image={shipping} title={"Worldwide shipping"} des={"Vestibulum nulla tortor, eleifen odio Smiles Sparked by Our Electrical Expertise."} />
                </div>
                <div className="w-full h-[350px] sm:h-[450px] lg:h-[657px] rounded-[20px] overflow-hidden">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3957922948807!2d90.36679397613207!3d23.804520878633376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f2a4049aeb%3A0xcffebf50a8b322f!2sCreative%20IT%20Institute%2C%20Mirpur%20Campus!5e0!3m2!1sen!2sbd!4v1767897161196!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <Toaster position="top-right" />
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
const Card = ({ image, title, des }) => {
    return (
        <div className="pt-8 sm:pt-10 pb-[25px] sm:pb-[30px] px-[30px] sm:px-[40px] lg:px-[63px] border border-[#AAAAAA] rounded-[20px] bg-[#F9F9F9]">
            <div className="size-[60px] sm:size-[69px] mx-auto">
                <Image src={image} alt="image" />
            </div>
            <h4 className="text-[18px] sm:text-[20px] leading-[12px] font-semibold pt-[20px] pb-[17px] text-[#2C2C2C] text-center">{title}</h4>
            <p className="text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] font-medium text-[#505050] text-center">{des}</p>
        </div>
    )
}
export default ContactDetails