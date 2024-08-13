import React from 'react'
import NoDepositCasino from './NoDepositCasino'

function NoDepositCasinos() {

  const casinos = [
    {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
    {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
    {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
    {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
    {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"}
  ]

  return (
    <div className='2xl:w-5/6 m-auto rounded-[50px] m-auto mt-16 text-center'>
        <h2 className='text-[36px] font-bold'>No Deposit Bonus Casinos</h2>
        <p className='font-semibold 2xl:w-2/4 m-auto my-10 text-[17px]'>Are you looking for the best no deposit casinos in your country? You’ll find them all right here. Browse these exceptional bonuses and play risk-free!</p>
        <div>
            <NoDepositCasino casinos={casinos} />
        </div>
    </div>
  )
}

export default NoDepositCasinos