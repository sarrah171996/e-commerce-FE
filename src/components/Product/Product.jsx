import React from 'react'
import { Link } from 'react-router-dom';
import scarf from '../../imgs/1680403397402-cover.jpeg'

export default function Product({products}) {
  console.log(products);
  return (
    <>
        <h2>Products</h2>
    {products.map((item  , key) => {
      return <div key={item._id} className="col-md-2 my-5">

     <div className="product">

 <Link className='product-info' to={'/product-details/' + item._id}>
 
 <img src={item.imageCover} className='w-100' alt="" />
        <h6 className='text-main'>{item.category.name}</h6>
       <p className='fw-bold text-dark'> {item.title.split(' ').slice(0,2).join(' ')}</p>
       <div  className='d-flex justify-content-between align-items-center my-4' >
        <span className='text-main'>{item.price} EGP</span>
        <div className='text-main'>
          <i className='fas fa-star rating-color'></i>
          {item.ratingsAverage}
        </div>
       </div>



 
 </Link>
       <button className='btn bg-main text-white w-100'>Add to cart</button>
     </div>
      </div>
    })}
    </>
  )
}
