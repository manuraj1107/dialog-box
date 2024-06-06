'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import { X } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';
import { ArrowDownUp } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Bitcoin } from 'lucide-react';
import { Gem } from 'lucide-react';
import { Info } from 'lucide-react';
import { QrCode } from 'lucide-react';
import Image from 'next/image';

const Wallet = () => {
  const [selectedTab, setSelectedTab] = useState('crypto');
  

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Open Wallet</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          
          <div className="relative bg-gradient-to-t from-[#010001] to-[#340c3a] text-white rounded-3xl  min-w-72 max-w-[488px]  ">
          <div className='flex justify-between mt-2 mr-3 h-max '>
            <div></div>
          <div className='flex gap-2 align-middle h-max w-max  '>
            <Dialog.Title className="text-sm text-gray-600  self-start text-start h-max ">Transactions</Dialog.Title>
            <Dialog.Close asChild>
              <X className="h-5 w-4" />
            </Dialog.Close>
            </div>
            </div>
          <div className='px-10 py-4'>
            
            <Dialog.Title className="text-2xl font-sans font-semibold mb-4 w-max">WALLET</Dialog.Title>
            
            <Tabs.Root className="w-full" defaultValue="deposit">
              <Tabs.List className="flex space-x-4 justify-between mb-4">
                <div className='flex gap-2 pl-12'>
                <Tabs.Trigger className="px-4 py-2 text-sm w-max h-max flex gap-1 font-bold font-mono  border-gray-100 border-2 bg-blue-800 rounded" value="deposit">
                 <HandCoins className='h-max w-5' /> Deposit
                 </Tabs.Trigger>
                <Tabs.Trigger className="px-4 py-2 text-sm w-max h-max flex gap-1 border-gray-100 border-2 font-bold font-mono  rounded" value="swap">
                  <ArrowLeftRight className='h-max w-5' /> Swap
                </Tabs.Trigger>
                </div>
                <Tabs.Trigger className=" p-2 w-max h-max border-gray-100 border-2 font-bold rounded" value="swap">
                  <ArrowDownUp className='h-max w-5 rounded-full border' />
                </Tabs.Trigger>
              </Tabs.List>
            <div className=' w-80 mb-4 opacity-75 mx-auto border border-slate-400'></div>
              <Tabs.Content className="tab-content" value="deposit">
                <div className="wallet-section">
                  <div className="flex space-x-2 w-max mb-4 font-mono font-bold mx-auto text-sm h-max border-2 bg-black rounded-md">
                    <button className={`px-6 py-1  rounded ${selectedTab === 'crypto' ? 'bg-blue-800 border' : ''}`} onClick={() => setSelectedTab('crypto')}>Crypto</button>
                    <button className={`px-6 py-1  rounded ${selectedTab === 'fiat' ? 'bg-blue-800 border' : ''}`} onClick={() => setSelectedTab('fiat')}>Fiat</button>
                    <button className={`px-6 py-1  rounded ${selectedTab === 'nft' ? 'bg-blue-800 border' : ''}`} onClick={() => setSelectedTab('nft')}>NFT</button>
                  </div>
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
                </div>
              </Tabs.Content>
              <Tabs.Content className="tab-content" value="swap">
                <p>Swap functionality coming soon...</p>
              </Tabs.Content>
            </Tabs.Root>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Wallet;
