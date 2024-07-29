import { Button } from '@headlessui/react'
import React from 'react'

function HomeGames() {
  return (
    <div className='text-center'>
        <div className='w-1/4 m-auto'>
            <h2 className='text-[36px] font-semibold mb-5'>Games</h2>
            <p className='text-[17px] font-medium my-3'>Check out the best and most trusted names in the casino industry and give them your vote of confidence!</p>
        </div>
        <div className='bg-[#5865F2] h-[3px] w-[70px] m-auto'></div>
        <div className='h-[400px]'>
            
        </div>
        <Button className='bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] px-16 py-3 animeButton'>
            SEE ALL
        </Button>
    </div>
  )
}

export default HomeGames