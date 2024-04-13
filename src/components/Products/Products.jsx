import axios from 'axios'
import React , { useEffect, useState  }from 'react'
import Product from '../Product/Product.jsx'

// export default function Products() {
//   const  [ products ,setProducts ] = useState([])
//   const baseUrl = 'https://ecommerce.routemisr.com'
//   const  getAllProducts =  async() =>{
//     let {data} = await axios.get(`${baseUrl}products`)
//     console.log(data.data);
// setProducts(data.data)
//   }

//   useEffect(() => {
    
//     getAllProducts();
//   }, []);

//   return (
//     <div>
//       Products
//     </div>
//   )
// }




export default function Products() {
  const  [ products ,setProducts ] = useState([])
  const baseUrl = 'https://ecommerce.routemisr.com'
  const  getAllProducts =  async() =>{
    let {data} = await axios.get(`${baseUrl}/api/v1/products`)
    console.log(data.data);
setProducts(data.data)
  }

  useEffect(() => {
    
    getAllProducts();
  }, []);




  
  return (
    
<>
<div className="container">
  <div className="row">
<Product products={products}/>

  </div>
</div>
</>
  )
}

