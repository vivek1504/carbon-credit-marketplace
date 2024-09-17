import React from 'react'
import AceMarketplace from '../Components/AceMarketPlace'
import Menu from '../Components/Menu'
import MintTokenComponent from '../Components/MintTokenComponent'

function MintToken() {
  return (
    <>
    <div className=' top-5 left-5 fixed'>
        <AceMarketplace />
        <Menu />
    </div>

    <div className="relative flex items-end justify-end">
    <div className="bg-gray-900 text-white p-6 m-4 rounded-2xl w-[1160px] h-[390px]">
    <div className="">
        <h2 className="text-4xl font-bold my-8  ">MINT YOUR TOKEN</h2>
        <p className="text-gray-400">
          The world’s first and <span className="text-white text-bold">LARGEST DIGITAL MARKETPLACE</span> for crypto collectibles
          and non-fungible tokens (NFTs). 
        </p>
        <p className="text-gray-400">
        Trade, Trust and Transform Our Planet
        </p>
      </div>
      <MintTokenComponent />
      </div>
      </div>
    </>
  )
}

export default MintToken