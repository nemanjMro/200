import Image from 'next/image'
import React from 'react'

function TrustUs() {
  return (
    <div className='w-5/6 m-auto relative top-[100px]'>
        <div className='w-5/6 h-[800px] border rounded-[50px] bg-[#FBF2FF] m-auto border-[#9D3FF6] p-16'>
            <div className='text-center w-7/12 m-auto'>
                <Image
                src="/logo.svg"
                alt="logo free casino games"
                width={130}
                height={30}
                className='m-auto'
                />
                <h2 className='my-5 text-[40px] font-semibold'>Why You Can Trust Us</h2>
                <p className=''>There is a reason why Spin Logic Slot is a leading casino directory in 2024. Our growing platform provides several benefits to elevate your online gambling experience. Here are the ones we are most proud of:</p>
            </div>
        </div>
    </div>
  )
}

export default TrustUs