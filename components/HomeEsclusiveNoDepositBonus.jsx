import { Button } from '@headlessui/react'
import React from 'react'

function HomeEsclusiveNoDepositBonus({bonuses}) {
  return (
    <>
        {
            bonuses.map((bonus, index)=>(
                <div key={index} className='bg-[#FFFFFF] my-3 2xl:w-[19%] rounded-[10px] pb-[20px]'>
                    <div className='h-[120px] bg-black rounded-t-[10px]'>

                    </div>
                    <div className='text-center text-[#2B0054] text-[14px] w-5/6 m-auto'>
                        <p className='mt-4 text-[24px]'>{bonus.freeSpins}</p>
                        <p className='mt-4'>{bonus.system}</p>
                        <p className='mt-4'>{bonus.performance}</p>
                        <p className='mt-4'>{bonus.support}</p>
                        <p className='mt-4'>{bonus.reporting}</p>
                        <Button className='mt-4 bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-4/5 py-2 animeButton'>
                            CLAIM BONUSES
                        </Button>
                    </div>
                </div>
            ))
        }
    </>
)
}

export default HomeEsclusiveNoDepositBonus