import React from 'react'
import Slider from "react-slick";
import slider from '../../imgs/n1.png'
import slider2 from '../../imgs/n2.png'
import slider3 from '../../imgs/n3.png'
import slider4 from '../../imgs/n4.png'

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='my-3'>
        <Slider {...settings} > 
     

 
        <img src={slider} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={slider4} alt="" />


     
    </Slider>
  
    </div>
  )
}
