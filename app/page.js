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
import Fiat from '@/components/Fiat';
import Crypto from '@/components/Crypto';
import BuyCrypto from '@/components/BuyCrypto';
import Deposit from '@/components/Deposit';

const Wallet = () => {
  

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Open Wallet</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          
          <div className="relative bg-gradient-to-t from-[#010001] to-[#340c3a] text-white rounded-3xl   h-max  min-w-72 max-w-[488px]  ">
          <div className='flex justify-between mt-2 mr-3 h-max '>
            <div></div>
          <div className='flex gap-2 align-middle h-max w-max  '>
            <Dialog.Title className="text-sm text-gray-400  self-start text-start h-max ">Transactions</Dialog.Title>
            <Dialog.Close asChild>
              <X className="h-5 w-4" />
            </Dialog.Close>
            </div>
            </div>
          <div className='px-10 py-4'>
            
            <Dialog.Title className="text-2xl font-sans font-semibold mb-4 w-max">WALLET</Dialog.Title>
            
            <Tabs.Root className="w-full" defaultValue="deposit">
              <Tabs.List className="flex space-x-4 justify-between mb-4">
                <div className='flex gap-2 mx-auto '>
                <Tabs.Trigger className="px-2 py-2 text-sm w-max h-max flex gap-2 font-bold font-mono  border-gray-100 border-2 bg-blue-800 rounded" value="deposit">
                 <HandCoins className='h-max w-5' /> Deposit
                 </Tabs.Trigger>
                <Tabs.Trigger className="px-2 py-2 text-sm w-max h-max flex gap-2 border-gray-100 border-2 font-bold font-mono  rounded" value="buy crypto">
                  <ArrowLeftRight className='h-max w-5' /> Buy Crypto
                </Tabs.Trigger>
                <Tabs.Trigger className="px-2 py-2 text-sm w-max h-max flex gap-2 border-gray-100 border-2 font-bold font-mono  rounded" value="swap">
                <ArrowDownUp className='h-5 w-5  rounded-full ' /> Swap
                </Tabs.Trigger>
                </div>
                
              </Tabs.List>
            <div className=' w-80 mb-4 opacity-75 mx-auto border border-slate-400'></div>
              <Tabs.Content className="tab-content" value="deposit">
                <Deposit />
              </Tabs.Content>
              
              <Tabs.Content className="tab-content w-full" value="buy crypto">
                <BuyCrypto />
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
