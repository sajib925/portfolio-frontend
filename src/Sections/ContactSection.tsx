"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Contact } from "@/components/Contact";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    link: "tel:+8801740786762",
    description: "(+880) 1740786762",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "mailto:hmsajibahmed7@gmail.com",
    description: "hmsajibahmed7@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    link: "#",
    description: "Dhaka, Bangladesh",
  },
];

function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] lg:flex-row lg:items-start xl:items-center">
          <div className="order-2 lg:order-none xl:h-[54%] xl:w-[50%]">
            <Contact />
          </div>
          <div className="order-1 mb-8 flex flex-1 items-center md:justify-center lg:order-none lg:justify-end xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w[52px] flex h-[52px] cursor-pointer items-center justify-center rounded-[8px] bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      <Link href={item.link} className="text-[28px]">
                        {item.icon}
                      </Link>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
