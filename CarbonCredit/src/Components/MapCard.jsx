import React from 'react';
import img3 from '../assets/img3.png';
import { motion } from 'framer-motion';

function MapCard() {
  return (
    <div className="relative p-1 bg-white w-[940px]   rounded-3xl h-[255px] shadow-xl">
      <div className="rounded-2xl bg-gray m-2 overflow-hidden">
        <div className=" absolute right-3 h-[230px] w-[260px] rounded-2xl overflow-hidden">
          <div className="flex">
            <motion.img
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              src={img3}
              className="w-full h-[250px] object-cover rounded-2xl"
            />       
          </div>
        </div>
        <div className='m-4'>
            
            <div className="flex gap-8">
            <h1 className='text-4xl mr-12'>Details</h1>
            <div>
              <p className="text-gray-800 text-xl font-bold">ProjectID</p>
              <p className="text-gray-600 text-lg">PUR-175613</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Country</p>
              <p className="text-gray-600 text-lg">Brazil</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Methodology</p>
              <p className="text-gray-600 text-lg">Biochar</p>
            </div>
            
          </div>
        </div>
        <div className="flex h-auto pt-6 px-4">
                <div className="bg-[#146144]
                    h-[50px] w-[380px] rounded-2xl ml-1 flex justify-end items-end pr-5 pb-3 text-white">72 %</div>
                <div className="bg-[#D3FFCA] h-[50px] w-[192px] rounded-2xl ml-1 "></div>

                </div>
                <div className="flex">
                <p className='px-8 py-4 text-lg text-black text-semibold '>Available Credit</p>
                <p className='px-6 py-4 text-lg ml-[240px] text-black '><b>7189 / </b>10000</p>
                

                </div>          
      </div>
    </div>
  );
}

export default MapCard;