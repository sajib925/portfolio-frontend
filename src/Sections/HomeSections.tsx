import React from "react";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Social } from "@/components/Social";
import { Stats } from "@/components/Stats";
import Link from "next/link";

function HomeSections() {
  const cv = "assets/CV.pdf";
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/*photo*/}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
          {/*text*/}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="inline-block pb-6 text-xl">
              React & Django Developer
            </span>
            <h1 className="h1 mb-6">
              Hello, {`I'm`} <br />{" "}
              <span className="text-accent">Sajib Ahmed</span>
            </h1>
            <p className="mb-9 max-w-[600px] text-lg text-white/80">
              I bring 2 years of experience in frontend technologies,
              particularly React and no-code platform Webflow, and I am
              currently learning Django to enhance my backend capabilities and
              pursue opportunities in full-stack development.
            </p>
            {/*  btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Link href={cv} download target={"_blank"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}

export default HomeSections;
