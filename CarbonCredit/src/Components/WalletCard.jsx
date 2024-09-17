import React from 'react'
import { motion } from 'framer-motion'
import RainCoins1 from '../assets/RainCoins1.png'
import RainCoin from '../assets/RainCoin.png'
import Wallet2 from '../assets/Wallet2.png'


function WalletCard() {
  return (
    <>

        <div className='flex space-x-3 mt-10'>
        <div className=' mt-3 bg-white w-[250px] rounded-2xl  h-[210px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className="relative bg-gray-900 h-[130px] rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={RainCoin}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Coin Available</p>
        <p className='text-black text-sm'>1289.7</p>

   </div>
    </div>
</div>


<div className=' mt-3 bg-white w-[250px] rounded-2xl  h-[210px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className="relative bg-gray-900 h-[130px] rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={Wallet2}
          className="w-[130px]  h-[120px] ml-12 rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Wallet</p>
        <p className='text-black text-sm'>0xa91172edd1dbeac...</p>

   </div>
    </div>
</div>



<div className=' mt-3 bg-white w-[250px] rounded-2xl  h-[210px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className="relative bg-gray-900 h-[130px] rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={RainCoins1}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'>Offset Coins</p>
        <p className='text-black text-sm'>1289.7</p>

   </div>
    </div>
</div>

 </div>
     
    </>
  )
}

export default WalletCard