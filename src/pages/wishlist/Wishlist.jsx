import React from 'react'
import { useGlobalStore } from '../../hooks/useGlobalStore'
import PropertyListing from '../../components/PropertyListing'

function Wishlist() {
  const {store, _} = useGlobalStore()

  return (
    <div className='container py-4'>
      <h2 className='fw-bolder mb-3'>Wishlist Page</h2>
      <PropertyListing properties={store.wishlist}/>
    </div>
  )
}

export default Wishlist
