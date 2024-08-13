import { Button } from '@headlessui/react'
import React from 'react'

function HomeReqAndAdvice({number}) {
    const text = {
        firstText: `Wagering requirements are a common term and condition attached to no deposit bonuses. Often referred to as ‘playthrough’, this term and condition requires you to play through the value of your bonus a number of times before you can withdraw your winnings. For example, if you have a $10 bonus with a wagering requirement set at 20x, you have to wager a sum-total of $200 using your bonus ($10 x 20).
Only after you meet the wagering requirements will you be able to withdraw your winnings. Attempting to withdraw early may result in your bonus being revoked. In extreme cases, online casinos may even close your account and blacklist you from the casino.

Most no deposit bonuses restrict you to a selection of eligible games. If you try to wager your bonus on a game that is not eligible, you will forfeit your bonus. It’s essential that you understand which games are permitted before you attempt to play them using your bonus.
A ‘max cashout’ clause limits the amount you are allowed to withdraw using your bonus. For instance, if the ‘max cashout’ clause of your bonus is $25, and you win $40, you will only be able to withdraw $25. The remaining $15 will be forfeited. This clause is in place to deter ‘bonus abuse’ (what is bonus abuse?).`,
        secondText: `Wagering requirements are a common term and condition attached to no deposit bonuses. Often referred to as ‘playthrough’, this term and condition requires you to play through the value of your bonus a number of times before you can withdraw your winnings. For example, if you have a $10 bonus with a wagering requirement set at 20x, you have to wager a sum-total of $200 using your bonus ($10 x 20).
Only after you meet the wagering requirements will you be able to withdraw your winnings. Attempting to withdraw early may result in your bonus being revoked. In extreme cases, online casinos may even close your account and blacklist you from the casino.

Most no deposit bonuses restrict you to a selection of eligible games. If you try to wager your bonus on a game that is not eligible, you will forfeit your bonus. It’s essential that you understand which games are permitted before you attempt to play them using your bonus.
A ‘max cashout’ clause limits the amount you are allowed to withdraw using your bonus. For instance, if the ‘max cashout’ clause of your bonus is $25, and you win $40, you will only be able to withdraw $25. The remaining $15 will be forfeited. This clause is in place to deter ‘bonus abuse’ (what is bonus abuse?).`
    };
  return (
    <>
    {
        number === 1 ? (
            <div className="whitespace-pre-line 2xl:w-5/6 m-auto p-10 2xl:px-16 mt-24">
                <h2 className="text-[36px] font-semibold">What Are No Deposit Bonus Wagering Requirements?</h2>
                <p className="my-10 text-[17px] font-medium">{text.firstText}</p>
                {/* <Button className='mt-4 bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-[200px] py-2 animeButton'>
                    SEE ALL
                </Button> */}
            </div> 
        ) : (
            <div className="whitespace-pre-line m-auto p-10 2xl:px-16 mt-24 bg-[#9D3FF6] text-[#FFFFFF]">
                <div className='2xl:w-5/6 m-auto py-24'>
                    <h2 className="text-[36px] font-semibold">Advice For Our Visitors</h2>
                    <p className="my-10 text-[17px] font-medium">{text.secondText}</p>
                    {/* <Button className='mt-4 bg-[#FFFFFF] text-[#9D3FF6] text-[14px] font-bold rounded-[5px] w-[200px] py-2 animeButton'>
                        SEE ALL
                    </Button> */}
                </div>
            </div> 
        )
    }
         
    </>    
)
}

export default HomeReqAndAdvice