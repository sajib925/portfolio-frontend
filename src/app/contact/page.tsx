"use client"
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {motion} from "framer-motion"
import {Contact} from "@/components/Contact";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+880) 1729-925644"
    }, {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "sakilahmed.dev@gmail.com"
    }, {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Dhaka , Bangladesh"
    },
]


export default function ContactPage() {


    return (
        <motion.section

            initial={{opacity: 0}} animate={{opacity: 1}}
            transition={{delay: 2.4, duration: 0.4, ease: "easeIn"}}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:h-[54%] order-2 xl:order-none'>
                        <Contact/>
                    </div>
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 '>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div
                                            className='w[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-[8px] flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}