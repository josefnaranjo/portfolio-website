import React from 'react'
import Image from 'next/image'

const mySkills = [
    { skill: "ReactJS" },
    { skill: "NextJS" },
    { skill: "NodeJS" },
    { skill: "ExpressJS" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Tailwind" },
    { skill: "Figma" },
    { skill: "WordPress" },
    { skill: "Python" },
    { skill: "MySQL" },
    { skill: "RESTful APIs" },
    { skill: "MongoDB" },
    { skill: "PostgreSQL" },
    { skill: "Bash/Shell" },
    { skill: "Jupyter Notebooks" },
    { skill: "NetworkX" },
    { skill: "Pandas" },
    { skill: "NumPy Arrays" },
    { skill: "PyTorch" },
    { skill: "BeautifulSoup"} ,
    { skill: "Linux" },
    { skill: "Git" },
]

const About = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-12 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Let me introduce myself <span role="img" aria-label="smile">😊</span></h1>
                    <p>
                        {" "}
                        My name is Jose Francisco Naranjo, and I am a {" "}
                        <span className='font-bold'>{"determined"}</span>,
                        <span className='font-bold'>{" ambitious"}</span>, and
                        <span className='font-bold'>{" self-motivated "}</span>
                        first-gen software developer based in the Central Valley of California.
                    </p><br />
                    <p>
                        I received my Bachelor of Science in Computer Science from California State University, Stanislaus, in 
                        December 2023. During my time at the university, I worked as an <span className='font-bold text-red-500'>undergraduate research associate </span> in the 
                        computer science department, where I focused on artificial intelligence, data science, and neural networks. 
                        From April 2024, I have been employed as a <span className='font-bold text-red-500'>Full-Stack Software Developer </span> at Bay Valley Foundation in Modesto, CA.
                    </p><br />
                    <p>
                        Not everything in life is about programming, though. I also enjoy learning about new emerging technologies 
                        on different internet platforms. In addition, I love working out, listening to music, and going on 
                        hikes occasionally. I need my dose of nature to keep me going! 
                    </p><br />
                    <p>
                        My passion for technology has led me to incredible <span className='font-bold text-red-500'>learning </span>
                        and <span className='font-bold text-red-500'>growth</span>, shaping me into a better technologist. 
                        I am excited to see where this passion will lead me, as I&apos;m open to new opportunities.
                    </p><br />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Tech Skills<span role="img" aria-label="computer"> 💻</span></h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {mySkills.map((item, index) => (
                            <p 
                                key={index} 
                                className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold transform transition-transform duration-200 hover:scale-110 hover:bg-red-300 select-none'
                            >
                                {item.skill}
                            </p>
                        ))}
                    </div>
                    <Image
                        className='hidden md:block md:relative md:top-2 md:left-52 md:z-0 md:rounded md:shadow-md'
                        src='/skills.jpg' 
                        alt='skills' width={200} 
                        height={200} 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About