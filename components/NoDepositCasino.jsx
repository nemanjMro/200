import { Button } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

function NoDepositCasino({casinos}) {
  return (
    <>
        {
          casinos.map((casino, index) =>(
            <div key={index} className='2xl:text-left text-center font-medium 2xl:flex justify-between p-5 items-center w-5/6 m-auto rounded-[10px] bg-white 2xl:h-[100px] mb-5'>
                <div className='2xl:flex items-center'>
                  <div className='m-auto w-[56px] h-[56px]'>
                    <Image 
                      src={casino.imageUrl}
                      alt={casino.imageAlt}
                      width={56}
                      height={56}
                    />
                  </div>
                <p className='ml-3'>{casino.title}</p>
                </div>
                <p>{casino.deposit}</p>
                <p>{casino.code}</p>
                <p>{casino.provider}</p>
                <Button className='bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] px-8 py-3 animeButton'>
                REDEEM
                </Button>
            </div>
          ))  
        }
    </>
  )
}

export default NoDepositCasino