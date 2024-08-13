import React from 'react'
import Casino from './Casino'

function TopCasinos() {

  const casinos = [
    {title: "Mr O Casino", imageUrl: "/mro-casino-portrait.png", text:"$100 Welcome Chip", casinoLink:"https://mrocasino.com/"},
    {title: "Eternal Slots", imageUrl: "/eternal-slots-portrait.png", text:"Free Spins Forever", casinoLink:"https://eternalslots.com/"},
    {title: "Goat Spins", imageUrl: "/goat-spins-portrait.png", text:"45 No Deposit Spins", casinoLink:"https://goatspins.com/"}
  ]

  return (
    <div className='2xl:w-5/6 bg-white rounded-[50px] m-auto mt-16 p-12 2xl:p-24 text-center'>
        <h2 className='text-[36px] font-bold'>Best Online Casinos that Payout for Real</h2>
        <p className='font-semibold 2xl:w-2/4 m-auto my-10 text-[17px]'>Are you looking for the best no deposit casinos in your country? You’ll find them all right here. Browse these exceptional bonuses and play risk-free!</p>
        <div className='2xl:flex justify-between 2xl:w-4/6 m-auto'>
            <Casino casinos={casinos}/>
        </div>
    </div>
  )
}

export default TopCasinos