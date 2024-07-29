import { Button } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHeader() {
  return (
    <div className='w-5/6 px-[100px] m-auto mt-[120px] flex bg-homeHeader bg-no-repeat bg-bottom bg-contain'>
        <div className='w-5/12 pt-[100px] z-10'>
            <h1 className='text-[73px] font-bold leading-[80px] mb-14'> 
                Players rate, players get!
            </h1>
            <p>Welcome to Spin Logic Slots! Your go-to hub for top-notch online gambling info, expert ratings, and player reviews. Stay ahead with the latest casino news, including new game releases and exclusive bonuses. Subscribe now for insider access to tips and promotions that you won't find anywhere else. Join us and elevate your online gaming experience today!</p>
            <Button className='mt-14 bg-[#9D3FF6] text-primary-foreground rounded-[5px] px-10 py-1 animeButton'>
                SUBSCRIBE
            </Button>
        </div>
        <div> 
            <div className='relative left-[250px] z-10'>
                <div className='relative'>
                    <div className='absolute top-0 left-0 w-full h-full z-5'>
                        <Image
                            src="/header-border-circle.png"
                            alt="Thief"
                            width={100}
                            height={100}
                            className='absolute animate-move top-[-200px] left-[320px]'
                        />
                        <Image
                            src="/header-qt-circle.png"
                            alt="Thief"
                            width={80}
                            height={80}
                            className='absolute animate-move top-[100px] left-[500px]'
                        />
                        <Image
                            src="/header-wave-line.png"
                            alt="Thief"
                            width={30}
                            height={30}
                            className='absolute animate-move top-[220px] left-[-60px]'
                        />
                        <Image
                            src="/header-circle.png"
                            alt="Thief"
                            width={50}
                            height={50}
                            className='absolute animate-move top-[330px] left-[450px]'
                        />
                        <Image
                            src="/header-horizontal-wave.png"
                            alt="Thief"
                            width={120}
                            height={120}
                            className='absolute animate-move top-[70px] left-[-130px]'
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