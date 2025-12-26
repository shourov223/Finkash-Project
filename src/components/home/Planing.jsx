import { Outfit } from "next/font/google"
import Image from "next/image"
import icon_one from "../../assets/icon_one.svg"
import icon_two from "../../assets/icon_two.svg"
import icon_three from "../../assets/icon_three.svg"
import icon_four from "../../assets/icon_four.svg"
import icon_five from "../../assets/icon_five.svg"
import icon_six from "../../assets/icon_six.svg"

const outfit = Outfit({
    weight: "600"
})
const outfit2 = Outfit({
    weight: "400"
})
const outfit3 = Outfit({
    weight: "500"
})

const Planing = () => {
    return (
        <section className='bg-linear-to-t from-[#021623] via-[#195353] to-[#021623] xl:py-37.5 md:py-20 py-10'>
            <div className="container">
                <div className="grid xl:grid-cols-[668px_1fr] grid-cols-1 xl:gap-36 lg:gap-20 md:gap-10 gap-8 justify-between xl:pb-31.75 lg:pb-20 md:pb-10 pb-8">
                    <div>
                        <h3 className={`text-[40px] lg:text-[36px] md:text-[28px] sm:text-[24px] text-white font-semibold leading-13 lg:leading-tight md:leading-tight sm:leading-tight ${outfit.className}`}>It involves careful planning, high quality materials adherence.</h3>
                        <p className={`${outfit2.className} text-white leading-7 md:leading-6 sm:leading-6 mt-4`}>Cras egestas eleifend erat, id hendrerit nunc aliquam a. Donec sed laoreet justo. Aliquam erat volutpat. Ut neque mi, luctus at urna non, cursus iaculis massa.</p>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center justify-between xl:gap-25.25 lg:gap-16 md:gap-8 gap-6">
                        <PlaningCard img={icon_one} text={"Mergers  Acquisit International Transfers Advisory"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                        <PlaningCard img={icon_two} text={"Corporate Investment finance Rural Banking Advisory"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center xl:gap-25.25 lg:gap-16 md:gap-8 gap-6">
                    <PlaningCard img={icon_three} text={"Venture Capital & Private Equity Financial Programs"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                    <PlaningCard img={icon_four} text={"Business Loans Working Capital Corporate Investment"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                    <PlaningCard img={icon_five} text={"Venture Capital & Private Equity Financial Programs"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                    <PlaningCard img={icon_six} text={"Business Loans Working Capital Corporate Investment"} des={"Cras egestas eleifend erat, id hendrerit nunc aliquam Donec sed laoreet justo Aliquam erat."} />
                </div>
            </div>
        </section>
    )
}

const PlaningCard = ({ img, text, des }) => {
    return (
        <div>
            <Image src={img} alt="icons" className="w-12 h-12 md:w-10 md:h-10" />
            <h4 className={`text-[20px] md:text-[18px] sm:text-[16px] leading-7 md:leading-6 text-white font-medium pt-3 pb-2 ${outfit3.className}`}>{text}</h4>
            <p className={`text-[14px] md:text-[13px] sm:text-[12px] text-white leading-5.75 md:leading-5 ${outfit2.className}`}>{des}</p>
        </div>
    )
}
export default Planing