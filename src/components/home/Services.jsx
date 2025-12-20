import stocks from "../../assets/stocks.svg"
import profit from "../../assets/profit.svg"
import planing from "../../assets/planing.svg"
import Image from "next/image"
import { Outfit } from "next/font/google"

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "400"
})

const Services = () => {
    return (
        <section className='bg-linear-to-l from-[#021623] via-[#195353] to-[#021623] py-4 xl:py-19.25 mt-10 xl:mt-37.5 w-full'>
            <div className="container px-4">
                <div className="grid grid-cols-1 items-center sm:grid-cols-3 gap-6 md:gap-8">
                    <Items title={"Stocks & Bonds"} img={stocks} des={"Vestibulum cursus dolor sed arcu lobortis, inter sem ullamcorper. Nam commodo metus."} />
                    <Items title={"Portfolio Management"} img={profit} bg={false} des={"Vestibulum cursus dolor sed arcu lobortis, inter sem ullamcorper. Nam commodo metus."} />
                    <Items title={"Stocks & Bonds"} img={stocks} bg={"#E5FF5E"} des={"Vestibulum cursus dolor sed arcu lobortis, inter sem ullamcorper. Nam commodo metus."} />
                </div>
            </div>
        </section>
    )
}

const Items = ({ img, title, des, bg = true }) => {
    return (
        <div className={`py-7.5 grid grid-cols-[90px_1fr] items-center justify-between gap-4.75 sm:grid-cols-1 sm:text-center sm:justify-items-center`}>
            <div className={`size-22.5 grid place-items-center rounded-[20px] ${bg ? "bg-[#E5FF5E]" : "bg-white"} sm:size-20`}>
                <Image src={img} alt="image" />
            </div>
            <div>
                <h5 className={`text-white font-medium text-[25px] leading-8.25 pb-1.75 md:text-[22px] sm:text-xl`}>{title}</h5>
                <p className={`text-base text-white leading-7 sm:text-sm`}>{des}</p>
            </div>
        </div>
    )
}
export default Services