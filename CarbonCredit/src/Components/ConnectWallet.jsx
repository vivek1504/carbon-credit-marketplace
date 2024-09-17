import React from 'react'
import Web3Modal from 'web3modal'
import {ethers} from 'ethers'

const providerOptions = {
   
}

async function connectWallet() {
    try {
     let web3modal = new Web3Modal({
       cacheProvider: false,
       providerOptions
     })
     const web3ModalInstance = await web3modal.connect()
     const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
     console.log(web3ModalProvider)
    } catch(err) {
     console.log(err)
    }
 }


function Wallet() {
  return (
    <>
          <button onClick={connectWallet}>connect wallet</button>

    </>
  )
}

export default Wallet