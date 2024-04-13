import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import Slider from "react-slick";


export default function CategorySlider() {
  const  [ categories ,setCategories ] = useState([])
  const baseUrl = 'https://ecommerce.routemisr.com'
  const  getAllCategories =  async() =>{
    let {data} = await axios.get(`${baseUrl}/api/v1/categories`)
    console.log(data.data);
setCategories(data.data)
  }

  useEffect(() => {
    
    getAllCategories();
  }, []);



  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows : false,
    autoplay : true,
    
  };

  
  return (
    
       <div className='my-3 container'>
        <h2>Shop popular Category</h2>
        <Slider {...settings} autoplaySpeed={3000}> 
     
     {categories.map((item , key )=>{
      return <div key={item._id}>
         <img src={item.image}  className="w-100  my-5" height={200} alt="" />
         <h6>{item.name}</h6>
      </div>

     })}

 
      

     
    </Slider>
    </div>
  )
}
