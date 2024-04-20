import React from 'react'

function Newsletter() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-2'>
                <div className='lg:col-span-2 py-6'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-center'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml sm:ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
                    </div>
                    <p> We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter