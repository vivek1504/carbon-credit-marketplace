import React from 'react';

const ProductTable = () => {
  const products = [
    {
      name: '   Ovid Wind Farm',
      vintage: '2024',
      country: 'Ukraine',
      token: '50',
      price: '$2999',
      action: 'Buy'
    },
    {
      name: 'Forest for Future',
      vintage: '2022',
      country: 'Ukraine',
      token: '50',
      price: '$2999',
      action: 'Buy'
    },
    {
      name: 'Hyundai SWEC',
      vintage: '2015',
      country: 'Ukraine',
      token: '50',
      price: '$2999',
      action: 'Buy'
    },
    
    {
      name: 'Pacajai REDD+',
      vintage: '2017',
      country: 'Ukraine',
      token: '50',
      price: '$2999',
      action: 'Buy'
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[1120px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              Project
            </th>
            <th scope="col" className="px-3 py-3">
              Vintage
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Token
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`bg-white border-b text-black hover:bg-gray-50 dark:hover:bg-gray-600`}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.vintage}</td>
              <td className="px-6 py-4">{product.country}</td>
              <td className="px-6 py-4">{product.token}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.action}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;