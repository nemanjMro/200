import { Button } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHeader() {
  return (
    <div className='2xl:w-5/6 2xl:px-[100px] m-auto 2xl:mt-[120px] 2xl:flex 2xl:bg-homeHeader bg-no-repeat bg-bottom bg-contain'>
        <div className='2xl:w-7/12 pt-[100px] z-10 px-10'>
            <h1 className='2xl:text-[60px] text-[36px] font-bold 2xl:leading-[80px] 2xl:mb-14'> 
            Best Spinlogic Slots and Top Casino Bonuses 2024
            </h1>
            <p className='my-5'>Welcome to your ultimate destination for the best online casino bonuses and top-notch Spinlogic slots of 2024! Here, we dive deep into the vibrant world of online gaming, bringing you comprehensive reviews of the best casinos and the most exciting Spinlogic games. Whether you're a seasoned player or just starting your gaming journey, our expert insights and detailed guides will help you find the perfect bonuses and games tailored to your preferences. Plus, you get to rate the games yourself. Discover exclusive offers, compare top casinos, and stay ahead with the latest trends and updates in the online casino world. Join us and elevate your gaming experience to new heights!</p>
            <Button className='mt-5 bg-[#9D3FF6] text-primary-foreground rounded-[5px] px-10 py-1 animeButton'>
                SUBSCRIBE
            </Button>
        </div>
        <div className='mt-10'> 
            <div className='relative 2xl:left-[100px] z-10'>
                <div className='relative'>
                    <div className='absolute top-0 left-0 w-full h-full z-5'>
                        <Image
                            src="/header-border-circle.png"
                            alt="Thief"
                            width={100}
                            height={100}
                            className='absolute 2xl:animate-move top-[-25px] left-[250px] 2xl:top-[-200px] 2xl:left-[320px]'
                        />
                        <Image
                            src="/header-qt-circle.png"
                            alt="Thief"
                            width={80}
                            height={80}
                            className='absolute 2xl:animate-move top-[350px] left-[220px] 2xl:top-[100px] 2xl:left-[500px]'
                        />
                        <Image
                            src="/header-wave-line.png"
                            alt="Thief"
                            width={30}
                            height={30}
                            className='absolute 2xl:animate-move top-[180px] left-[25px] 2xl:top-[220px] 2xl:left-[-60px]'
                        />
                        <Image
                            src="/header-circle.png"
                            alt="Thief"
                            width={50}
                            height={50}
                            className='absolute 2xl:animate-move top-[10px] left-[50px] 2xl:top-[330px] 2xl:left-[450px]'
                        />
                        <Image
                            src="/header-horizontal-wave.png"
                            alt="Thief"
                            width={120}
                            height={120}
                            className='absolute 2xl:animate-move top-[400px] left-[25px] 2xl:top-[70px] 2xl:left-[-130px]'
                        />
                    </div>
                    <Image
                        src="/character-thief.png"
                        alt="Thief"
                        width={500}
                        height={500}
                        className='relative z-10'
                    />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HomeHeader