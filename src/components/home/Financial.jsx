import Image from "next/image"
import section2_image2 from "../../assets/section2_image2.jpg"
import { CommonDesign } from "./OurClients"
import { Outfit } from "next/font/google"
import { MdKeyboardArrowRight } from "react-icons/md"

const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})

const Financial = () => {
    const financial_text = ["Banking", "Insurance", "Mutual Funds", "Stock Market", "Audit Consulting", "Restructuring"]
    return (
        <section className="xl:pt-37.5 md:pt-20 pt-12">
            <div className="container">
                <div className="flex lg:flex-row flex-col items-center xl:gap-23.5 lg:gap-16 md:gap-10 gap-8">
                    <div className="xl:w-190 lg:w-1/2 md:w-full sm:w-full lg:h-143.5 md:h-96 sm:h-64 rounded-[30px] md:rounded-[20px] sm:rounded-[15px] overflow-hidden">
                        <Image className="w-full h-full object-cover" src={section2_image2} alt="image" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <CommonDesign text={"Types of Financial"} />
                        <h2 className={`font-semibold text-[40px] md:text-3xl sm:text-2xl leading-13 md:leading-tight sm:leading-tight pt-4.5 md:pt-3 sm:pt-2 pb-7.25 md:pb-5 sm:pb-4 ${outfit.className}`}>Building a good financial standing</h2>
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 items-center gap-x-6.5 gap-y-4 md:gap-x-4 md:gap-y-3 sm:gap-x-3 sm:gap-y-2.5 pb-11.75 md:pb-8 sm:pb-6">
                            {
                                financial_text.map((item, index) => {
                                    return <span key={index} className={`text-base md:text-sm sm:text-xs text-center leading-2.5 text-nowrap text-black font-semibold uppercase py-3.75 md:py-3 sm:py-2.5 px-6 md:px-4 sm:px-3 rounded-[10px] md:rounded-lg sm:rounded-md border border-[#9C9C9C] hover:border-0 hover:bg-linear-to-l from-[#021623] via-[#195353] to-[#021623] hover:text-white transition-all duration-200`}>{item}</span>
                                })
                            }
                        </div>
                        <p className={`text-base md:text-sm sm:text-xs text-[#424242] leading-7 md:leading-6 sm:leading-5 ${outfit2.className} pb-9.5 md:pb-6 sm:pb-5`}>Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem. Praesent viverra et metus. Nullam bibendum.</p>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-2 xl:items-center gap-x-10.75 gap-y-7.5 md:gap-y-4 sm:gap-y-3 pb-11 md:pb-7 sm:pb-5">
                            <List_item text={"Taking care of all your home's needs."} />
                            <List_item text={"It's finally easy to get fixed the right way."} />
                            <List_item text={"Half the price twice the deal!"} />
                            <List_item text={"We're a different kind handyman service."} />
                        </div>
                        <CommonBtn text={"More Details"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const List_item = ({ text }) => {
    return (
        <li className="list-none flex items-center gap-2.5 md:gap-2 sm:gap-1.5">
            <div className="size-4 md:size-3.5 sm:size-3 rounded-full bg-[#b4bcbf] relative shrink-0">
                <span className="size-2 md:size-1.5 sm:size-1.5 rounded-full bg-[#06202B] absolute top-[50%] left-[50%] translate-[-50%]"></span>
            </div>
            <span className={`${outfit2.className} text-[18px] md:text-base sm:text-sm text-[#464646]`}>{text}</span>
        </li>
    )
}
export const CommonBtn = ({ text }) => {
    return (
        <button className="bg-[#021623] rounded-[50px] md:rounded-[40px] sm:rounded-[30px] text-nowrap py-1.75 md:py-1.5 sm:py-1.25 pr-1.75 md:pr-1.5 sm:pr-1.25 pl-4.75 md:pl-4 sm:pl-3 flex items-center gap-3 md:gap-2.5 sm:gap-2 cursor-pointer">
            <p className={`text-white font-semibold text-base md:text-sm sm:text-xs leading-3 ${outfit.className}`}>{text}</p>
            <div className="size-8.75 md:size-7 sm:size-6 rounded-full bg-white grid place-items-center">
                <MdKeyboardArrowRight className="text-black md:text-sm sm:text-xs" />
            </div>
        </button>
    )
}
export default Financial