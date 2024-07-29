import { Button } from '@headlessui/react'
import React from 'react'

function LatestCasino({casinos}) {
  return (
    <>
    {
        casinos.map((casino, index)=>(
            <div key={index} className='h-[440px] w-[302px] bg-white p-5 rounded-[10px]'>
                <div className='h-[150px] w-full bg-black rounded-[10px] mb-3'>

                </div>
                <h3>{casino.title}</h3>
                <p className='text-[24px] '><span className='text-[40px] block font-semibold relative top-[10px]'>{casino.freeSpins}</span> Free Spins</p>
                <Button className='border border-[#9D3FF6] text-[#9D3FF6] text-[14px] font-bold rounded-[5px] w-[200px] py-3 my-3 animeButton'>
                    CODECODE
                </Button>
                <Button className='bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-[200px] py-3 animeButton'>
                    CLAIM BONUSES
                </Button>
            </div>
        ))
    }
    </>
  )
}

export default LatestCasino