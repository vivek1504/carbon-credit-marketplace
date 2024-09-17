import React from "react";
import ethereum from "../assets/ethereum.png";

const ProjectCard = () => {
  return (
    <div className="bg-gray-100 h-auto p-7 w-[950px] rounded-3xl overflow-y-auto max-h-[400px]">
      <div className="relative bg-white rounded-3xl p-4">
        <h1 className="text-4xl font-bold">PUR-175613-2023</h1>
        <div className="flex gap-2 mt-2">
          
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
            <div>
              <p className="text-gray-800 text-xl font-bold">Available Token</p>
              <p className="text-gray-600 text-lg">50/100</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Vintage</p>
              <p className="text-gray-600 text-lg">2024</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Status</p>
              <p className="text-gray-600 text-lg">active</p>
            </div>
            
          </div>
          <div className="flex absolute top-1 right-14">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">120</span>

            </div>
            <div className="absolute bg-black text-white right-10 bottom-2 w-[160px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
        </div>

           
        </div>

        <div className="relative bg-white rounded-3xl p-4 mt-4">
        <h1 className="text-4xl font-bold">PUR-175613-2023</h1>
        <div className="flex gap-2 mt-2">
          
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
            <div>
              <p className="text-gray-800 text-xl font-bold">Available Token</p>
              <p className="text-gray-600 text-lg">50/100</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Vintage</p>
              <p className="text-gray-600 text-lg">2024</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Status</p>
              <p className="text-gray-600 text-lg">active</p>
            </div>
            
          </div>
          <div className="flex absolute top-1 right-14">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">98</span>

            </div>
            <div className="absolute bg-black text-white right-10 bottom-2 w-[160px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
        </div>

           
        </div>

        <div className="relative bg-white rounded-3xl p-4 mt-4">
        <h1 className="text-4xl font-bold">PUR-175613-2023</h1>
        <div className="flex gap-2 mt-2">
          
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
            <div>
              <p className="text-gray-800 text-xl font-bold">Available Token</p>
              <p className="text-gray-600 text-lg">50/100</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Vintage</p>
              <p className="text-gray-600 text-lg">2024</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Status</p>
              <p className="text-gray-600 text-lg">active</p>
            </div>
            
          </div>
          <div className="flex absolute top-1 right-14">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">78</span>

            </div>
            <div className="absolute bg-black text-white right-10 bottom-2 w-[160px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
        </div>

           
        </div>
    </div>
  );
};

export default ProjectCard;