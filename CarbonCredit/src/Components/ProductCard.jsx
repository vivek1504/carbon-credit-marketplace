import React from 'react'
import { motion } from 'framer-motion'
import global from '../assets/global.png'
import stamp from '../assets/stamp.png'
import ethereum from '../assets/ethereum.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import box from '../assets/box.png'


function ProductCard() {
  return (
    <>

        <div className='flex space-x-1 mt-4'>
        <div className=' mt-3 bg-white w-[290px] rounded-2xl  h-[330px] shadow-xl'>
    <div className=" rounded-2xl  m-2  overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img4}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Ovid Wind Farm</p>
        <p className='text-black text-sm'>Renewable Energy, Ukraine</p>


        <div class="border border-t-gray-900  mt-3"></div>
        
        <div className="pt-3">
        <span className="flex space-x-0 bottom-2 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={box} alt="" className='w-[20px] h-[20px]' />
          </span>
          <span className='text-sm pr-5 text-gray-700'> <b>100 </b>Carbon Credit </span>
          <span className="text-gray-700 text-sm"><b>2024</b> Vintage</span>
          </span>
        </div>
        
      </div>
    </div>


    </div>




    <div className=' mt-3 bg-white w-[290px] rounded-2xl  h-[330px] shadow-xl'>
    <div className=" rounded-2xl  m-2  overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img3}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Ovid Wind Farm</p>
        <p className='text-black text-sm'>Renewable Energy, Ukraine</p>


        <div class="border border-t-gray-900  mt-3"></div>
        
        <div className="pt-3">
        <span className="flex space-x-0 bottom-2 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={box} alt="" className='w-[20px] h-[20px]' />
          </span>
          <span className='text-sm pr-5 text-gray-700'> <b>100 </b>Carbon Credit </span>
          <span className="text-gray-700 text-sm"><b>2024</b> Vintage</span>
          </span>
        </div>
        
      </div>
    </div>
    </div>




    <div className=' mt-3 bg-white w-[290px] rounded-2xl  h-[330px] shadow-xl'>
    <div className=" rounded-2xl  m-2  overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img2}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Ovid Wind Farm</p>
        <p className='text-black text-sm'>Renewable Energy, Ukraine</p>


        <div class="border border-t-gray-900  mt-3"></div>
        
        <div className="pt-3">
        <span className="flex space-x-0 bottom-2 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={box} alt="" className='w-[20px] h-[20px]' />
          </span>
          <span className='text-sm pr-5 text-gray-700'> <b>100 </b>Carbon Credit </span>
          <span className="text-gray-700 text-sm"><b>2024</b> Vintage</span>
          </span>
        </div>
        
      </div>
    </div>
    </div>




    <div className='pt-1 mt-3 bg-white w-[290px] rounded-2xl  h-[330px] shadow-xl'>
    <div className=" rounded-2xl  m-2  overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img4}
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-2">
          <p className='text-lg text-black font-bold'> Ovid Wind Farm</p>
        <p className='text-black text-sm'>Renewable Energy, Ukraine</p>


        <div class="border border-t-gray-900  mt-3"></div>
        
        <div className="pt-3">
        <span className="flex space-x-0 bottom-2 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={box} alt="" className='w-[20px] h-[20px]' />
          </span>
          <span className='text-sm pr-5 text-gray-700'> <b>100 </b>Carbon Credit </span>
          <span className="text-gray-700 text-sm"><b>2024</b> Vintage</span>
          </span>
        </div>
        
      </div>
    </div>
    </div>




        </div>        

     
    </>
  )
}

export default ProductCard