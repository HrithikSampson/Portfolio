"use client"
import React from 'react'
import Image from 'next/image'
import { heroIconComponents } from '@/assets/icons'
import { useMotionValue } from 'framer-motion'
const Hero = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  return (
    <div className='h-screen grid place-items-center'>
        <div>
            <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
                <div className='flex items-center justify-center'>
                    <Image
                        src="/person.png"
                        alt="Person"
                        width={400}
                        height={400}
                        priority
                        className='h-auto w-[150px]'
                    />
                </div>
                <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500'> My Name is Hrithik Sampson &</h1>
                <p className='text-lg tracking-wider'>I like animations 😊</p>
            </div>
            <div className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 transition-colors'>
                    {Object.keys(heroIconComponents).map((icon)=>{
                        return (
                            <a href="#" key={icon} className='hover:bg-red-400 hover:text-white rounded-lg'>
                                {React.createElement(heroIconComponents[icon])}
                            </a>
                        )
                    })}
            </div>
            <a href="#" className='mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500'>Talk to me</a>
        </div>
    </div>
  )
}

export default Hero