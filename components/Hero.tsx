"use client";

import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-4 flex justify-center">
          <Image
            className="rounded-full shadow-2xl"
            src="/selfie.jpg"
            alt="Profile picture of Jose Francisco Naranjo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hello, I&apos;m Jose!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-red-500">
              Full-Stack Software Developer
            </span>{" "}
            based in San Joaquin County, CA. I am dedicated to crafting
            innovative software solutions that make a meaningful difference in
            Californians’ lives. Let&apos;s work together to create impactful
            change through technology.
          </p>
          <ScrollLink
            to="projects"
            className="inline-block text-neutral-100 font-semibold px-6 py-3 bg-red-600 rounded shadow hover:bg-red-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            aria-label="Scroll to projects section"
          >
            Projects
          </ScrollLink>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          aria-label="Scroll to about section"
        >
          <HiArrowDown
            size={35}
            className="animate-bounce cursor-pointer"
            aria-hidden="true"
          />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
