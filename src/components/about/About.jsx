import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StyleAbout from "./about.module.css"
import imags from "./img/fd6f05b7e4f0277ac5571d9a15a12ddb.png"

function About() {
  return (
    <>
      <section className={StyleAbout.contaner}>
          <div className={StyleAbout.HerosecAll}>
            
          <div className={StyleAbout.mainSecLeft}>
          <div className={StyleAbout.Titlehead}>
            <h1>about us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error perspiciatis adipisci praesentium molestias incidunt.</p>
          </div>
          <div className={StyleAbout.image}>
            <img src={imags} alt="img" />
          </div>

        </div>
        <div className={StyleAbout.mainSecRight}>
          <div className={StyleAbout.TitleRight}>
          <h1>where</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, ea distinctio aspernatur cupiditate nulla eum eos provident? Asperiores a blanditiis reprehenderit eius magni neque ducimus cum quidem? Consequuntur omnis tempora ab, alias, nisi accusantium tenetur quidem, mollitia iste laudantium dolore doloribus cum eaque repellendus quod culpa? Harum non quos laboriosam.</p>

          </div>

          <Button variant="warning"> help me</Button>
        </div>
          </div>



      </section>




    </>
  )
}


export default About