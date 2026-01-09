"use client"
import React, { useState } from 'react'
import { CommonDesign } from '../home/OurClients'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { HiMinusSmall } from "react-icons/hi2";
import { outfit } from '../contact/ContactDetails';

const FaqDetails = () => {
    const faqText = [
        "Challenges And Constraints For Women Entrepreneurs",
        "The Role Of Business Development Services Advisor Is The Buzz?",
        "Financial Is Rolling, The Others Are Stoned From Altogether To Portion?",
        "Economic Physicals Are What We Do Free Financial For All?",
        "Where Do You Want Financial To Go Today?",
        "Review The Facts Financial Is The Best Guide, Do You Need Anything Else?",
        "Challenges And Constraints For Women Entrepreneurs",
        "The Role Of Business Development Services Advisor Is The Buzz?",
        "Financial Is Rolling, The Others Are Stoned From Altogether To Portion?",
        "Economic Physicals Are What We Do Free Financial For All?",
        "Review The Facts Financial Is The Best Guide, Do You Need Anything Else?",
        "Challenges And Constraints For Women Entrepreneurs",
        "The Role Of Business Development Services Advisor Is The Buzz?",
        "Financial Is Rolling, The Others Are Stoned From Altogether To Portion?",
        "Economic Physicals Are What We Do Free Financial For All?"
    ]
    return (
        <section className={`py-[150px] ${outfit.className}`}>
            <div className="container">
                <div className='grid grid-cols-2 gap-[170px]'>
                    <div>
                        <CommonDesign text={"frequently asked questions"} />
                        <h1 className='text-[#041C28] text-[40px] leading-[52px] font-semibold pt-3 pb-[22px]'>People Frequently Asking Question</h1>
                        <p className='text-[#303030] text-base leading-7'>Mauris iaculis malesuada suscipit. Maecenas bibendum euismod neque vitae tincidunt. Nulla pharetra dui non placerat suscipit. Vivamus egestas sodales urna at aliquet. Fusce molestie sapien.</p>
                    </div>
                    <div>
                        <h2 className='text-[40px] leading-[52px] font-semibold pb-[70px]'>A Team Conducts an Internal Audit Within the Organisation</h2>
                        <div className='flex flex-col gap-[40px]'>
                            {
                                faqText.map((item, index) => {
                                    return <FaqItem key={index} text={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FaqItem = ({ text }) => {
    const [show, setShow] = useState(true)
    return (
        <div className={`border-b border-b-[#707070] overflow-hidden transition-all duration-300 ease-in-out ${show ? "max-h-[30px]" : "max-h-[500px]"}`}>
            <p className='flex items-center justify-between'>
                <span>{text}</span>
                <button onClick={() => setShow(!show)}>
                    {show ? <HiOutlinePlusSm /> : <HiMinusSmall />}
                </button>
            </p>
            <p className={`text-base text-[#6E6E6E] leading-7 pt-[21px] transition-opacity duration-300 ease-linear pb-[30px] ${show ? "invisible opacity-0" : "visible opacity-100"}`}>Cras ut arcu in diam laoreet feugiat. Mauris id velit magna. Suspendisse ut justo  pellentesque, commodo nibh quis, imperdiet mi. Mauris efficitur ipsum sed varius mattis. Nullam faucibus elementum magna eget imperdiet. Integer ex nibh, lobortis nec tellus id varius ultrices mauris. Mauris vestibulum metus vel risus sodales vehicula.</p>
        </div>
    )
}
export default FaqDetails