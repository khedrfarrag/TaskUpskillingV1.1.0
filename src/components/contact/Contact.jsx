import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import StyleContact from "./contact.module.css"
// use formic
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Testymonials from '../testymonials/Testymonials'
const Contact = () => {

  let [data,setdata]=useState([])

  //using useFormik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: ""
    },

    //handelSumbit Form
    onSubmit: (values) => {
      // console.log(values)
      // data.push(values)
      setdata(values)

    },

    //validation
    validationSchema: Yup.object({
      name: Yup.string().trim().max(8).min(4).matches().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      phone: Yup.number().required("Phone is required")

    })


  })

  console.log(data)

  // console.log(formik.errors)

  // console.log(formik.values)


  return (
    <>
      <section className={StyleContact.contaner}>
        <div className={StyleContact.headerSection}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>contact us</h1>
        </div>

        <div className={StyleContact.mainSecForm}>
          <form onSubmit={formik.handleSubmit} >
            <label htmlFor="name" className={formik.touched.name && formik.errors.name ? StyleContact.Error : ""} >

              {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}

            </label>
            <input
              type="text"
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name"
              onBlur={formik.handleBlur}
            />
            <label htmlFor="Email" className={formik.touched.email && formik.errors.email ? StyleContact.Error : ""} >
              {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}

            </label>
            <input
              type={'email'}
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your email"
              onBlur={formik.handleBlur}
            />
            <label htmlFor="Phone" className={formik.touched.phone && formik.errors.phone ? StyleContact.Error : ""} >
              {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone"}

            </label>
            <input

              type='text'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder='Enter your phone'
              onBlur={formik.handleBlur}
            />
            <Button type='submit' variant="outline-primary">Sunmit</Button> 
           {/* <Link to={"/Testymonials"}><Button type='submit' variant="outline-primary">Sunmit</Button>  </Link>  */}


          </form>
          <div className={StyleContact.HeroContactMe}>
            <div className={StyleContact.HeroEmail}>
              <box-icon name='envelope' type='solid' color='#6D91EE' ></box-icon>
              <a href="khedr.farrag@gmail.com">khedr.farrag@gmail.com</a>
            </div>
            <div className={StyleContact.HeroPhone}>
              <box-icon name='phone' type='solid' color='#6D91EE' ></box-icon>
              <a href="#">01090259510</a>
            </div>
          </div>

        </div>
      </section>

    <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>


    
      {/* <Testymonials Data={data} title="all data"/> */}


    </>
  )
}


export default Contact 