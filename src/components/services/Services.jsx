import React from 'react'
import StyleServices from "./services.module.css"
import { Button } from 'react-bootstrap'
function Services() {
  return (
    <>
      <div className={StyleServices.headerSection}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1>Services</h1>
      </div>
      <section className={StyleServices.contaner}>
        {

          [1, 2, 3].map((item) => {
            return (
              <div key={item} className={StyleServices.mainCard} >
                <div className={StyleServices.mainheaderImg}>
                  <img src="fba758a9dda73825ff383b42c06233e8.png" alt="" />
                </div>
                <div className={StyleServices.mainTitle}>
                  <h1>Our Services</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptate reprehenderit placeat atque maiores facere, amet sint, ea fuga repudiandae consequatur vero, ut quidem repellendus impedit sunt necessitatibus et voluptas?</p>
                </div>
              </div>
            )
          })
        }

      </section>
      <div className={StyleServices.butn}>
        <Button >help me</Button>

      </div>





    </>
  )
}

export default Services