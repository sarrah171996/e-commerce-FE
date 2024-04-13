import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Login({saveUserData}) {


  const notify = (msg) => {
    toast(msg)
  };

  let navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  let validationSchema = yup.object({
    email: yup.string().email('Invalid EMail').required(),
    password: yup.string().min(6, "Your password must be at least 6 chars").required(),
  })

  let RegiterFormik = useFormik({
    initialValues: {
      email: '',
      password: '',

    },

    validationSchema,

    onSubmit: (values) => {

      setLoading(true)

      axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).then((data) => {

        if (data.status === 200 ) {
          localStorage.setItem('token' , data.data.token)
          saveUserData()
          setLoading(false)
          notify('Success!')
          navigate('/')
        }

      }).catch((error) => {
        if (error.response.status === 409) {
          setLoading(false)
          notify(error.response.data.message)

        }
      })


    },



  })
  return (
    <>
      <div className="w-50 m-auto my-5">
        <h2 className='mt-5 mb-5'>Login</h2>
        <form onSubmit={RegiterFormik.handleSubmit}>


          <label htmlFor='name'> Email </label>
          <input value={RegiterFormik.values.email} onChange={RegiterFormik.handleChange} className='form-control my-3' type="email" name="email" id="email" />


          <div>
            {RegiterFormik.errors.email && RegiterFormik.touched.email ? <h6 className='text-danger'>invalid email</h6> : ''}
          </div>


          <label htmlFor='password'> Password </label>
          <input value={RegiterFormik.values.password} onChange={RegiterFormik.handleChange} className='form-control my-3' type="password" name="password" id="password" />

          <div>
            {RegiterFormik.errors.password && RegiterFormik.touched.password ? <h6 className='text-danger'>invalid passWord</h6> : ''}
          </div>






          <button disabled={!(RegiterFormik.isValid && RegiterFormik.dirty && !loading)} className='btn bg-main text-white'>


            {!loading ? 'Login' : <i className='fas fa-spinner fa-spin' ></i>}

          </button>

        </form>
      </div>
    </>
  )
}
