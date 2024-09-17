import React from 'react'
import ethereum from '../assets/ethereum.png'
import PaymentSuccessfull from './PaymentSuccessfull'


function PaymentComponent() {
  return (
    <>
    <div className='relative h-[400px] rounded-3xl bg-white mt-10 shadow'>

<div className="mt-12 pt-8 px-4">
      <div className="flex gap-8">
        <div>
          <p className="text-gray-800 text-xl font-bold">Available Token</p>
          <p className="text-gray-600 text-lg">90/100</p>
        </div>
        <div>
          <p className="text-gray-800 text-xl font-bold">Vintage</p>
          <p className="text-gray-600 text-lg">2024</p>
        </div>
        <div>
          <p className="text-gray-800 text-xl font-bold">Country</p>
          <p className="text-gray-600 text-lg">Brazil</p>
        </div>
        <div>
          <p className="text-gray-800 text-xl font-bold">Environmental Effect</p>
          <p className="text-gray-600 text-lg">1000</p>
        </div>
        
      </div>
    </div>

        <div className="flex absolute right-[50px] top-8 ">
            <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
            <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

            </div>
            <span className="text-bold text-black text-xl pt-[10px] pl-2">120</span>

              <p className='text-black absolute top-12 ml-9'>Price</p>
        </div>

                 


<div className=' border-b-2 pt-6 mx-6'></div>

<div className="container mx-auto w-[800px] p-8">
   <PaymentSuccessfull />
</div>
</div>

    </>
  )
}

export default PaymentComponent