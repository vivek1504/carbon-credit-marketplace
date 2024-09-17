import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="bg-green-100 rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="ml-3 text-xl font-bold text-green-500">Payment Success!</h2>
      </div>
      <div className="text-center text-3xl font-bold text-gray-800 mb-4">
        IDR 1,000,000
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold text-gray-600">Ref Number</p>
          <p className="text-gray-800">000085752257</p>
        </div>
        <div>
          <p className="font-bold text-gray-600">Payment Time</p>
          <p className="text-gray-800">25-02-2023, 13:22:16</p>
        </div>
        <div>
          <p className="font-bold text-gray-600">Payment Method</p>
          <p className="text-gray-800">Bank Transfer</p>
        </div>
        <div>
          <p className="font-bold text-gray-600">Sender Name</p>
          <p className="text-gray-800">Antonio Roberto</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-600">Amount</p>
          <p className="text-gray-800">IDR 1,000,000</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-gray-600">Admin Fee</p>
          <p className="text-gray-800">IDR 193.00</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;