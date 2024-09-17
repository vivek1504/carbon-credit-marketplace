import React from 'react'
import { motion } from 'framer-motion'
import RainCoins1 from '../assets/RainCoins1.png'
import img1 from '../assets/img1.png'
import ProjectCard from './ProjectCard'
import ethereum from '../assets/ethereum.png'
import img4 from '../assets/img4.png'
import img3 from '../assets/img3.png'

function Project() {
  return (
    <>
        <div className="bg-gray-200 h-auto mt-4 items-center justify-center rounded-3xl p-4">
        <div className='relative p-1 bg-white w-[900px] rounded-3xl  h-[255px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className=" bg-gray-900 h-[230px] w-[260px] rounded-2xl overflow-hidden">
        <div className="flex">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img3}
          className="w-full h-[250px] object-cover rounded-2xl"
        />  
        <div className="absolute left-[310px] pt-4">
        <div className="relative w-full">
        <h1 className="text-4xl font-bold">ForestForFuture</h1>
        <div className="flex gap-2 mt-2">
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CORE
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              ECO-114
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              SDGs
            </span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
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

            <div className="flex absolute top-1 right-[-200px]">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">120</span>

            </div>
            <div className="absolute bg-black text-white right-[-200px] bottom-0 w-[150px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
      </div>
        </div>
        </div>
        
            </div>     
            </div>
        </div>





        <div className='relative p-1 bg-white w-[900px] rounded-3xl mt-4  h-[255px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className=" bg-gray-900 h-[230px] w-[260px] rounded-2xl overflow-hidden">
        <div className="flex">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img1}
          className="w-full h-[250px] object-cover rounded-2xl"
        />  
        <div className="absolute left-[310px] pt-4">
        <div className="relative w-full">
        <h1 className="text-4xl font-bold">ForestForFuture</h1>
        <div className="flex gap-2 mt-2">
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CORE
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              ECO-114
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              SDGs
            </span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
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

            <div className="flex absolute top-1 right-[-200px]">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">120</span>

            </div>
            <div className="absolute bg-black text-white right-[-200px] bottom-0 w-[150px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
      </div>
        </div>
        </div>
        
            </div>     
            </div>
        </div>


        <div className='relative p-1 bg-white w-[900px] rounded-3xl mt-4  h-[255px] shadow-xl'>
        <div className=" rounded-2xl bg-gray m-2   overflow-hidden">
        <div className=" bg-gray-900 h-[230px] w-[260px] rounded-2xl overflow-hidden">
        <div className="flex">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={img4}
          className="w-full h-[250px] object-cover rounded-2xl"
        />  
        <div className="absolute left-[310px] pt-4">
        <div className="relative w-full">
        <h1 className="text-4xl font-bold">ForestForFuture</h1>
        <div className="flex gap-2 mt-2">
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CORE
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              ECO-114
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              SDGs
            </span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
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

            <div className="flex absolute top-1 right-[-200px]">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">120</span>

            </div>
            <div className="absolute bg-black text-white right-[-200px] bottom-0 w-[150px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
      </div>
        </div>
        </div>
        
            </div>     
            </div>
        </div>




</div>

    </>
  )
}

export default Project