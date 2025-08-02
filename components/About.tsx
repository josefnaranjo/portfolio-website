"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import CollapsibleSkills from "./CollapsibleSkills";

const TypewriterParagraph = dynamic(() => import("./TypewriterParagraph"), {
  ssr: false,
});

const About = () => {
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
                My name is Jose Francisco Naranjo, and I am a
                <span className="font-bold"> determined</span>,
                <span className="font-bold"> ambitious</span>, and
                <span className="font-bold"> self-motivated</span>{" "}
                first-generation software developer based in the Central Valley
                of California.
              </TypewriterParagraph>

              <TypewriterParagraph>
                I earned my Bachelor of Science in Computer Science from
                California State University, Stanislaus, in December 2023. While
                in college, I worked as an
                <span className="font-bold text-red-500">
                  {" "}
                  undergraduate research associate{" "}
                </span>
                in the computer science department, where I focused on
                artificial intelligence, data science, and neural networks.
              </TypewriterParagraph>

              <TypewriterParagraph>
                From February 2024 to August 2024, I worked as a
                <span className="font-bold text-red-500">
                  {" "}
                  Full-Stack Software Developer{" "}
                </span>
                at Bay Valley Tech in Modesto, CA, assisting a nonprofit in
                improving community tech capacity through hands-on web
                application development and mentorship.
              </TypewriterParagraph>

              <TypewriterParagraph>
                I worked as a{" "}
                <span className="font-bold text-red-500">
                  Freelance Back-End Developer
                </span>{" "}
                for a healthcare startup later on, where I helped develop and
                deploy a machine learning model to identify diseases from user
                symptoms using FAISS and Pinecone—improving my cloud and
                back-end skills.
              </TypewriterParagraph>

              <TypewriterParagraph>
                Currently, I am working as a{" "}
                <span className="font-bold text-red-500">
                  Web Developer and Social Media Manager
                </span>{" "}
                at The Veritas Institute, where I am prototyping a modern
                nonprofit website using Next.js and Tailwind. I oversee the
                design and development of the site to promote ethical reporting
                in academia.
              </TypewriterParagraph>

              <TypewriterParagraph>
                Not everything in life is about programming, though. I also
                enjoy learning about new emerging technologies on different
                internet platforms. In addition, I love working out, listening
                to music, and going on hikes occasionally. I need my dose of
                nature to keep me going!
              </TypewriterParagraph>

              <TypewriterParagraph>
                My passion for technology has led me to incredible
                <span className="font-bold text-red-500"> learning </span> and
                <span className="font-bold text-red-500"> growth</span>, shaping
                me into a better technologist. I am excited to see where this
                passion will lead me, as I'm open to new opportunities.
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
            <div className="hidden md:block relative">
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
