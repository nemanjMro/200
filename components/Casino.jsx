import { Button } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Casino({casinos}) {
  return (
    <>
    {casinos.map((casino, index)=>(
    <div key={index} className='mb-5 2xl:mb-0 h-[500px] p-4 2xl:w-[32%] border-2 border rounded-[10px]'>
        <div className='w-full h-[300px] bg-black mb-3 rounded-[5px]'>
          <Image src={casino.imageUrl}
            alt=''
            width={300}
            height={300}
          />
        </div>
        <h3 className='font-bold text-[18px]'>{casino.title}</h3>
        <p className='mt-3 mb-5'>{casino.text}.</p>
        <Link href={casino.casinoLink} target='_blank'>
          <Button className='bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] px-8 py-2 animeButton'>
            CLAIM BONUSES
          </Button>
        </Link>
    </div>
    ))
    }
    </>
  )
}

export default Casino