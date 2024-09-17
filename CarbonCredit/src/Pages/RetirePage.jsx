import React from 'react'
import RetirementForm from '../Components/RetirementForm'
import AceMarketplace from '../Components/AceMarketPlace'
import Menu from '../Components/Menu'


function RetirePage() {
  return (
        <>
                <div className=' top-5 left-5 fixed'>
        <AceMarketplace />
        <Menu />
        </div>

    <div className="relative flex items-end justify-end overflow-hidden">

      <div className="bg-gray-900 text-white p-6 m-4 rounded-2xl w-[1160px] h-[390px]">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold my-8  ">Aperam BioEnergia</h2>
        <p className="text-white text-xl font-bold my-8 ">
          PUR-175613
        </p>
        
      </div>
      <p className='text-gray-400'>Aperam BioEnergia is a well-established Brazilian company operating in
      the forestry and renewable energy sectors. Situated in the northeast</p>
      <p className='text-gray-400' >  region of Minas Gerais, Aperam manages a charcoal operation with a
      production capacity of approximately 420,000 tons per year, all with</p>

      <p className="text-gray-400">
        emissions control. This operation is supported by about 126,000
        hectares of FSC-certified planted and native forests, which
        significantly
      </p>

      <p className='text-gray-400'>impact local biodiversity and the economy.
      </p>
       </div> 
       </div>

       <div className="absolute right-[220px] top-[240px]">
         <RetirementForm />
       </div>
        </>
  )
}

export default RetirePage