import React from 'react'
import Casino from './Casino'

function TopCasinos() {

  const casinos = [
    {title: "Mr O Casino", imageUrl: ""},
    {title: "Eternal Slots", imageUrl: ""},
    {title: "Goat Spins", imageUrl: ""}
  ]

  return (
    <div className='w-5/6 bg-white rounded-[50px] m-auto mt-16 p-24 text-center'>
        <h2 className='text-[36px] font-bold'>Top Three No Deposit Casino For United States</h2>
        <p className='font-semibold w-2/4 m-auto my-10 text-[17px]'>Are you looking for the best no deposit casinos in your country? You’ll find them all right here. Browse these exceptional bonuses and play risk-free!</p>
        <div className='flex justify-between w-4/6 m-auto'>
            <Casino casinos={casinos}/>
        </div>
    </div>
  )
}

export default TopCasinos