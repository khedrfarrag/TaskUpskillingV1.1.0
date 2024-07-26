import {React, useState} from 'react'
import Stylemonials from "./Testymonials.module.css"
// import Contact from '../contact/Contact'
function Testymonials() {
  // const Data=props
  // let [Data,setData]=useState(props)
  // console.log(Data)
  return (
    <>
    
      <div className={Stylemonials.headerSection}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1>Testymonials</h1>
      </div>

      <section className={Stylemonials.contaner}>
        <div className={Stylemonials.mainheroSec}>
          {
            [1, 2, 3, 4].map((item) => {
              return (
                <div key={item} className={Stylemonials.heroCard}>
                  <div className={Stylemonials.heroCardImg}>
                    <img src="2e8d8e4f5e65a3d48109b8bdbea95a8b.png" alt="" />
                  </div>
                  <div className={Stylemonials.heroCardText}>
                    <h1>courtney henry</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas, vitae ut tempore iste itaque rerum. Sapiente error at ipsum eum iste quo quae aut dolor porro? Delectus, officiis rem?</p>
                    <div className={Stylemonials.heroCardRate}>


                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                      <box-icon type='solid' name='star' color="#6D91EE"></box-icon>
                    </div>
                  </div>

                </div>
                

              )
              
            })
            
          }
            {/* <div>
            <h1>{Data.name}</h1>
            <p>{Data.email}</p>
            <p>{Data.phone}</p>
          </div> */}


        </div>
      </section>
    </>
  )
}
export default Testymonials