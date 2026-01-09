"use client"
import { CommonBtn } from '@/components/home/Financial'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Not_found = () => {
    const router = useRouter()
    const handleEvent = () => {
        router.push("/")
    }
    return (
        <section className='bg-[#07C29C] py-[274px]'>
            <div className="container">
                <center>
                    <div>
                        <Image width={1358} height={356} src={"/error_1.png"} alt='image' />
                    </div>
                    <div>
                        <Image src={"/error_2.png"} alt='image' width={442} height={162} />
                    </div>
                    <h1 className='pt-[51px] text-white text-[60px] leading-[70px] font-semibold pb-[36px]'>404 Error ! The Page Not Found</h1>
                    <p className='text-base leading-7 text-white max-w-[822px] mx-auto pb-[31px]'>Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit arcu, posuere at neque quis, vestibulum vehicula dui. Praesent at felis ante. Cras sed ultricies risus. Nullam porta fermentum egestas. Praesent quis mauris.</p>
                    <CommonBtn event={handleEvent} text={"back to home"} />
                </center>
            </div>
        </section>
    )
}

export default Not_found