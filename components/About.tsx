"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CollapsibleSkills from "./CollapsibleSkills";
import dynamic from "next/dynamic";

const TypewriterParagraph = dynamic(() => import("./TypewriterParagraph"), {
  ssr: false,
});

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="relative">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-12 md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              Let me introduce myself{" "}
              <span role="img" aria-label="smile">
                😊
              </span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed">
              <TypewriterParagraph>
                My name is Jose Francisco Naranjo, and I am a{" "}
                <span className="font-bold">Computer Science graduate</span> and{" "}
                <span className="font-bold text-red-500">
                  CompTIA A+ certified IT professional
                </span>{" "}
                based in Central California. I specialize in full-stack
                development, system administration, and AI model evaluation.
              </TypewriterParagraph>

              <TypewriterParagraph>
                I earned my B.S. in Computer Science from CSU Stanislaus, where
                I also worked as an{" "}
                <span className="font-bold text-red-500">
                  undergraduate research assistant
                </span>{" "}
                focused on technical configuration, data processing, and system
                workflows across Windows and Linux environments.
              </TypewriterParagraph>

              <TypewriterParagraph>
                My hands-on experience includes working as a{" "}
                <span className="font-bold text-red-500">
                  Full-Stack Developer Intern
                </span>{" "}
                at Bay Valley Tech building web platforms, serving as a{" "}
                <span className="font-bold text-red-500">
                  Volunteer Web Developer
                </span>{" "}
                for Inverum Institute, and contributing back-end fixes for
                healthcare cloud platforms.
              </TypewriterParagraph>

              <TypewriterParagraph>
                Currently, I work as an{" "}
                <span className="font-bold text-red-500">
                  AI Trainer for Multimodal Systems
                </span>{" "}
                at Handshake AI, evaluating domain-specific LLMs across web
                technologies, audio, and computer vision.
              </TypewriterParagraph>

              <TypewriterParagraph>
                Outside of tech, I keep active with heavy weightlifting,
                exploring new technologies, listening to music, and hitting the
                trails for a good hike."
              </TypewriterParagraph>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Tech Skills{" "}
              <span role="img" aria-label="computer">
                💻
              </span>
            </h2>

            <CollapsibleSkills />
            <div className="hidden md:block relative mt-6">
              <Image
                className="rounded shadow-md"
                src="/skills.jpg"
                alt="Visual representation of technical skills"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
