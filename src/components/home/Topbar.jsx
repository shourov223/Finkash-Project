import { Outfit } from "next/font/google";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import fire from "../../assets/fire.png"
import Image from "next/image";

const outfit = Outfit({
    weight: "400"
})
const outfit2 = Outfit({
    weight: "600"
})

const Topbar = () => {
    return (
        <section className="bg-[#041C28] rounded-[20px] mb-3.5">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-2 md:py-0">
                    {/* Email info */}
                    <div className="flex items-center gap-2.5">
                        <MdEmail className="text-white" />
                        <span className={`text-white text-[14px] leading-2.5 ${outfit.className}`}>finkash@email.com</span>
                    </div>
                    {/* Discount info */}
                    <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
                        <Image width={16} height={22} src={fire} alt="image" />
                        <span className={`text-[14px] text-white leading-2.5 text-nowrap ${outfit2.className}`}>Save upto 20% OFF to all premium construction Materials</span>
                        <button className={`bg-[#185152] px-3 py-1.75 rounded-[50px] text-white cursor-pointer active:bg-[#134F50] whitespace-nowrap`}>LEARN MORE</button>
                    </div>
                    {/* Address info */}
                    <div className="flex items-center gap-1.75">
                        <FaLocationDot className="text-white" />
                        <span className={`text-[14px] text-white leading-2.5 text-nowrap ${outfit2.className} hidden lg:block`}>30, Commercial Road Raton, Australia - 47889 45</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar