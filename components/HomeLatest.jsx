import React from 'react'
import LatestCasino from './LatestCasino'

function HomeLatest() {

    const casinos = [
        {title:"Mr O Casino", imageUrl:"/mro-casino-landscape.png", freeSpins:"100"},
        {title:"Eternal Slots", imageUrl:"/eternal-slots-landscape.png", freeSpins:"100"},
        {title:"Goat Spins", imageUrl:"/goat-spins-landscape.png", freeSpins:"100"}
    ]

  return (
    <>
        <div className='2xl:w-5/6 m-auto rounded-[50px] mt-16 text-center'>
            <h2 className='text-[36px] font-bold'>Top Online Casino Bonuses</h2>
            <p className='font-semibold w-3/4 2xl:w-2/4 m-auto my-10 text-[17px]'>We’re always on the lookout for new no deposit bonus codes, including no deposit free spins and free chips. Explore our most recent additions here:</p>
            <div className='flex flex-col 2xl:flex-row items-center 2xl:justify-between 2xl:w-3/5 m-auto'>
                <LatestCasino casinos={casinos}/>
            </div> 
        </div>
        
    </>
  )
}

export default HomeLatest