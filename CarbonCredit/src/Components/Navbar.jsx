import React, { useState } from 'react';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(1); // By default, "Transactions" is active

  // List of navbar items
  const menuItems = ['Dashboard', 'Transactions', 'Analytics', 'History'];

  // Function to handle the click and set the active item
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/221/135/original/carbon-credit-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg" 
          alt="Logo" 
          className="h-12 rounded-full"
        />
        <ul className="ml-6 flex space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`cursor-pointer ${
                activeIndex === index
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <div className="border rounded-full w-12 h-12 flex items-center justify-center bg-gray-300">
        <button className="focus:outline-none">
          <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 3v1m0 16v1m8.66-8.66h1m-16 0h1m12.02-6.02l.7-.7m-14.14 0l.7.7M18.36 18.36l.7.7m-14.14 0l.7-.7M12 6.34a5.66 5.66 0 100 11.32A5.66 5.66 0 0012 6.34z"/>
          </svg>
        </button>
        </div>

        {/* Notifications */}
        <div className="border rounded-full w-12 h-12 flex items-center justify-center bg-gray-300">
        <button className="focus:outline-none relative">
          <svg className="h-7 w-7 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-4 0v.341C8.67 6.165 7 8.388 7 11v3.158c0 .548-.214 1.077-.595 1.437L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span className="absolute top-1 right-[7px] block h-2 w-2 rounded-full bg-red-600"></span>
        </button>
        </div>

        {/* User Profile */}
        <img
          src="https://lens-storage.storage.googleapis.com/png/dc6e796ee71944548f6e781a1f9c3c44"
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
