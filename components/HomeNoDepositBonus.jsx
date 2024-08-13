import { Button } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

function HomeNoDepositBonus() {
  return (
    <div className='2xl:w-5/6 2xl:h-[800px] bg-[#9D3FF6] m-auto mt-24 rounded-[30px] p-10 2xl:p-24 text-[#FFFFFF]'>
        <h2 className='text-[36px] font-semibold'>What Is A No Deposit Bonus?</h2>
        <p className='my-8 text-[17px]'>No deposit bonuses are exactly what they describe: in return for signing up to a casino, you will receive either free spins or bonus credits, which will allow you to play at the casino without having to risk your own funds. What's more, you will also have the opportunity to win real money!</p>
        <div className='2xl:text-left text-center text-[#2B0054] font-medium 2xl:flex justify-between p-5 items-center m-auto rounded-[10px] bg-white mb-5'>
               <div className='2xl:w-2/5 2xl:flex items-center'>
                    <div className='m-auto w-[128px] h-[128px]'>
                        <Image 
                            src="/mro-icon-128.png"
                            alt=''
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className='2xl:ml-10'>
                        <p className='mb-2'>Mr. O Casino</p>
                        <p>No deposit bonuses are exactly what they describe: in return for signing up to a casino, you will receive</p>
                    </div>
               </div>
                <div className='text-center text-[24px] font-medium'>
                    <p>$125 Free Chip</p>
                    <p>+100% No Rules Bonus</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[120px] flex justify-center border border-[#9D3FF6] text-[#9D3FF6] text-[14px] font-bold rounded-[5px] py-3 my-3 '>
                        CODE
                    </div>
                    <Button className='w-[120px] bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] py-3 animeButton'>
                        REDEEM
                    </Button>
                </div>
            
            </div>
        <h2 className='text-[36px] font-semibold'>How Does A No Deposit Bonus Code Work?</h2>
        <p className='my-8 text-[17px]'>A no deposit bonus code is a unique sequence of numbers and letters that allows you to redeem a no deposit bonus. To use them, copy and paste the code from our site into the designated area of your chosen casino. This will usually be found on the casino’s registration form, or in the casino’s ‘cashier’ section.</p>
        <p className='text-[17px]'>PLEASE NOTE: You will find many bonuses on our site that do not have a bonus code displayed. Don’t be alarmed. In this case, you will be able to redeem your bonus in one of the following ways: by you sending a request to customer support, by selecting the bonus from a drop-down list (found in their registration form, or in their ‘cashier’ section at the casino), or the bonus will be credited automatically after you have registered an account. If your bonus does not require a bonus code, we will explain exactly how to claim it in our in-depth casino reviews.</p>
    </div>
  )
}

export default HomeNoDepositBonus