
import React, { useEffect, useState } from 'react';
import ethereum from '../assets/ethereum.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ProjectId , Vintage, Country, Price, ProjectName, TotalCredits, AvailableCredits } from '../atom';

const ProjectVerification = () => {
  const [projectId, setProjectId] = useRecoilState(ProjectId);
  const [availableToken, setAvailableToken] = useRecoilState(AvailableCredits);
  const [vintage, setVintage] = useRecoilState(Vintage);
  const [country, setCountry] = useRecoilState(Country);
  const [price, setPrice] = useRecoilState(Price);
  const [totalCredits,setTotalCredits] = useRecoilState(TotalCredits);
  const [availableCredits,setAvailableCredits] = useRecoilState(AvailableCredits)

  const [projectName,setProjectName] = useRecoilState(ProjectName);
  const [shouldVerify, setShouldVerify] = useState(false); // New state to trigger verification

  const handleProjectIdChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleContinue = () => {
    navigate('/transaction')
    console.log('Continuing with Project ID:', projectId);
  };

  const handleVerify = () => {
    setShouldVerify(true); // Trigger useEffect to verify project data
  };

  useEffect(() => {
    if (shouldVerify && projectId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/info/${projectId}`);
          setAvailableToken(response.data.availableCredits);
          setVintage(response.data.vintage);
          setCountry(response.data.region);
          setPrice(response.data.price);
          setProjectName(response.data.projectName);
          setTotalCredits(response.data.numberOfCredits);
          setAvailableCredits(response.data.availableCredits);

        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };

      fetchData();
      setShouldVerify(false); // Reset the trigger after the verification is complete
    }
  }, [shouldVerify, projectId]);
  const navigate = useNavigate();

  return (
    <div>
      {/* Your JSX code here */}
      <div className="flex bg-white mt-6 rounded-3xl p-4 gap-8">
        <div className='p-4'>
          <p className="text-gray-800 text-xl font-bold">Available Token</p>
          <p className="text-gray-600 text-lg">{availableToken ? availableToken : "--"}</p>
        </div>
        <div className='p-4'>
          <p className="text-gray-800 text-xl font-bold">Vintage</p>
          <p className="text-gray-600 text-lg">{vintage ? vintage : "--"}</p>
        </div>
        <div className='p-4'>
          <p className="text-gray-800 text-xl font-bold">Country</p>
          <p className="text-gray-600 text-lg">{country ? country : "--"}</p>
        </div>
      </div>

      <div className="flex absolute right-[50px] top-8 ">
        <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
          <span><img src={ethereum} alt="" className="h-10 w-9" /></span>
        </div>
        <span className="text-bold text-black text-xl pt-[10px] pl-2">{price ? price : "--"}</span>
        <p className='text-black absolute top-12 ml-9'>Price</p>
      </div>

      <div className='border-b-2 pt-6 mx-6'></div>
      <div className="container mx-auto w-[800px] p-8">
        <div className="p-6 w-[800px]">
          <label htmlFor="projectId" className="text-lg font-semibold text-black">Enter the Project ID</label>
          <br />
          <input
            type="text"
            id="projectId"
            value={projectId}
            onChange={handleProjectIdChange}
            className="w-[670px] h-[60px] px-4 bg-gray-200 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder='Project ID'
          />
        </div>
        <div className="mt-6 gap-4 flex items-center justify-center">
          <button
            onClick={handleVerify}
            className="px-6 py-3 w-[200px] rounded-2xl bg-[#D3FFCA] text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Verify
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-3 w-[200px] rounded-2xl bg-[#303139] text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectVerification;