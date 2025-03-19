"use client";
import { Button } from "@/components/ui/button";
import { JetBrains_Mono } from "next/font/google";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

// components
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-3">
              Hello I'm
              <br />
              <span className="text-accent">$ubh0 H@zra</span>
            </h1>
            <h2 className="typeo mb-3">
              I'm a&nbsp;
              <TypeAnimation
                className="text-accent inline-block font-bold"
                sequence={[
                  "Java Developer",
                  1000,
                  "ML Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Graphic Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="max-w-[500px] mb-9 text-white/95 leading-snug">
              Final-year B.Tech CSE student at FIEM.
              <br /> proficient in various programming languages and
              technologies, with a strong foundation in software development and
              problem-solving.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/SUBHO HAZRA CV.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration:500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
