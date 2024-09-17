import React from 'react';
import carbon from '../assets/carbon.png'

function AceMarketplace() {
  return (
    <div className="flex items-center">
      <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center mr-6">
        <img src={carbon} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">
          <span className='text-[#D3FFCA]' >./  </span>
           Carbon 
           </h1>
        <div className="flex items-center mt-2">
          <div className="bg-gray-200 px-4 py-2 rounded-2xl mr-2">BETA</div>
          <div className="text-gray-600">Version</div>
        </div>
      </div>

    </div>
  );
}

export default AceMarketplace;