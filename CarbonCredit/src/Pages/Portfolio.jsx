import React from 'react'
import AceMarketplace from '../Components/AceMarketPlace'
import Menu from '../Components/Menu'
import ProductCard from '../Components/ProductCard'
import WalletCard from '../Components/WalletCard.jsx'
import { motion } from 'framer-motion'
import RainCoins1 from '../assets/RainCoins1.png'
import g2 from '../assets/g2.png'
import Project from '../Components/Project.jsx'
import ProjectCard from '../Components/ProjectCard.jsx'


function Portfolio() {
  return (
    <>
    <div className=' top-5 left-5 fixed'>
        <AceMarketplace />
        <Menu />
    </div>

    <div className="relative flex items-end justify-end">
    <div className="bg-gray-900 text-white p-6 m-4 rounded-2xl w-[1160px] h-[390px]">
      <div className="">
        <h2 className="text-5xl font-bold my-8  ">PORTFOLIO</h2>
        <p className="text-gray-400">
          Welcome back to the ./Carbon <span className="text-white text-bold">VERMA</span>
        </p>

      </div>

       <WalletCard />  
    </div>

    <div className="absolute bottom-[100px] right-10">

    <div className='pt-2  bg-white w-[250px] rounded-2xl  h-[200px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className="relative border-dashed border-2 border-sky-500  h-[130px] rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={g2}
          className="w-[140px] h-auto  ml-10 object-cover rounded-2xl"
        />
        
      </div>
      <div className="m-3 h-[35px] flex items-center justify-center bg-black rounded-2xl text-white">
          <button className='rounded-2xl'>Mint Carbon Token</button>

   </div>
    </div>
    </div>
    </div>

    <div className="absolute mt-3  top-[450px] right-[130px]">
            <Project />
    </div>
    </div>


    
    </>
  )
}

export default Portfolio