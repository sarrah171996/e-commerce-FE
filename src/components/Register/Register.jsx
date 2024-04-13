import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Register() {
    const notify = (msg) => {
        toast(msg)
    };


  let navigate=  useNavigate()
  const [loading, setLoading] = useState(false);

    let validationSchema = yup.object({
        name:yup.string().min(3).max(15).required(),
        email:yup.string().email('Invalid EMail').required(),
        password:yup.string().min(6, "Your password must be at least 6 chars").required(),
        rePassword:yup.string().oneOf([yup.ref("password")]).required(), 
    })

    let RegiterFormik = useFormik({
        initialValues:{
            name : '',
            email: '',
            password:'',
            rePassword:''

        },
        
        validationSchema,

        onSubmit:(values)=>{

            setLoading(true)

            axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values).then((data)=>{
                console.log(data.data);
                if(data.status == 201){
                    setLoading(false)
notify('Success!')
                   navigate('/login')
                }                
                
            }).catch((error)=>{
if(error.response.status === 409){
    setLoading(false)
    notify(error.response.data.message)

}                
            })


console.log(values);
        },


  
    })
  return (
    <>
    <div className="w-50 m-auto my-5">
        <h2>Register Now</h2>
        <form onSubmit={RegiterFormik.handleSubmit}>
            <label htmlFor='name'> Name </label>
            <input value={RegiterFormik.values.name}  onChange={RegiterFormik.handleChange} className='form-control my-3' type="text"  name="name" id="name"  />
         
           <div>
           {RegiterFormik.errors.name && RegiterFormik.touched.name ? <h6 className='text-danger'>invalid name</h6> : ''}
           </div>

            <label htmlFor='name'> Email </label>
            <input value={RegiterFormik.values.email}  onChange={RegiterFormik.handleChange} className='form-control my-3' type="email"  name="email" id="email"  />

            <div>
           {RegiterFormik.errors.email && RegiterFormik.touched.email ? <h6 className='text-danger'>invalid email</h6> : ''}
           </div>


            <label htmlFor='password'> Password </label>
            <input value={RegiterFormik.values.password}  onChange={RegiterFormik.handleChange} className='form-control my-3' type="password"  name="password" id="password"  />

            <div>
           {RegiterFormik.errors.password && RegiterFormik.touched.password ? <h6 className='text-danger'>invalid passWord</h6> : ''}
           </div>


            <label htmlFor='rePassword'> rePassword </label>
            <input value={RegiterFormik.values.rePassword}  onChange={RegiterFormik.handleChange} className='form-control my-3' type="password"  name="rePassword" id="rePassword"  />

            <div>
           {RegiterFormik.errors.rePassword && RegiterFormik.touched.rePassword ? <h6 className='text-danger'>not matched</h6> : ''}
           </div>


<button  disabled={!(RegiterFormik.isValid&& RegiterFormik.dirty && !loading )} className='btn bg-main text-white'>
    
{!loading ? 'Register': <i className='fas fa-spinner fa-spin' ></i> }

</button>

         </form>
    </div>
    </>
  )
}
