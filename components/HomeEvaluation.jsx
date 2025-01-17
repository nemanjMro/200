import Image from 'next/image'
import React from 'react'

function HomeEvaluation({number}) {
  return (
    <>
    {
        number === 1 ? (
    <div className='2xl:w-5/6 h-[800px] bg-[#9D3FF6] m-auto mt-24 rounded-[30px] 2xl:flex 2xl:p-24'>
        <div className="2xl:w-2/4 text-center p-5">
            <div className='hidden 2xl:block'>
                <h2 className='text-[40px] font-semibold'>How We Evaluate &</h2>
                <h2 className='text-[40px] font-semibold'>Test Casino Bonuses</h2>
            </div>
            <div className='2xl:hidden'>
                <h2 className='text-[40px] font-semibold'>How We Evaluate & Test Casino Bonuses</h2>
            </div>
            <p className='my-8'>There is a reason why Spin Logic Slot is a leading casino directory in 2024. Our growing platform provides several benefits to elevate your online gambling experience. Here are the ones we are most proud of:</p>
        </div>
        <div className="m-auto w-3/4 2xl:w-2/4">
            <Image
                src="/cc 1.png"
                alt=""
                width={650}
                height={650}
            />
        </div>
    </div>
    ) : (
        <div className='2xl:flex w-5/6 m-auto mt-24 2xl:p-24'>
            <div className="2xl:w-2/4 m-auto w-3/4">
                <Image
                    src="/c3 1.png"
                    alt=""
                    width={553}
                    height={635}
                />
            </div>
            <div className="2xl:w-2/4 text-center p-5">
                <h2 className='text-[40px] font-semibold'>How We Evaluate &</h2>
                <h2 className='text-[40px] font-semibold'>Test Games</h2>
                <p className='my-8'>There is a reason why Spin Logic Slot is a leading casino directory in 2024. Our growing platform provides several benefits to elevate your online gambling experience. Here are the ones we are most proud of:</p>
            </div>
        </div>
    )
    }
    </>
  )
}

export default HomeEvaluation