import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from './SlideUp'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'

const myProjects = [
    {
        name: "FireTube Video",
        description: "Full-Stack web app made using MERN stack, JWT user verification, and cookie authentication",
        image: "/firetube.png",
        platform: "https://github.com/josefnaranjo/firetube-video-MERN.git",
        link: ""
    },
    {
        name: "Banking Application - Front-End",
        description: "Modern front-end application made with ReactJS and Tailwind",
        image: "/bank.png",
        platform: "https://github.com/josefnaranjo/bank-app-react.git",
        link: "https://bank-webapp-react.netlify.app/"
    },
    {
        name: "Facebook Ego Network - Social Network Analysis",
        description: "Spread of misinformation among circles of friends",
        image: "/egonetwork.jpg",
        platform: "https://colab.research.google.com/drive/1Xs1ldCxQlJ43bo6WqOm4Q76QvKCZIcBw?usp=share_link#scrollTo=ErV_Th20slPw",
        link: ""
    },
    {
        name: "NLP Neural Network - Business Sentiment Analysis",
        description: "Implementation of a NLP Neural network to assess customer satisfaction with a particular business.",
        image: "/nlp.jpg",
        platform: "https://colab.research.google.com/drive/1x69-r7vhSrpEnF3f7e404dRWrZyia85L",
        link: ""
    },
    {
        name: "AI Predictive Model - Population Forecasting",
        description: "Implementation of a Markov chain to forecast population shifts in an urban center",
        image: "/predictive.jpg",
        platform: "https://colab.research.google.com/drive/1qmx9rqTKki1y6F9I4FVPFwgXikBv7IlC#scrollTo=vqLKmS-000fa",
        link: ""
    }
]
const Project = () => {
  return (
    <section id='projects'>
        <h1 className='text-center font-bold text-4xl'>Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col space-y-28'>
            {myProjects.map((item, index) => {
                return (
                    <div key={index}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                            <div className='flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animate-delay-2'>
                                <div className='md:w-1/2 mt-10'>
                                    <Link href={item.platform} target='_blank'>
                                        <Image
                                            className='rounded-xl shadow-xl hover:opacity-70'
                                            src={item.image} 
                                            alt='projectImg' 
                                            width={1000} 
                                            height={1000} 
                                        />
                                    </Link>
                                </div>
                                <div className='md:w-1/2 mt-14'>
                                    <h1 className='text.4xl font-bold mb-6'>{item.name}</h1>
                                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{item.description}</p>
                                    <div className='flex flex-row align-bottom space-x-4'>
                                        <Link href={item.link} target='_blank'>
                                            <BsGithub
                                                className='hover:-translate-y-1 transition-transform cursor-pointer'
                                                size={30}
                                            />
                                        </Link>
                                        <Link href={item.platform} target='_blank'>
                                        <BsArrowUpRightSquare
                                                className='hover:-translate-y-1 transition-transform cursor-pointer'
                                                size={30}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Project