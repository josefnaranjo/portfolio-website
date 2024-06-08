'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-54 sm:py-34'>
            <div className='md:w-1/2 md:mt-4'>
                <Image 
                    className='rounded-full shadow-2xl' 
                    src="/selfie.jpg" 
                    alt="Profile Picture" 
                    width={300} 
                    height={300} />
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hello, I&apos;m Jose!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I am a <span className='font-semibold text-red-500'>Full-Stack Software Developer {" "}</span>
                    based in the San Joaquin county, CA. I am dedicated to crafting innovative software solutions 
                    that make a meaningful difference in the lives of Californians. Let&apos;s work together to create 
                    impactful change through technology.
                </p>
                <Link
                    to='projects'
                    className='text-neutral-100 font-semibold px-6 py-3 bg-red-600 rounded shadow hover:bg-red-700 cursor-pointer'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <Link
                to='about'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={35} className='animate-bounce cursor-pointer' />
            </Link>
        </div>
    </section>
  )
}

export default Hero