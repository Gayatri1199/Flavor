import React from 'react'
import HeroBanner from '../components/HeroBanner'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const HomePage = () => {
  return (
    <div><HeroBanner/>
    <div className='px-32'><FoodItems/>
    
    </div>
    <Cart/>
    </div>
  )
}

export default HomePage