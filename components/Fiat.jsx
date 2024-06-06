import React from 'react'
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Gem } from 'lucide-react';
import { Bitcoin } from 'lucide-react';
const Fiat = () => {
  return (
    <>
                      <div className="mb-4">
                      <label className="block mb-1 text-xs font-medium ">Deposit currency</label>
                    <div className="flex items-center justify-between space-x-2  p-2 bg-black border rounded-lg ">
                      <div className='flex items-center gap-1'>
                      <Bitcoin className='w-4 h-max' />
                      {/* <Image src="/btc.png" alt="BTC" width={20} height={20} /> */}
                      <span className=' text-xs h-max font-semibold'>BTC</span>
                      </div>
                      
                      <div className='flex gap-1 items-center'>
                      <span className="ml-auto text-xs text-gray-400 opacity-80 font-semibold ">Balance</span>
                      <span className="ml-auto text-sm font-medium text-gray-100 mr-2">0</span>
                        <ChevronRight className='w-4 h-4 text-white' />
                      </div>
                    </div>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 text-xs font-medium">Choose a Payment Method</label>
                        <div className="flex items-center space-x-2 w-[25.5rem] p-2 bg-gray-400 rounded">
                          <Image src="/onramp.png" alt="Onramp" width={100} height={20} />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 text-xs font-medium">Enter Amount</label>
                        <input
                          type="text"
                          placeholder="$ 50"
                          className="flex items-center placeholder:text-sm justify-between space-x-2 p-2 bg-black border rounded-lg w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 text-xs font-medium">Popular Amounts</label>
                        <div className="flex space-x-2 text-xs font-semibold font-mono ">
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max  rounded-full items-center"><Gem className='w-3 h-3' />100 USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3 ' />200 USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3' />500 USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3' />1000 USDT</button>
                    </div>
                      </div>
                      <div className="flex justify-center mb-10">
                        <button className="px-16 text-md font-semibold mt-4 py-2 bg-blue-600 rounded-xl border">Confirm</button>
                      </div>
                    </>
  )
}

export default Fiat