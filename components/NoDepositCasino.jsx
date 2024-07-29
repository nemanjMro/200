import { Button } from '@headlessui/react'
import React from 'react'

function NoDepositCasino({casinos}) {
  return (
    <>
        {
          casinos.map((casino, index) =>(
            <div key={index} className='text-left font-medium flex justify-between p-5 items-center w-5/6 m-auto rounded-[10px] bg-white h-[100px] mb-5'>
                <p>{casino.title}</p>
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