import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mainImg from '../../imgs/1680403397402-cover.jpeg'

export default function ProductDetails() {
 let { id} = useParams()

  const  [ product ,setProduct ] = useState({})
  // const [imgs , setImages] = useState([])
  const baseUrl = `https://ecommerce.routemisr.com`


  const  getProduct =  async() =>{
    let {data} = await axios.get(`${baseUrl}/api/v1/products/${id}`)
      
    
    console.log({msg:'done',product});

    console.log({imgs:product.images});
    
    setProduct(data.data)
    // setImages(product.images)
  }
  
  useEffect(() => {
    // console.log(imgs);
    
    getProduct();
  }, []);




  return (
    <>



<div className="container d-flex">
  <div className="col-md-2  mt-5 ">

 {    
//  imgs.map((img)=>{
   
//    return<>
//    <div className='mb-2'>
//   <img src={img} className='w-50 ' alt="" />
// </div>
  
//   </> 
//   })
}  


  </div>
<div className="col-md-4 mt-5 pt-5">

    <img src={product.imageCover} className='w-100 ' alt="" />
</div>

<div className="col-md-6 m-5 pt-5">
  <h2 className='text-main'> {product.description} </h2>
  <i className='fas fa-star rating-color mt-3 mb-3'></i> <span>{product.ratingsAverage}</span>
  <p className=' info-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt cum nihil dolorum ea corrupti eveniet nobis sed inventore quo veritatis?</p>
<h6 className=' '>stock : {product.quantity}</h6>
<div>


</div>
  <h5 className='text-main'>{product.price} $</h5>
  <button className='btn btn-success'>add to cart</button>
</div>
</div>
      
    </>
  )
}
