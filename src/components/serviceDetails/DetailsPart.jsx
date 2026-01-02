"use client"
import { Outfit } from "next/font/google"
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from "sonner";
import money from "../../assets/money.jpg"
import { CommonBtn } from "../home/Financial";
import detailsImage_one from "../../assets/detailsImage-one.jpg"
import detailsImage_two from "../../assets/detailsImage-two.jpg"
import detailsImage_three from "../../assets/detailsImage-three.jpg"
import external from "../../assets/external.svg"
import financial from "../../assets/financial.svg"
import irs from "../../assets/irs.svg"

const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    display: "swap"
})

const DetailsPart = () => {
    const listText = [
        {
            text: "Funds and Investments",
            count: "40"
        },
        {
            text: "Business Banking",
            count: "22"
        },
        {
            text: "Investment Banking",
            count: "28"
        },
        {
            text: "Banking Advising",
            count: "45"
        },
        {
            text: "Advisory & Consulting",
            count: "12"
        },
        {
            text: "Compliance Audits",
            count: "15"
        },
        {
            text: "Operational Audits",
            count: "55"
        },
        {
            text: "Financial Audits",
            count: "43"
        }
    ];
    const [style, setStyle] = useState(0)
    const btnArray = ["Get a Quote", "Appointments"]
    const [inputValue, setInputValue] = useState("")
    const HandleButton = () => {
        if (inputValue) {
            toast.success("We will contact you later.")
        } else {
            toast.error("Give us your info")
        }
        setInputValue("")
    }
    return (
        <section className={`${outfit.className} py-[50px] xl:py-[150px]`}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[500px_1fr] items-start gap-[76px]">
                    <aside>
                        <ul className="border border-[#D1D1D1] py-3 sm:py-[40px] px-2 sm:px-[30px] rounded-[20px] flex flex-col gap-4">
                            {
                                listText.map((item, index) => <ListItem key={index} text={item.text} count={item.count} />)
                            }
                        </ul>
                        {/* Form */}
                        <form onSubmit={(e) => e.preventDefault()} className="py-3 sm:py-8 px-4 sm:px-[30px] md:px-10 border border-[#D1D1D1] rounded-[20px] mt-[33px]">
                            <div className="flex flex-col sm:flex-row items-center rounded-[20px] bg-[#041C28] mb-[53px]">
                                {
                                    btnArray.map((item, index) => {
                                        return <button onClick={() => setStyle(index)} key={index} className={`transition-all w-full duration-200 px-[20px] xl:px-[56px] py-3 leading-[14px] text-[18px] ${style === index ? "rounded-[20px] text-black bg-[#E5FF5E]" : "bg-transparent text-white rounded-none"} text-nowrap cursor-pointer`}>{item}</button>
                                    })
                                }
                            </div>
                            {style === 0 ? <GetAQuote setInputValue={setInputValue} HandleButton={HandleButton} /> : <Appointments setInputValue={setInputValue} HandleButton={HandleButton} />}
                        </form>
                        {/* Contact US */}
                        <ul className="border border-[#D1D1D1] mt-10 rounded-[20px]">
                            <li className="bg-[#041C28] rounded-[20px] py-[15px] px-[45px] text-[25px] text-white mb-[30px]">Contact Us</li>
                            <ContactList text={"(209) 527-4957"} icons={<IoIosCall />} />
                            <ContactList text={"1541 Oakwood Dr Modesto, California(CA), 95350"} icons={<FaLocationDot />} />
                            <ContactList text={"finkash@support.com"} icons={<MdEmail />} />
                        </ul>
                        {/* Card */}
                        <div className="bg-[#041A26] py-[60px] px-10 rounded-[20px] mt-[43px]">
                            <div className="rounded-full overflow-hidden">
                                <Image src={money} alt="image" />
                            </div>
                            <div className="text-center">
                                <p className="pt-[50px] text-white text-[25px] font-semibold pb-[14px]">We keep your Finances in check, So you Don't have to.</p>
                                <p className="text-base text-white leading-7 pb-[35px]">Vestibulum vestibulum enim dolor, non luctus mi scelerisque laoreet Integer finibus mattis Praesent nisi nunc</p>
                                <div className="flex items-center justify-center">
                                    <CommonBtn textColor="#041C28" bg="#E5FF5E" text={"Contact Us"} />
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div>
                        <div className="w-full h-[598px] rounded-[30px] overflow-hidden">
                            <Image className="w-full h-full object-cover" src={detailsImage_one} alt="image" />
                        </div>
                        <h5 className="text-[#041C28] text-[30px] font-semibold pt-[46px] pb-[20px]">Funds and Investments</h5>
                        <p className="text-[#3D3D3D] text-base leading-7 pb-[63px]">Integer gravida arcu eu magna tincidunt, ac tempus magna bibendum. Suspendisse pretium mauris in purus tempor venenatis. Pellentesque convallis justo non egestas placerat. Phasellus id erat lorem. Suspendisse justo lorem, mattis vel fermentum nec, facilisis at ligula. Orci varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pellentesque, elit vitae feugiat dictum, magna est viverra orci, nec iaculis odio urna a libero. Maecenas faucibus nec lorem sed vulputate. Maecenas varius, sapien a convallis facilisis, augue orci varius sapien, sit amet semper nisi erat quis velit. Nunc mi lorem, feugiat ac magna sit amet, lobortis vestibulum lectus. Aenean et ex laoreet, porta  purus vitae, lacinia sapien.</p>
                        <div className="grid grid-cols-1 2xl:grid-cols-[373px_1fr] gap-[50px]">
                            <div className="h-[373px] rounded-[30px] overflow-hidden">
                                <Image src={detailsImage_two} alt="image" />
                            </div>
                            <div>
                                <h4 className="text-[#041C28] text-[30px] font-semibold pb-[20px]">The Quality You Expect The Service You Deserve!</h4>
                                <p className="text-[#3D3D3D] text-base leading-7 pb-[20px]">Nulla viverra neque laoreet mauris viverra tincidunt. Donec ante nulla, ultricies eu  mollis eu, egestas in eros. Ut ornare diam id purus accumsan laoreet.</p>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[60px] items-center">
                                    <Audit img={external} text={"External Audit"} des={"Aenean a imperdiet nibh pharetra dolor. Phasellus egestas malesuad felis ut laoreet. "} />
                                    <Audit img={financial} text={"Financial Audit"} des={"Aenean a imperdiet nibh pharetra dolor. Phasellus egestas malesuad felis ut laoreet. "} />
                                    <Audit img={irs} text={"IRS Tax audit"} des={"Aenean a imperdiet nibh pharetra dolor. Phasellus egestas malesuad felis ut laoreet. "} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 2xl:grid-cols-[609px_1fr] items-center gap-[17px] pt-[64px] pb-[45px]">
                            <div>
                                <p className="text-[#3D3D3D] text-base leading-7 pb-10">Integer gravida arcu eu magna tincidunt, ac tempus magna bibendum. Suspendisse pretium mauris in purus tempor venenatis. Pellentesque convallis justo non egestas placerat. Phasellus id erat lorem. Suspendisse justo lorem, mattis vel fermentum nec, facilisis at ligula. Orci varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pellentesque, elit vitae feugiat dictum, magna est viverra orci, nec iaculis odio urna a libero. Maecenas faucibus nec lorem sed vulputate. Maecenas varius, sapien a convallis facilisis, augue orci varius sapien, sit amet semper nisi erat quis velit. Nunc mi lorem, feugiat ac magna sit amet, lobortis vestibulum lectus. Aenean et ex laoreet, porta  purus vitae, lacinia sapien.</p>
                                <h4 className="text-[#041C28] text-[30px] font-semibold pb-[22px]">The Most Effective and Efficient Manner</h4>
                                <p className="text-base leading-7 text-[#3D3D3D]">Integer gravida arcu eu magna tincidunt, ac tempus magna bibendum. Suspendisse pretium mauris in purus tempor venenatis. Pellentesque convallis justo non egestas placerat. Phasellus id erat lorem. Suspendisse justo lorem.</p>
                            </div>
                            <div className="w-full h-[423px] rounded-[30px] overflow-hidden">
                                <Image src={detailsImage_three} alt="image" />
                            </div>
                        </div>
                        <div>
                            <iframe className="w-full rounded-[30px]" height={315} src="https://www.youtube.com/embed/xnOwOBYaA3w?si=1JUjrIfP0weqWu_D" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </section>
    )
}
const ListItem = ({ text, count }) => {
    return (
        <li className="group w-full py-[14px] px-2 lg:px-[22px] rounded-full hover:bg-[#041C28] transition-all duration-200 flex items-center justify-between gap-3">
            <span className="flex items-center gap-6">
                <span className="size-[6px] rounded-full bg-[#041C28] group-hover:bg-white"></span>
                <span className="text-[#041C28] group-hover:text-white text-[20px] font-semibold text-nowrap">{text}</span>
            </span>
            <span className="text-[#041C28] group-hover:text-white text-[20px] font-semibold text-nowrap">{count}</span>
        </li>
    )
}
const GetAQuote = ({ setInputValue, HandleButton }) => {
    return (
        <div className="flex flex-col gap-[17px] items-center">
            <input onChange={(e) => setInputValue(e.target.value)} className="w-full py-[15px] px-[25px] rounded-[20px] bg-[#F6F6F6]" type="text" placeholder="First Name*" />
            <input onChange={(e) => setInputValue(e.target.value)} className="w-full py-[15px] px-[25px] rounded-[20px] bg-[#F6F6F6]" type="text" placeholder="Address*" />
            <input onChange={(e) => setInputValue(e.target.value)} className="w-full py-[15px] px-[25px] rounded-[20px] bg-[#F6F6F6]" type="text" placeholder="Additional Message*" />
            <button onClick={HandleButton} className="w-full rounded-full text-white text-base font-semibold leading-3 text-center py-[20px] bg-[#041C28]">CALL FOR QUOTES</button>
        </div>
    )
}
const Appointments = ({ setInputValue, HandleButton }) => {
    return (
        <div className="flex flex-col gap-[17px] items-center w-full">
            <input onChange={(e) => setInputValue(e.target.value)} className="w-full py-[15px] px-[25px] rounded-[20px] bg-[#F6F6F6]" type="text" placeholder="First Name*" />
            <input onChange={(e) => setInputValue(e.target.value)} className="w-full py-[15px] px-[25px] rounded-[20px] bg-[#F6F6F6]" type="text" placeholder="Address*" />
            <button onClick={HandleButton} className="w-full rounded-full text-white text-base font-semibold leading-3 text-center py-[20px] bg-[#041C28]">Get Appointments</button>
        </div>
    )
}
const ContactList = ({ icons, text }) => {
    return <li className="flex items-start gap-[10px] py-[25px] px-[20px] lg:px-[43px]">
        <span>
            {icons}
        </span>
        <span className="text-[#041C28]">{text}</span>
    </li>
}
const Audit = ({ img, text, des }) => {
    return (
        <div className="max-w-[250px]">
            <div>
                <Image src={img} alt="image" />
            </div>
            <p className="text-[#041C28] text-[20px] font-semibold pt-[21px] pb-[13px] text-nowrap">{text}</p>
            <p className="text-[#535353] text-[14px] leading-6">{des}</p>
        </div>
    )
}
export default DetailsPart