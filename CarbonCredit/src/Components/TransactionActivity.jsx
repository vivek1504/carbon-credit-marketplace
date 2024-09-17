import React from 'react'
import phantom from '../assets/phantom.png'
import { AvailableCredits, Country, ProjectName, TotalCredits } from '../atom'
import { useRecoilState } from 'recoil';

function TransactionActivity() {
  const [country, setCountry] = useRecoilState(Country);
  const [projectName, setProjectName] = useRecoilState(ProjectName);
  const [totalCredits, setTotalCredits] = useRecoilState(TotalCredits);
  const [availableCredits, setAvailableCredits] = useRecoilState(AvailableCredits);
  return (
    <>
    
        <div className="bg-white h-[250px] mt-8 rounded-3xl shadow">
            <div className="flex justify-between">
            <div>
            <p className='px-8 pt-8 pb-1 text-black  text-3xl'>{projectName}</p>
            <p className='px-8 text-black  pb-7'>Renewable Energy, {country}</p>
            </div>
            <div className='flex w-[200px] h-[60px] rounded-full border-2 border-indigo-400 mt-9 pt-1 mx-9 pr-4'>
                <img src={phantom} alt="" className='h-10 w-10 mx-3 mt-1' />
                <p className='text-xl mt-3 text-gray-500'>****32be34</p>
            </div>
            </div>
            <div className="flex h-auto px-4">
                <div className="bg-[#146144]
                    h-[50px] w-[427px] rounded-2xl ml-1 flex justify-end items-end pr-5 pb-3 text-white">72 %</div>
                <div className="bg-[#D3FFCA] h-[50px] w-[192px] rounded-2xl ml-1 "></div>
                <div className="bg-[#D3FFCA] h-[50px] w-[192px] rounded-2xl ml-[120px] flex justify-end items-end pr-5 pb-3 text-[#146144] ">72 %</div>
                <div className="bg-gray-200 h-[50px] w-[427px] rounded-2xl ml-1 "></div>
                </div>
                <div className="flex">
                <p className='px-8 py-4 text-lg text-black  '>Credit Limits</p>
                <p className='px-6 py-4 text-lg ml-[190px] text-black '><b>{availableCredits} / </b>{totalCredits}</p>
                <p className='px-6 py-4 text-lg ml-[110px] text-black '>Offset Available </p>
                <p className='px-6 py-4 text-lg ml-[160px] text-black '><b>{availableCredits} / </b>{totalCredits}</p>

                </div>                

        </div>

    
    </>
  )
}

export default TransactionActivity