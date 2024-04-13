import React from 'react'
import Mainslider from '../components/Mainslider/Mainslider.jsx'
import CategorySlider from '../components/CategorySlider/CategorySlider.jsx'
import Products from '../components/Products/Products.jsx'

export default function HomePage() {
  return (
    <div>
      <Mainslider/>
      <CategorySlider/>
      <Products/>
    </div>
  )
}
