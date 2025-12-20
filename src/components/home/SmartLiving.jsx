"use client"
import { Outfit } from "next/font/google"
import Image from "next/image"
import arrow from "../../assets/arrow.svg"
import section2_image from "../../assets/section2_image.jpg"
import section2_image2 from "../../assets/section2_image2.jpg"
import CountUp from "react-countup"


const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "600"
})
const outfit3 = Outfit({
    weight: "400"
})

const SmartLiving = () => {
    return (
        <section className="pt-37.5 md:pt-20 sm:pt-10">
            <div className="container">
                <div className="grid xl:grid-cols-[1fr_596px] lg:grid-cols-1 items-center xl:gap-17.5 lg:gap-10 gap-8 pb-40 lg:pb-20 sm:pb-10">
                    <div>
                        <div className={`py-2 px-3.75 text-nowrap text-black text-[12px] leading-2 rounded-full bg-[#E5FF5E] mb-4.5 inline-block ${outfit.className}`}>saving your future</div>
                        <h2 className={`xl:text-[40px] lg:text-[32px] md:text-[28px] text-[24px] leading-13 lg:leading-tight text-[#041C28] font-semibold ${outfit2.className} pb-10.5 md:pb-6 sm:pb-4`}>Built for Families, Made for Memories Smart Homes for Smart Living</h2>
                        <p className={`${outfit3.className} text-[#303030] text-base leading-7 pb-15.5 md:pb-8 sm:pb-6`}>Duis ornare malesuada arcu, in consequat ipsum convallis feugiat. Donec ornare aliquam tortor, sit amet tincidunt lacus malesuada non. Maecenas tempus turpis ut ornare condimentum. Integer efficitur tellus at semper ultrices. Cras vel sollicitudin tellus. In dignissim, nisi quis.</p>
                        <ul className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-19.5 gap-x-6 lg:gap-y-10.5 gap-y-4">
                            <List_items text={"Federal Affiliations Are What We Do"} />
                            <List_items text={"The Most Interesting Agent Retirement Planning"} />
                            <List_items text={"Federal Affiliations Are What We Do"} />
                            <List_items text={"Secret Undersecretaries Are Assurance"} />
                            <List_items text={"Principal Agent Wealth Preservation Strategies"} />
                            <List_items text={"Secret Undersecretaries Acquisitions"} />
                        </ul>
                    </div>
                    <div className="xl:h-104.75 lg:h-96 md:h-80 h-64 rounded-[20px] overflow-hidden">
                        <Image className="w-full h-full object-cover" src={section2_image} alt="image" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-[352px_1fr] grid-cols-1 lg:gap-11 gap-8">
                    <div className="lg:w-88 w-full lg:h-82.25 h-64 object-cover overflow-hidden rounded-[20px]">
                        <Image width={352} height={329} src={section2_image2} alt="image" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-6 gap-4">
                        <Curcel_item count={<CountUp start={0} end={892} duration={2} />} title={"Complete Projects"} des={"Follows strict safety protocols ensure a secure working"} />
                        <Curcel_item count={<CountUp start={0} end={132} duration={2} />} title={"Team Members"} des={"Promotes sustainable in the construction minimal"} />
                        <Curcel_item count={<CountUp start={0} end={12} duration={2} />} title={"Years of Experiences"} des={"Prioritizes customer follow in satisfaction transparent."} />
                        <Curcel_item count={<CountUp start={0} end={26} duration={2} />} title={"Awards Winning"} des={"Focused on delivering usefull durable quality projects"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const List_items = ({ text }) => {
    return (
        <li className="flex items-center gap-3.5">
            <div className="flex-shrink-0">
                <Image src={arrow} alt="icon" />
            </div>
            <span className={`${outfit.className} text-base leading-3 font-medium text-[#303030]`}>{text}</span>
        </li>
    )
}
const Curcel_item = ({ count, title, des }) => {
    return (
        <div className="lg:size-62.75 md:w-full md:h-62.75 w-full h-auto rounded-full border border-[#D9D9D9] hover:border-black transition-all duration-300 text-center grid place-items-center lg:p-0 p-8">
            <div className="lg:w-36.75 lg:h-31.75 w-full">
                <span className={`xl:text-[50px] lg:text-[40px] md:text-[36px] text-[32px] font-semibold text-[#041C28] inline-block ${outfit2.className}`}>{count}+</span>
                <span className={`xl:text-[20px] lg:text-[18px] text-[16px] leading-3 font-semibold pb-3.25 inline-block whitespace-nowrap ${outfit2.className}`}>{title}</span>
                <span className={`text-[#303030] text-[12px] leading-4.5 inline-block ${outfit3.className}`}>{des}</span>
            </div>
        </div>
    )
}
export default SmartLiving