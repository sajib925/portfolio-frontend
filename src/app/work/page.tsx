"use client"
import {motion} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { useState} from "react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import Image from "next/image";
import {WorkSliderBtns} from "@/components/WorkSliderBtns";


type Stack = {
    name: string
}

interface Project {
    num: string
    category: string
    title: string
    description: string
    stack: Stack[]
    image: string
    live: string
    github: string
}


export default function WorkPage() {
    const projects: Project[] = [
        {
            num: "01",
            category: "Frontend",
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
            stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
            image: "/assets/work/thumb1.png",
            live: "",
            github: ""
        },
        {
            num: "02",
            category: "Frontend",
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
            stack: [{name: "React"}, {name: "Scss"}],
            image: "/assets/work/thumb2.png",
            live: "",
            github: ""
        }, {
            num: "03",
            category: "Frontend",
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
            stack: [{name: "React"}, {name: "Scss"}],
            image: "/assets/work/thumb3.png",
            live: "",
            github: ""
        },
    ]

    const [project, setProject] = useState<Project>({
        num: "01",
        category: "Frontend",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
        stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
        image: "/assets/work/thumb1.png",
        live: "",
        github: ""
    });

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex
        // @ts-expect-error
        setProject(projects[currentIndex])

    }

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}}
                        transition={{delay: 2.4, duration: 0.4, ease: "easeIn"}}
                        className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div
                        className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div
                                className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project?.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} project
                            </h2>
                            <p className='text-white/60'>{project?.description}</p>
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight
                                                    className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}


                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                            <div
                                                className='absolute  top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            <div className='relative w-full h-full'>
                                                <Image src={project.image} alt={''} fill className='object-cover'/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns
                                containerStyles={"flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"}
                                btnStyles={'text-white'}
                                iconsStyles={'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500'} />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}