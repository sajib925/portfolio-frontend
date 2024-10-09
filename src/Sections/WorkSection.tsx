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
import { BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { WorkSliderBtns } from "@/components/WorkSliderBtns";
import "swiper/css";
import { GoArrowUpRight } from "react-icons/go";
import { GrFormView } from "react-icons/gr";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Project, projects } from "@/lib/portfolioData";

function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex as number;
    setActiveIndex(currentIndex);
    const selectedProject = projects[currentIndex] ?? null;
    setSelectedProject(selectedProject);
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
          {/* Left Section */}
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            {projects.length > 0 && (
              <div className="flex h-[50%] flex-col gap-[30px]">
                {/* Only show the active project's content */}
                {projects[activeIndex] && (
                  <React.Fragment>
                    <motion.div
                      //@ts-ignore
                      key={projects[activeIndex].id}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-outline text-4xl font-extrabold leading-none text-transparent"
                    >
                      {activeIndex + 1}
                    </motion.div>
                    <h2 className="text-4xl font-bold capitalize text-white transition-all duration-500 group-hover:text-accent">
                      {projects[activeIndex]?.title}
                    </h2>
                    <p className="text-white/60">
                      {projects[activeIndex]?.description_1}
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="pb-3 text-2xl font-semibold leading-none text-white">
                          Stack
                        </p>
                        <ul className="flex gap-4">
                          {projects[activeIndex]?.tags.map((tag) => (
                            <li key={tag.id} className="text-xl text-accent">
                              {tag.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Buttons */}
                      <div className="flex items-center gap-4">
                        {/* View Project Button */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              onClick={() => {
                                const selectedProject = projects[activeIndex];
                                if (selectedProject) {
                                  setSelectedProject(selectedProject);
                                }
                              }}
                              className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/5"
                            >
                              <GrFormView className="text-xl text-white group-hover:text-accent" />
                            </button>
                          </DialogTrigger>
                          {selectedProject &&
                            selectedProject.id ===
                              projects[activeIndex]?.id && (
                              <DialogContent
                                className={
                                  "h-full w-full max-w-[800px] !overflow-auto"
                                }
                              >
                                <div className="flex flex-col gap-4">
                                  <h2 className="pb-6 text-center text-4xl font-bold capitalize text-black transition-all duration-500 group-hover:text-accent">
                                    {selectedProject.title}
                                  </h2>
                                  {selectedProject.image_1 && (
                                    <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded border border-gray-300">
                                      <img
                                        src={selectedProject.image_1}
                                        alt={selectedProject.title}
                                        // width={600}
                                        // height={500}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                  )}
                                  <p className="text-base text-black">
                                    {selectedProject.description_1}
                                  </p>
                                  <div className="mx-auto w-full max-w-[600px]">
                                    <h3 className="text-xl font-semibold text-black">
                                      Features
                                    </h3>
                                    {selectedProject.features && (
                                      <p className="text-base text-black">
                                        {selectedProject.features.map(
                                          (feature) => (
                                            <span
                                              key={feature.id}
                                              className="block py-1"
                                            >
                                              - {feature.name}
                                            </span>
                                          ),
                                        )}
                                      </p>
                                    )}
                                  </div>
                                  {selectedProject.image_2 && (
                                    <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded border border-gray-300">
                                      <img
                                        src={selectedProject.image_2}
                                        alt={selectedProject.title}
                                        // width={600}
                                        // height={500}
                                        className="object-cover"
                                      />
                                    </div>
                                  )}
                                  {selectedProject.description_2 && (
                                    <p className="text-base text-black">
                                      {selectedProject.description_2}
                                    </p>
                                  )}

                                  {selectedProject.image_3 && (
                                    <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded border border-gray-300">
                                      <img
                                        src={selectedProject.image_3}
                                        alt={selectedProject.title}
                                        // width={600}
                                        // height={500}
                                        className="object-cover"
                                      />
                                    </div>
                                  )}
                                  {selectedProject.description_3 && (
                                    <p className="text-base text-black">
                                      {selectedProject.description_3}
                                    </p>
                                  )}

                                  <h3 className="text-center text-xl font-semibold text-black">
                                    Stack
                                  </h3>
                                  <p className="flex items-center justify-center gap-3 text-base text-black">
                                    {selectedProject.tags.map((feature) => (
                                      <span
                                        key={feature.id}
                                        className="block py-1"
                                      >
                                        - {feature.name}
                                      </span>
                                    ))}
                                  </p>
                                  <h3 className="text-center text-xl font-semibold text-black">
                                    Links
                                  </h3>
                                  <div className="flex items-center justify-center gap-4">
                                    {projects[activeIndex]
                                      ?.live_link_frontend !== "" ? (
                                      <Link
                                        href={
                                          projects[activeIndex]
                                            ?.live_link_frontend ?? "#"
                                        }
                                      >
                                        <TooltipProvider delayDuration={100}>
                                          <Tooltip>
                                            <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
                                              <GoArrowUpRight className="text-xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>Live Frontend</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </Link>
                                    ) : (
                                      ""
                                    )}
                                    {projects[activeIndex]
                                      ?.github_link_frontend !== "" ? (
                                      <Link
                                        href={
                                          projects[activeIndex]
                                            ?.github_link_frontend ?? "#"
                                        }
                                      >
                                        <TooltipProvider delayDuration={100}>
                                          <Tooltip>
                                            <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
                                              <BsGithub className="text-xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>Frontend Repo</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </Link>
                                    ) : (
                                      ""
                                    )}
                                    {projects[activeIndex]
                                      ?.github_link_backend !== "" ? (
                                      <Link
                                        href={
                                          projects[activeIndex]
                                            ?.github_link_backend ?? "#"
                                        }
                                      >
                                        <TooltipProvider delayDuration={100}>
                                          <Tooltip>
                                            <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
                                              <BsGithub className="text-xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>Backend Repo</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </Link>
                                    ) : (
                                      ""
                                    )}
                                    {projects[activeIndex]
                                      ?.live_link_backend !== "" ? (
                                      <Link
                                        href={
                                          projects[activeIndex]
                                            ?.live_link_backend ?? "#"
                                        }
                                      >
                                        <TooltipProvider delayDuration={100}>
                                          <Tooltip>
                                            <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
                                              <GoArrowUpRight className="text-xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>Backend Live</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </Link>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </DialogContent>
                            )}
                        </Dialog>

                        <div className="flex items-center justify-center gap-4">
                          {projects[activeIndex]?.live_link_frontend !== "" ? (
                            <Link
                              href={
                                projects[activeIndex]?.live_link_frontend ?? "#"
                              }
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/5">
                                    <GoArrowUpRight className="text-xl text-white group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Live Frontend</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          ) : (
                            ""
                          )}
                          {projects[activeIndex]?.github_link_frontend !==
                          "" ? (
                            <Link
                              href={
                                projects[activeIndex]?.github_link_frontend ??
                                "#"
                              }
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/5">
                                    <BsGithub className="text-xl text-white group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Frontend Repo</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          ) : (
                            ""
                          )}
                          {projects[activeIndex]?.github_link_backend !== "" ? (
                            <Link
                              href={
                                projects[activeIndex]?.github_link_backend ??
                                "#"
                              }
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/5">
                                    <BsGithub className="text-xl text-white group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Backend Repo</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          ) : (
                            ""
                          )}
                          {projects[activeIndex]?.live_link_backend !== "" ? (
                            <Link
                              href={
                                projects[activeIndex]?.live_link_backend ?? "#"
                              }
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="group flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/5">
                                    <GoArrowUpRight className="text-xl text-white group-hover:text-accent" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Backend Live</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="border border-white/20"></div>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                    <div className="h-full w-full">
                      <img
                        src={project.image_1}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="text-white w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 bg-accent hover:bg-accent-hover rounded-full"
                iconsStyles="text-primary text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WorkSection;
