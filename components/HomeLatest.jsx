import React from 'react'
import LatestCasino from './LatestCasino'

function HomeLatest() {

    const casinos = [
        {title:"Mr O Casino", imageUrl:"", freeSpins:"100"},
        {title:"Eternal Slots", imageUrl:"", freeSpins:"100"},
        {title:"Goat Spins", imageUrl:"", freeSpins:"100"}
    ]

  return (
    <>
        <div className='w-5/6 m-auto rounded-[50px] m-auto mt-16 text-center'>
            <h2 className='text-[36px] font-bold'>Latest No Deposit Casino Bonuses in July 2024</h2>
            <p className='font-semibold w-2/4 m-auto my-10 text-[17px]'>We’re always on the lookout for new no deposit bonus codes, including no deposit free spins and free chips. Explore our most recent additions here:</p>
            <div className='flex justify-between w-3/5 m-auto'>
                <LatestCasino casinos={casinos}/>
            </div> 
        </div>
        
    </>
  )
}

export default HomeLatest