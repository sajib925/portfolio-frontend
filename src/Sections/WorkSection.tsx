"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { WorkSliderBtns } from "@/components/WorkSliderBtns";
import "swiper/css";

type Stack = {
  name: string;
};

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: Stack[];
  image: string;
  live: string;
  github: string;
}

function WorkSection() {
  const projects: Project[] = [
    {
      num: "01",
      category: "Frontend",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/assets/work/thumb1.png",
      live: "",
      github: "",
    },
    {
      num: "02",
      category: "Frontend",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
      stack: [{ name: "React" }, { name: "Scss" }],
      image: "/assets/work/thumb2.png",
      live: "",
      github: "",
    },
    {
      num: "03",
      category: "Frontend",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
      stack: [{ name: "React" }, { name: "Scss" }],
      image: "/assets/work/thumb3.png",
      live: "",
      github: "",
    },
  ];

  const [project, setProject] = useState<Project>({
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consecteture adipiscing elit, sed do eiusmod",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  });

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    // @ts-expect-error
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project?.num}
              </div>
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category} project
              </h2>
              <p className="text-white/60">{project?.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
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
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      <div className="absolute  bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={""}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={"text-white"}
                iconsStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WorkSection;
