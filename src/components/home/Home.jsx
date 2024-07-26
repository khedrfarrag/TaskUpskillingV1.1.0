import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import StyleHome from "./home.module.css"
//use state

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className={StyleHome.contaner}>
        <img className={StyleHome.image} src="1png.jpg" alt="" />
        <div className={StyleHome.mainSection}>
          <div className={StyleHome.mainTitle}>
            <span className={StyleHome.mainimg}><img src="لقطة شاشة 2024-07-26 142801.png" alt="" /></span>
            <div className={StyleHome.TextHead}>
              <span>Round Rock</span>
              <span>Trush Hauling</span>
            </div>
          </div>
          <div className={StyleHome.ButtonExport}>
            <Button>exports</Button>
          </div>
          <div className={StyleHome.TextLorem}>
            <h1>lorem</h1>
            <h1>lorem lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste soluta illo praesentium! Mollitia optio, veritatis sequi qui dolor velit voluptatibus nostrum amet beatae placeat, nihil officiis. Consequuntur quae repudiandae ducimus.</p>
          </div>
          <div className={StyleHome.ButtonHelpme}>
            <Button>help me</Button>
          </div>


        </div>

      </section>

    </>
  )
}

export default Home