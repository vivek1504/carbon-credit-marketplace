import React from 'react'
import ManageNfts from '../Components/ManageNft'
import AceMarketplace from '../Components/AceMarketPlace'
import Menu from '../Components/Menu'

function HeroSection() {
  return (
    <>
    <div className='relative'>
      <div>
      <ManageNfts />
      </div>
      <div className=' top-5 left-5 fixed'>
        <AceMarketplace />
        <Menu />
      </div>
    </div>
    </>
  )
}

export default HeroSection