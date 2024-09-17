import React, { useState, useCallback, useNavigate } from "react";
import signupImg from '../assets/SignupImg.jpg';
import Phantom from '../assets/phantom.png';
import metaMask from '../assets/metamask.png';
import { useRecoilState } from "recoil";
import { WalletAddressAtom } from "../atom";

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useRecoilState(WalletAddressAtom);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");
  

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      if (isConnecting) {
        setError("A connection request is already in progress. Please wait.");
        return; // Prevent multiple requests
      }

      setIsConnecting(true);
      setError("");

      try {
        // Request wallet connection and get wallet address
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const account = accounts[0];
        setWalletAddress(account);
        console.log("Wallet Address:", account);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
        if (error.code === -32002) {
          setError("A connection request is already in progress. Please wait.");
        } else {
          setError("Failed to connect wallet.");
        }
      } finally {
        setIsConnecting(false); // Allow future requests
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  }, [isConnecting]);



  return (
    <>
      <div className="min-h-screen">
        <img src={signupImg} alt="" className="relative h-[730px] w-full flex items-center justify-center overflow-hidden " />
        <div className="absolute bg-gray-900 rounded-3xl top-[25px] w-[1400px] right-[80px] h-[680px] overflow-hidden">
          <img src={signupImg} alt="" className="absolute w-[800px] h-[680px] rounded-3xl" />
          <div className="absolute right-[70px] top-[75px] p-8 rounded-lg w-full max-w-md shadow-md">
            <div className="text-white mb-8">
              <h1 className="text-4xl font-semibold">Connect Your Wallet</h1>
              <p className="text-gray-400 mt-2">Already have an account? <span className="text-[#D3FFCA] cursor-pointer">Login</span></p>
            </div>

            <div className="w-full max-w-sm">
              {/* Phantom Wallet */}
              <div className="flex items-center justify-between h-[120px] bg-purple-500 text-white rounded-lg p-4 mb-4 cursor-pointer hover:bg-purple-600 transition-colors">
                <button className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <img src={Phantom} alt="Phantom" className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-semibold ml-6">Phantom Wallet</p>
                    <p className="text-sm ml-6">0x32Be343B94F86...</p>
                  </div>
                </button>
              </div>

              {/* MetaMask Wallet */}
              <div className="flex items-center justify-between h-[120px] bg-orange-500 text-white rounded-lg p-4 mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                <button onClick={connectWallet} className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <img src={metaMask} alt="MetaMask" className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-semibold ml-6">MetaMask</p>
                    <p className="text-sm ml-6">
                      {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : '0x32Be343B94F86...'}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <button onClick={()=>{
                window.location.href = '/mintToken';
              }} className="bg-gray-700 text-white py-2 px-6 mt-6 w-[300px] h-[50px] rounded-2xl hover:bg-gray-600">
                Continue
              </button>
            </div>
            
            {/* Display wallet address if connected */}
            {walletAddress && (
              <div className="text-white mt-4">
                <p>Connected Wallet Address: {walletAddress}</p>
              </div>
            )}

            {/* Display error message if any */}
            {error && (
              <div className="text-red-500 mt-4">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
