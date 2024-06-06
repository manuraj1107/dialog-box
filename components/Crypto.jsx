import React from 'react'
import * as Select from '@radix-ui/react-select';
import { ChevronRight } from 'lucide-react';
import { Bitcoin } from 'lucide-react';
import { Gem } from 'lucide-react';
import { Info } from 'lucide-react';
import { QrCode } from 'lucide-react';
import Image from 'next/image';

const Crypto = () => {
  return (
    <>
                    <div className="mb-4">
                    <label className="block mb-1 text-xs font-medium ">Deposit currency</label>
                    <div className="flex items-center justify-between space-x-2 p-2 bg-black border rounded-lg ">
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
                    <label className="block mb-1 text-xs font-medium">Trending Coins</label>
                    <div className="flex space-x-2 text-xs font-semibold font-mono ">
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max  rounded-full items-center"><Gem className='w-3 h-3' />USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3 ' />USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3' />USDT</button>
                      <button className="px-2  border-2 border-gray-500  bg-gray-800 flex gap-1 w-max rounded-full items-center"><Gem className='w-3 h-3' />USDT</button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-xs">Choose Network</label>
                    <Select.Root>
                      <Select.Trigger className="px-4 py-2 w-full flex justify-between border text-sm font-semibold items-center bg-gray-800 rounded-lg">Bitcoin <ChevronRight /></Select.Trigger>
                      <Select.Content className='bg-black w-[25.5rem] px-1 text-sm py-2'>
                        <Select.Item className='w-full rounded-md p-2 hover:bg-gray-800' value="bitcoin">Bitcoin</Select.Item>
                        <Select.Item className='w-full rounded-md p-2 hover:bg-gray-800' value="ethereum">Ethereum</Select.Item>
                        <Select.Item className='w-full rounded-md p-2 hover:bg-gray-800' value="litecoin">Litecoin</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-4 px-8 py-2 h-28 bg-[#252e39] rounded-lg">
                    {/* <Image src="/qr.png" alt="QR Code" width={100} height={100} /> */}
                    <QrCode className='w-20 h-20' />
                    <div className="flex flex-col text-sm font-semibold h-full py-1 pb-3 justify-between">
                      <p className='text-slate-400 py-1'>Deposit Address</p>
                      <div className='flex bg-[#404a52] px-2 py-2 justify-between w-64 items-center rounded-lg gap-2'>
                      <span className="block text-sm">094321kjdqlwn23xxxxx</span>
                      <button className="px-2 py-1 text-xs font-semibold bg-blue-700 rounded">Copy</button>
                      </div>
                    </div>
                  </div>
                  <div className=" text-sm flex flex-col gap-4">
                    <p className='px-6 text-xs font-semibold text-gray-300'><span className='text-[#00ff11] text-xs'>NOTICE:</span> Send only BTC to this address. Coins will be deposited after 2 network confirmations.</p>
                    <p className='text-green-100 opacity-55 text-xs self-center mx-auto text-center flex items-center gap-1'><Info className='w-3 h-3 text-[#00ff11]' /> Do not deposit any currency other than BCD</p>
                  </div>
                    </>
  )
}

export default Crypto