import React from 'react';
import ProductCard from './ProductCard';
import TransactionActivity from './TransactionActivity';
import TransactionTable from './TransactionTable';
import ProjectComponent from './ProjectComponent';

const ManageNFTs = () => {
  return (
    <>
    <div className="relative flex items-end justify-end">
    <div className="bg-gray-900 text-white p-6 m-4 rounded-2xl w-[1160px] h-[390px]">
      <div className="">
        <h2 className="text-5xl font-bold my-8  ">MANAGE YOUR NFTS</h2>
        <p className="text-gray-400">
          The world’s first and <span className="text-white text-bold">LARGEST DIGITAL MARKETPLACE</span> for crypto collectibles
          and non-fungible tokens (NFTs). 
        </p>
        <p className="text-gray-400">
        Buy, sell, and discover exclusive digital items.
        </p>
      </div>

        <p className="absolute right-[20px] text-gray-500 text-4xl top-[100PX]">EXPLORE ALL P</p>
        <p className="absolute right-[20px] text-gray-600 text-4xl top-[150PX]">EXPLORE A</p>
        <p className="absolute right-[20px] text-gray-700 text-4xl top-[200PX]">EXPLO</p>
        
        <div className='flex text-white pt-10 space-x-4'>
            <button className='bg-gray-700 w-[220px]  h-[50px] px-5 rounded-3xl'>
            <label for="underline_select" class="sr-only">Underline select</label>
            <span className="">Token &nbsp;  ∣ &nbsp;  &nbsp;</span>
            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option selected>Carbon Offset</option>
                  <option value="US">Carbon</option>
                  
              </select>
                <span className=''> ⌄ </span>

              <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option selected>Carbon Offset</option>
                  <option value="US">United States</option>
                  
              </select>
                
            </button>

            <button className='bg-gray-700 w-[220px]  h-[50px] px-5 rounded-3xl'>
                <span className="">Status &nbsp;  ∣ &nbsp;  &nbsp;</span>
                <span className=''>New &nbsp; &nbsp; &nbsp;</span>
                <span className=''> ⌄ </span>
            </button>

            <button className='bg-gray-700 w-[220px]  h-[50px] px-5 rounded-3xl'>
                <span className="">Currency &nbsp;  ∣ &nbsp;  &nbsp;</span>
                <span className=''>ETH &nbsp; &nbsp; &nbsp;</span>
                <span className=''> ⌄ </span>
            </button>
        </div>

       <ProductCard />    
    </div>
    <div className='absolute top-[690px] left-[365px] w-[1140px]'>
    <ProjectComponent />

    </div>
    </div>
    </>
  );
};

export default ManageNFTs;
