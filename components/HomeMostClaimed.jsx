import React from 'react'
import NoDepositCasino from './NoDepositCasino'

function HomeMostClaimed() {
    const casinos = [
        {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
        {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
        {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
        {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"},
        {title: "Mr. O Casino", deposit:"$125 No Deposit", code:"CODE", provider:"RTG", imageUrl: "/mro-icon.png"}
      ]
  return (
    <div className='2xl:w-5/6 m-auto rounded-[50px] m-auto mt-16 text-center'>
        <h2 className='text-[36px] font-bold'>Most Claimed Deposit Casino Bonus Codes</h2>
        <p className='font-semibold w-3/4 2xl:w-2/4 m-auto my-10 text-[17px]'>Not found anything you fancy yet? Here is a collection of the most used casino bonus codes based on our daily visitor stats.</p>
        <div>
            <NoDepositCasino casinos={casinos}/>
        </div> 
    </div>
)
}

export default HomeMostClaimed