import React from 'react'
import { useState } from 'react';
import Fiat from '@/components/Fiat';
import Crypto from '@/components/Crypto';


const Deposit = () => {
    const [selectedTab, setSelectedTab] = useState('crypto');
  return (
    <div className="wallet-section">
                  <div className="flex space-x-2 w-max mb-4 font-mono font-bold mx-auto text-sm h-max border-2 bg-black rounded-md">
                    <button className={`px-6 py-1  rounded ${selectedTab === 'crypto' ? 'bg-blue-800 border' : ''}`} onClick={() => setSelectedTab('crypto')}>Crypto</button>
                    <button className={`px-6 py-1  rounded ${selectedTab === 'fiat' ? 'bg-blue-800 border' : ''}`} onClick={() => setSelectedTab('fiat')}>Fiat</button>
                    
                  </div>
                  {selectedTab === 'crypto' && (
                    <Crypto />
                  )}

{selectedTab === 'fiat' && (
                    <Fiat />
                  )}
                  
                </div>
  )
}

export default Deposit