import React from 'react'
import TransactionActivity from '../Components/TransactionActivity'
import Menu from '../Components/Menu'
import AceMarketplace from '../Components/AceMarketPlace'
import TransactionTable from '../Components/TransactionTable'

function TransactionPage() {
  return (
    <>
    <div className="relative flex items-end justify-end">
    <div className="bg-gray-900 text-white p-6 m-4 rounded-2xl w-[1160px] h-[390px]">
      <div className="">
        <h2 className="text-5xl font-bold my-8  ">PORTFOLIO</h2>
        <p className="text-gray-400">
          The world’s first and <span className="text-white text-bold">LARGEST DIGITAL MARKETPLACE</span> for crypto collectibles
          and non-fungible tokens (NFTs). 
        </p>
        <p className="text-gray-400">
        Buy, sell, and discover exclusive digital items.
        </p>
      </div>
      <div className='absolute top-[260px] left-[368px] w-[1140px]'>
            <TransactionActivity />
            <TransactionTable />
    </div>
      </div>
      </div>

      <div className=' top-5 left-5 fixed'>
        <AceMarketplace />
        <Menu />
    </div>
    </>
  )
}

export default TransactionPage