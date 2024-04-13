import React from 'react'

export default function Profile({userData}) {
    console.log(userData);
  return (
    <>

<div className="container text-center mt-5 pt-5">

<h2>my name is :  {userData?.name}</h2>
<h2> my role is : {userData?.role}</h2>
<h2>my id is : {userData?.id} </h2>

</div>
    </>
  )
}
