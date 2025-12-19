"use client"
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaChevronRight } from 'react-icons/fa6';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const outfit = Outfit({
    weight: "500"
})
const outfit2 = Outfit({
    weight: "600"
})

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItemCSS = `hover:bg-white hover:text-black hover:border hover:border-[#D9D9D9] text-base leading-[100%] ${outfit.className} border border-[#D9D9D9] text-white bg-transparent py-[9px] px-[20px] rounded-[100px] transition-all duration-300 cursor-pointer text-nowrap`

    return (
        <nav className='rounded-[30px] absolute top-[220px] sm:top-[170px] md:top-[90px] left-0 w-full'>
            <div className="container">
                <div className='flex items-center gap-3 justify-between py-4 lg:py-0'>
                    {/* Logo */}
                    <Link href={"/"} className='cursor-pointer'>
                        <Image width={220} height={41.5} src={"/Logo.png"} alt='logo' className='w-40 md:w-52 lg:w-55 h-auto' />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden text-white text-3xl z-50'
                    >
                        {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
                    </button>

                    {/* Nav items */}
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8.75 absolute lg:relative top-20 lg:top-0 left-0 right-0 bg-[#07C29C] lg:bg-transparent p-6 lg:p-0 rounded-[30px] lg:rounded-none shadow-lg lg:shadow-none z-40`}>
                        <button className={navItemCSS}>Home</button>
                        <button className={navItemCSS}>About Us</button>
                        <button className={`${navItemCSS} flex items-center gap-1`}>
                            Projects
                            <RiArrowDropDownLine />
                        </button>
                        <button className={navItemCSS}>Blogs</button>
                        <button className={`${navItemCSS} flex items-center gap-1`}>
                            Pages
                            <RiArrowDropDownLine />
                        </button>
                        <button className={navItemCSS}>Contact Us</button>
                    </div>

                    {/* Contact Info */}
                    <div className='hidden xl:flex items-center gap-10.25'>
                        <div className='hidden 2xl:flex items-center gap-2.5'>
                            <div className='bg-white size-7.5 rounded-full grid place-items-center'>
                                <IoMdCall />
                            </div>
                            <span className={`text-white text-base ${outfit.className}`}>(+02) 258 987 4533</span>
                        </div>
                        <button className='py-1.75 pr-1.75 pl-4.75 bg-[#E5FF5E] rounded-full cursor-pointer flex items-center gap-1.75'>
                            <span className={`${outfit2.className} text-[#04150B] text-sm lg:text-base`}>get in touch</span>
                            <div className='size-8.75 rounded-full bg-[#04150B] grid place-items-center'>
                                <FaChevronRight className='text-[#E6D2AF]' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar