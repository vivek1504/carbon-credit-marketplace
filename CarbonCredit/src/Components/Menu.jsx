import React from 'react';
import portfolio from '../assets/portfolio.png';
import Notification from '../assets/notification.png';
import settings from '../assets/settings.png';
import ProductCard from './ProductCard';

const Menu = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="flex items-center py-2 hover:bg-gray-100 rounded-md">
          <button onClick={()=>{window.location.href('/hero')}} className='flex'>
          <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7-7-7" /></svg>
          MarketPlace
          </button>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-100 rounded-md">
          <img src={portfolio} alt="" className='text-gray-500 mr-2' />
          Portfolio
        </li>
        
        <li className="flex items-center py-2 hover:bg-gray-100 rounded-md">
          <img src={Notification} alt="" className='text-gray-500 mr-2 w-6 h-6' />
            Notification
        </li>
        <li className="flex items-center py-2 hover:bg-gray-100 rounded-md">
          <img src={settings} alt="" className='text-gray-500 mr-2 w-6 h-6' />
            Setting
        </li>
      </ul>
    </div>
  );
};

export default Menu;
