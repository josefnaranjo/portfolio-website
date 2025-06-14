import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { AiFillGoogleSquare } from "react-icons/ai";

const myProjects = [
  {
    name: "Communication Web Platform",
    description:
      "A full-stack communication platform developed with Next.js, PostgreSQL, Tailwind and Typescript, featuring Google Auth and Cloudinary integration 💻",
    image:"/mlm.jpg",
    platform: "https://github.com/Bay-Valley-Tech-Code-Academy/ReactFullstackApp_MLM",
    link: "https://mlm-comm-app.vercel.app/",
  },
  {
    name: "FireTube Video",
    description:
      "A full-stack web application developed using the MERN stack featuring JWT user verification and cookie authentication 💻",
    image: "/firetube.png",
    platform: "https://github.com/josefnaranjo/firetube-video-MERN",
    link: "",
  },
  {
    name: "Banking Application - Front-End",
    description:
      "Modern front-end application made with ReactJS and Tailwind. 🏦",
    image: "/bank.png",
    platform: "https://github.com/josefnaranjo/bank-app-react",
    link: "https://bank-webapp-react.netlify.app/",
  },
  {
    name: "JavaScript Music Player Web Application",
    description:
      "A music player built with JavaScript and CSS, providing various useful features for enjoying your favorite music. 🎸",
    image: "/musicplayer.png",
    platform: "https://github.com/josefnaranjo/music-app",
    link: "https://music-app-custom.netlify.app/",
  },
  {
    name: "Facebook Ego Network - Social Network Analysis",
    description:
      "This research project focused on social network analysis. I investigated the spread of misinformation within Facebook's social circles, utilizing Python and the NetworkX library. 📊",
    image: "/egonetwork.jpg",
    platform:
      "https://colab.research.google.com/drive/1Xs1ldCxQlJ43bo6WqOm4Q76QvKCZIcBw?usp=share_link#scrollTo=ErV_Th20slPw",
    link: "",
  },
  {
    name: "NLP Neural Network - Business Sentiment Analysis",
    description:
      "A research project focused on data analytics and neural networks. I implemented an NLP neural network to assess customer satisfaction with a particular business. 📈",
    image: "/nlp.jpg",
    platform:
      "https://colab.research.google.com/drive/1x69-r7vhSrpEnF3f7e404dRWrZyia85L",
    link: "",
  },
  {
    name: "AI Predictive Model - Population Forecasting",
    description:
      "This project was my first research project with the Computer Science department, where I applied artificial intelligence concepts. I utilized a Markov chain to predict demographic changes in an urban area. 📊",
    image: "/predictive.jpg",
    platform:
      "https://colab.research.google.com/drive/1qmx9rqTKki1y6F9I4FVPFwgXikBv7IlC#scrollTo=vqLKmS-000fa",
    link: "",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {myProjects.map((item, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                  <div className="md:w-1/2 mt-10">
                    <Link href={item.platform} target="_blank">
                      <Image
                        className="rounded-xl shadow-xl hover:opacity-70"
                        src={item.image}
                        alt="projectImg"
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-14">
                    <h1 className="text.4xl font-bold mb-6">{item.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={item.platform} target="_blank">
                        {item.platform.includes("github") ? (
                          <BsGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            size={30}
                          />
                        ) : (
                          <AiFillGoogleSquare
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            size={30}
                          />
                        )}
                      </Link>
                      {item.link && (
                        <Link href={item.link} target="_blank">
                          <BsArrowUpRightSquare
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            size={30}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
