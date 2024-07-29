import { Button } from '@headlessui/react'
import React from 'react'

function Casino({casinos}) {
  return (
    <>
    {casinos.map((casino, index)=>(
    <div key={index} className='h-[500px] p-4 w-[32%] border-2 border rounded-[10px]'>
        <div className='w-full h-[300px] bg-black mb-3 rounded-[5px]'>

        </div>
        <h3 className='font-bold text-[18px]'>{casino.title}</h3>
        <p className='mt-3 mb-5'>Don't trust us. Try us.</p>
        <Button className='bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] px-8 py-2 animeButton'>
          CLAIM BONUSES
        </Button>
    </div>
    ))
    }
    </>
  )
}

export default Casino