import React from 'react'
import Blog from './Blog'
import { Button } from '@headlessui/react'

function HomeBonusBlog({number}) {
    const bonusBlogs = [
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""}
    ]
    const expertBlogs = [
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""},
        {imageUrl:"", category:"", title:"", date:"", readTime:"", description:""}    ]
  return (
    <>
    {
        number === 1 ? (<div className='2xl:w-7/12 w-5/6 m-auto mt-24'>
            <h2 className='text-[36px] font-semibold'>No Deposit Bonus Blog</h2>
            <p className='text-17px my-10'>Yes, you can win real money using no deposit bonuses. Providing that players meet the terms and conditions, real money can be won up to the value stipulated by the ‘max cashout’ clause. The ability to withdraw your winnings is what differe</p>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bonusBlogs.map((blog, index) => (
                        <Blog key={index} data={blog} />
                    ))}
                </div>
            </div>
            <div className='text-center mt-10'>
                <Button className='mt-4 bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-[200px] py-2 animeButton'>
                    READ MORE
                </Button>
            </div>
        </div>) : (<div className='2xl:w-7/12 m-auto'>
                    <h2 className='text-[36px] font-semibold'>No Deposit Guides & Tips From The Experts</h2>
                    <p className='text-17px my-10'>We don’t just provide the best casino deals online, we want to help you win more, more often. To help you achieve this, our gambling experts regularly offer helpful advice on a wide range of topics surrounding casinos and bonuses.
                    So whether you are a novice seeking to learn the basics or a seasoned player looking to step up your bonus game, we’ve got you covered. </p>
                    <div className="container mx-auto p-0 2xl:p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {expertBlogs.map((blog, index) => (
                                <Blog key={index} data={blog} />
                            ))}
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Button className='mt-4 bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-[200px] py-2 animeButton'>
                            SEE ALL
                        </Button>
                    </div>
                </div>
            )
        
    }
    
    </>
  )
}

export default HomeBonusBlog