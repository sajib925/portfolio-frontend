"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CLogo, CPlusPlusLogo, DataStructuresLogo } from "@/lib/icon";
import { FaCss3Alt, FaJs, FaPython, FaReact, FaSass } from "react-icons/fa";
import {
  SiChakraui,
  SiDjango,
  SiHtml5,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWebflow } from "react-icons/fa6";

const about = {
  title: "About me",
  description:
    "This is Sajib Ahmed from Dhaka, Bangladesh, an aspiring developer passionate about learning and exploring new technologies. With experience in front-end and back-end development, I specialize in React, Next.js, Tailwind CSS, MySQL, and Django REST Framework.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Sajib Ahmed",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+880) 1740786762",
    },
    {
      fieldName: "Experience:",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Email:",
      fieldValue: "hmsajibahmed7@gmail.com",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Languages:",
      fieldValue: "En , Bn",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "A dedicated Web Developer with valuable experience as an intern at GetOnNet, Norway, and currently contributing to The 71 Agency, Bangladesh. Proficient in React, Next.js, and Tailwind CSS, and Django Rest Framework, creating responsive and dynamic user interfaces. Always eager to learn and innovate",
  items: [
    {
      company: "The 71 Agency, Bangladesh",
      position: "Front-End Developer",
      duration: "2023 Oct - Present",
    },
    {
      company: "GetOnNet, Norway",
      position: "Front-End Developer Intern",
      duration: "2023 Aug - 2023 Oct",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Aspiring developer with hands-on experience in front-end web development at Academy71, specializing in React, Next.js, and Tailwind CSS, and backend development at Pithron. Proficient in MySQL, C, C++, Python, and Django REST Framework.",
  items: [
    {
      institution: "Academy71",
      degree: "Front-End web development",
      duration: "2022 February - 2022 December",
    },
    {
      institution: "Pithron",
      degree: "Backend Development",
      duration: "2023 September - 2024 October",
    },
  ],
};

const skills = {
  icon: "/assets/resume/cap.svg",
  title: "My Skills",
  description:
    "Basic understanding of C and C++, coupled with foundational knowledge of data structures and algorithms, Python OOP, and Django REST Framework. Proficient in JavaScript, React, Tailwind CSS, and MySQL, enabling efficient problem-solving, effective coding practices, and collaborative software development",
  skillList: [
    {
      icon: <CLogo />,
      name: "C Language",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <CPlusPlusLogo />,
      name: "C++ Language",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <DataStructuresLogo />,
      name: "Data Structure",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiDjango />,
      name: "Django Rest Framework",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiChakraui />,
      name: "Chakra UI",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    {
      icon: <TbBrandMysql />,
      name: "My SQL",
    },
    {
      icon: <FaWebflow />,
      name: "Webflow",
    },
  ],
};

function ResumeSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue={"experience"}
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"aboutme"}>About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value={"experience"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-white/60 lg:text-lg">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value={"education"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/60 lg:text-lg">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value={"skills"} className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-white/60 lg:text-lg">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[100px] w-full items-center justify-center rounded-[8px] bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about me*/}
            <TabsContent
              value={"aboutme"}
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-white/60 lg:text-lg">{about.description}</p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 md:grid-cols-2 xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default ResumeSection;
