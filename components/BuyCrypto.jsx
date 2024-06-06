import React from 'react'
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
const BuyCrypto = () => {
  return (
    <div className="swap-section">
                  <div className="mb-4">
                    <label className="block mb-1 text-xs font-medium">You Pay with</label>
                    <div className="flex items-center space-x-2  h-max bg-black rounded-lg">
                      <input
                        type="text"
                        placeholder="30,000"
                        className="flex items-center placeholder:text-xs placeholder:font-semibold border-none  appearance-none  justify-between space-x-2 p-2 bg-black rounded-lg w-full"
                      />
                      <Select.Root>
                        <Select.Trigger className="flex items-center justify-between px-4 py-2 bg-[#32216a] rounded w-max">
                          <Select.Value placeholder="USD" />
                          <ChevronDownIcon />
                        </Select.Trigger>
                        <Select.Content className="bg-gray-700 rounded-md mt-2">
                          <Select.Viewport>
                            <Select.Item value="usd" className="px-4 py-2 hover:bg-gray-600">
                              <Select.ItemText>USD</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                            <Select.Item value="eur" className="px-4 py-2 hover:bg-gray-600">
                              <Select.ItemText>EUR</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                            <Select.Item value="gbp" className="px-4 py-2 hover:bg-gray-600">
                              <Select.ItemText>GBP</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xs font-medium">You Get</label>
                    <div className="flex items-center space-x-2  h-max bg-black rounded-lg">
                      <input
                        type="text"
                        placeholder="28.50"
                        className="flex items-center placeholder:text-xs placeholder:font-semibold border-none  appearance-none  justify-between space-x-2 p-2 bg-black rounded-lg w-full"
                      />
                      <Select.Root>
                        <Select.Trigger className="flex items-center justify-between px-4 py-2 bg-[#32216a] rounded w-max">
                          <Select.Value placeholder="USDT" />
                          <ChevronDownIcon />
                        </Select.Trigger>
                        <Select.Content className="bg-gray-700 rounded-md mt-2">
                          <Select.Viewport>
                            <Select.Item value="usdt" className="px-4 text-sm flex py-2 hover:bg-gray-600">
                              <Select.ItemText>USDT</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                            <Select.Item value="btc" className="px-4 py-2 hover:bg-gray-600">
                              <Select.ItemText>BTC</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                            <Select.Item value="eth" className="px-4 py-2 hover:bg-gray-600">
                              <Select.ItemText>ETH</Select.ItemText>
                              <Select.ItemIndicator>
                                <CheckIcon />
                              </Select.ItemIndicator>
                            </Select.Item>
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
                    <label className="block mb-2 text-xs font-medium">Payment Details</label>
                  <div className="mb-4 bg-black rounded-lg p-2">
                    <div className="flex items-center p-2 text-xs font-medium rounded">
                      <Image src="/onramp.png" alt="Onramp" width={100} height={20} />
                      <span className="ml-4">Credit Card</span>
                      <span className="ml-auto">VISA</span>
                    </div>
                    <div className="flex items-center text-xs font-medium p-2  rounded mt-2">
                      <span>Deposit to account</span>
                      <span className="ml-auto">Username</span>
                    </div>
                  </div>
                  <div className="mb-4 bg-black flex flex-col gap-2 py-3 px-2 rounded-lg">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Total, including fee</span>
                      <span>30 USD</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span>You will get</span>
                      <span>29.5 USDT</span>
                    </div>
                  </div>
                  <div className="text-sm flex flex-col gap-4 mb-4 bg-green-900 opacity-55 px-2 py-2 rounded-xl">
                    <p className='px-6 text-xs font-semibold text-white'> <span className='text-[#00ff11] text-xs'>NOTICE:</span> Please only deposit on ERC721 and right the NFT collectible to this address, or your assets will be lost.</p>
                  </div>
                  <div className="text-gray-100 opacity-75 px-1 text-xs self-center mx-auto ">
                    <p className='text-[0.6rem] leading-none '>Disclaimer: You will now leave Peer2Play and be taken to Onramp. Services relating to payments are provided by which is a separate platform owned by a third party. Please read and agree to 's Terms of Use before using their service. For any questions relating to payments, please contact support com. Peer2Play does not assume any responsibility for any loss or damage caused by the use of this payment service.</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="disclaimer" className="mr-2" />
                    <label htmlFor="disclaimer" className='text-xs font-semibold text-white'>I have read and agree to the disclaimer.</label>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="px-16 text-md font-semibold  py-2 bg-blue-600 rounded-xl border">Buy Now</button>
                  </div>
                </div>
  )
}

export default BuyCrypto