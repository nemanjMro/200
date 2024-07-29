import React from 'react'
import HomeEsclusiveNoDepositBonus from './HomeEsclusiveNoDepositBonus'

function HomeExclusiveNoDepositBonuses() {
    const bonuses =[
        {freeSpins: "100 Free Spins", system:"Affiliate Tracking System", performance:"Performance-Based Commission", support:"Affiliate Support And Resources", reporting:"Analytics and Reporting", imageUrl:""},
        {freeSpins: "100 Free Spins", system:"Affiliate Tracking System", performance:"Performance-Based Commission", support:"Affiliate Support And Resources", reporting:"Analytics and Reporting", imageUrl:""},
        {freeSpins: "100 Free Spins", system:"Affiliate Tracking System", performance:"Performance-Based Commission", support:"Affiliate Support And Resources", reporting:"Analytics and Reporting", imageUrl:""},
        {freeSpins: "100 Free Spins", system:"Affiliate Tracking System", performance:"Performance-Based Commission", support:"Affiliate Support And Resources", reporting:"Analytics and Reporting", imageUrl:""},
        {freeSpins: "100 Free Spins", system:"Affiliate Tracking System", performance:"Performance-Based Commission", support:"Affiliate Support And Resources", reporting:"Analytics and Reporting", imageUrl:""}
    ]
  return (
    <div className='w-5/6 h-[700px] bg-[#9D3FF6] m-auto mt-24 rounded-[30px] text-[#FFFFFF]'>
        <div className='w-full h-[100px] border-b border-[#FFFFFF] flex items-center justify-center'>
            <div className='flex items-center justify-around w-5/6 font-bold'>
                <p>Biggest Free Spins Bonus</p>
                <p>Lowest Wagering Requirement</p>
                <p>Biggest Cashout Opportunities</p>
                <p>Biggest Free Chip</p>
                <p>Biggest Free Spins on Deposit</p>
            </div>
        </div>
        <div className='flex p-24 justify-between'>
            <HomeEsclusiveNoDepositBonus bonuses={bonuses}/>
        </div>
    </div>
  )
}

export default HomeExclusiveNoDepositBonuses